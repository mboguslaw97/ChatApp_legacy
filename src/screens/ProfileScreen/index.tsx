import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { Auth } from 'aws-amplify';
import {
	Button,
	Center,
	FormControl,
	Icon,
	IconButton,
	Input,
	Spacer,
	Text,
	useDisclose,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { UpdateUserInput } from '../../API';
import CameraActionSheet from '../../components/CameraActionSheet';
import MyImage from '../../components/MyImage';
import { primary } from '../../global/constants';
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

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
	const userId = route.params?.userId;

	const navigator = useNavigation();

	const { isOpen, onOpen, onClose } = useDisclose();

	const currentUser = useSelector<ReduxStore, User>(state => state.currentUser);

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
					<IconButton
						icon={
							<Icon
								as={<MaterialCommunityIcons name="content-save" />}
								color={primary}
							/>
						}
						onPress={updateProfile}
						variant="header"
					/>
				) : null,
		});
	}, [
		avatar,
		bio,
		currentUser,
		displayName,
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
				<Center>
					<MyImage
						source={{ s3Key: avatar }}
						style={{
							borderRadius: 100,
							height: 100,
							marginBottom: 10,
							marginTop: 10,
							width: 100,
						}}
					/>
					<Text fontSize="xl">{formatHandler(user?.name)}</Text>
				</Center>
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

				{userIsCurrentUser && (
					<>
						<Button
							onPress={() => navigator.navigate(contactListStackProps.name)}
						>
							Friends
						</Button>
						<Button onPress={onOpen}>Change Avatar</Button>
						<Button onPress={logout}>Logout</Button>
					</>
				)}
				<Spacer p={10} />
			</ScrollView>
			<CameraActionSheet
				callback={uri => uri && setAvatar(uri)}
				isOpen={isOpen}
				onClose={onClose}
			/>
		</KeyboardAvoidingView>
	);
};

const profileStackProps = {
	component: ProfileScreen,
	name: 'ProfileScreen',
};

export default profileStackProps;
