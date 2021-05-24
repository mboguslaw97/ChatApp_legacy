import { useNavigation } from '@react-navigation/core';
import { Auth } from 'aws-amplify';
import {
	Button,
	Container,
	Content,
	Form,
	H3,
	Input,
	Item,
	Label,
	List,
	ListItem,
	Text,
} from 'native-base';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';

import { UpdateUserInput } from '../../API';
import BottomSheetCamera from '../../components/BottomSheetCamera';
import ContainerList from '../../components/ContainerList';
import ListItemInput from '../../components/ListItemInput';
import ListItemNav from '../../components/ListItemNav';
import MyButton from '../../components/MyButton';
import MyImage from '../../components/MyImage';
import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { User } from '../../global/types';
import { getUser as getUserGql } from '../../graphql/queries';
import { ProfileScreenProps } from '../../navigation/types';
import { ReduxStore } from '../../store';
import { updateUser } from '../../utils/api/mutations';
import { getUser } from '../../utils/api/queries';
import { showSuccess } from '../../utils/banner';
import { formatHandler } from '../../utils/helper';
import { storeImage } from '../../utils/storage';
import contactListStackProps from '../ContactListScreen';
import createStyleSheet from './styles';

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
	const userId = route.params?.userId;

	const currentUser = useSelector<ReduxStore, User>(state => state.currentUser);
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors, globalStyles);

	const navigator = useNavigation();

	const sheetRef = useRef(null);

	const [avatar, setAvatar] = useState<string | undefined>();
	const [bio, setBio] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [user, setUser] = useState<User>();
	const [userIsCurrentUser, setUserIsCurrentUser] = useState(false);

	useEffect(() => {
		if (userId && userId !== currentUser.id) {
			setUserIsCurrentUser(false);
			(async () => {
				const tmpUser = await getUser(getUserGql, userId);
				setUser(tmpUser);
			})();
		} else {
			setUserIsCurrentUser(true);
			setUser(currentUser);
		}
	}, [userId, currentUser]);

	useEffect(() => {
		(async () => {
			setAvatar(user?.avatar);
			setBio(user?.bio ?? '');
			setDisplayName(user?.displayName ?? '');
		})();
	}, [user]);

	useEffect(() => {
		const updateProfile = async () => {
			const input: UpdateUserInput = {
				bio,
				displayName,
				id: currentUser.id,
			};

			if (avatar !== user?.avatar && avatar)
				input.avatar = await storeImage(avatar);

			updateUser(input).then(() => showSuccess('Profile saved!'));
		};

		navigation.setOptions({
			headerRight: () =>
				userIsCurrentUser &&
				displayName &&
				bio?.length < 500 &&
				displayName.length < 25 ? (
					<View style={globalStyles.containerHeaderRight}>
						<MyButton title="Save" onPress={updateProfile} />
					</View>
				) : null,
		});
	}, [
		avatar,
		bio,
		currentUser,
		displayName,
		globalStyles.containerHeaderRight,
		navigation,
		user,
		userIsCurrentUser,
	]);

	const logout = () => {
		Auth.signOut();
	};

	return (
		<Container>
			<Content>
				<MyImage source={{ s3Key: avatar }} style={styles.avatar} />
				<H3>{formatHandler(user?.name)}</H3>
				<Form>
					<Item stackedLabel>
						<Label>Email</Label>
						<Input defaultValue={currentUser.email} disabled />
					</Item>
					<Item stackedLabel>
						<Label>Phone</Label>
						<Input defaultValue={currentUser.phone} disabled />
					</Item>
					<Item stackedLabel>
						<Label>Name</Label>
						<Input
							onChangeText={(text: string) => setDisplayName(text)}
							disabled={!userIsCurrentUser}
							defaultValue={displayName}
						/>
					</Item>
					<Item stackedLabel>
						<Label>Bio</Label>
						<Input
							maxLength={200}
							multiline
							onChangeText={(text: string) => setBio(text)}
							disabled={!userIsCurrentUser}
							defaultValue={bio}
						/>
					</Item>
					<ListItem
						button
						onPress={() => navigator.navigate(contactListStackProps.name)}
					>
						<Text>Friends</Text>
					</ListItem>
				</Form>
				{userIsCurrentUser && (
					<>
						<Button
							block
							bordered
							onPress={() => {
								const tref = sheetRef as RefObject<BottomSheet>;
								if (tref.current) tref.current.snapTo(0);
							}}
						>
							<Text>Change Avatar</Text>
						</Button>
						<Button block danger onPress={logout}>
							<Text>Logout</Text>
						</Button>
					</>
				)}
			</Content>
			<BottomSheetCamera
				ref={sheetRef}
				callback={uri => uri && setAvatar(uri)}
			/>
		</Container>
	);
};

const profileStackProps = {
	component: ProfileScreen,
	name: 'ProfileScreen',
};

export default profileStackProps;
