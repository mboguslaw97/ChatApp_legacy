import { useNavigation } from '@react-navigation/core';
import { Auth } from 'aws-amplify';
import {
	Box,
	Button,
	Column,
	Container,
	FormControl,
	Input,
	Text,
} from 'native-base';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';

import { UpdateUserInput } from '../../API';
import BottomSheetCamera from '../../components/BottomSheetCamera';
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
						<MyButton onPress={updateProfile} title="Save" />
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
		<KeyboardAvoidingView behavior="position">
			<ScrollView>
				<MyImage source={{ s3Key: avatar }} style={styles.avatar} />
				<Text>{formatHandler(user?.name)}</Text>
				<FormControl>
					<FormControl.Label>Email</FormControl.Label>
					<Input defaultValue={currentUser.email} isDisabled />
				</FormControl>
				<FormControl>
					<FormControl.Label>Phone</FormControl.Label>
					<Input defaultValue={currentUser.phone} isDisabled />
				</FormControl>
				<FormControl>
					<FormControl.Label>Name</FormControl.Label>
					<Input
						defaultValue={displayName}
						onChangeText={(text: string) => setDisplayName(text)}
					/>
				</FormControl>
				<FormControl>
					<FormControl.Label>Bio</FormControl.Label>
					<Input
						defaultValue={bio}
						onChangeText={(text: string) => setBio(text)}
					/>
				</FormControl>
				{/* 
				<ListItem
					button
					onPress={() => navigator.navigate(contactListStackProps.name)}
				>
					<Text>Friends</Text>
				</ListItem>
			 */}
				{userIsCurrentUser && (
					<>
						<Button
							onPress={() => {
								const tref = sheetRef as RefObject<BottomSheet>;
								if (tref.current) tref.current.snapTo(0);
							}}
						>
							<Text>Change Avatar</Text>
						</Button>
						<Button onPress={logout}>
							<Text>Logout</Text>
						</Button>
					</>
				)}
				<BottomSheetCamera
					ref={sheetRef}
					callback={uri => uri && setAvatar(uri)}
				/>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const profileStackProps = {
	component: ProfileScreen,
	name: 'ProfileScreen',
};

export default profileStackProps;
