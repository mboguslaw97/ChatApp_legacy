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
	useToast,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { UpdateUserInput } from '../API';
import AvatarButton from '../components/AvatarButton';
import CameraActionSheet from '../components/CameraActionSheet';
import { colors } from '../global/constants';
import { User } from '../global/types';
import { getUser as getUserGql } from '../graphql/queries';
import { ProfileScreenProps } from '../navigation/types';
import { ReduxStore } from '../store';
import { updateUser } from '../utils/api/mutations';
import { getUser } from '../utils/api/queries';
import { formatHandler } from '../utils/helper';
import { storeImage } from '../utils/storage';

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
	const userId = route.params?.userId;

	const navigator = useNavigation();
	const toast = useToast();
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

			updateUser(input, toast).then(() =>
				toast.show({ status: 'success', title: 'Profile saved!' })
			);
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
								color={colors.primary}
								// @ts-ignore
								variant="header"
							/>
						}
						onPress={updateProfile}
					/>
				) : null,
		});
	}, [
		avatar,
		bio,
		currentUser,
		displayName,
		navigation,
		toast,
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
					<AvatarButton
						onPress={onOpen}
						size="large"
						source={{ s3Key: avatar }}
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
						<Button onPress={() => navigator.navigate('ContactListScreen')}>
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

const ProfileStackProps = {
	component: ProfileScreen,
	name: 'ProfileScreen',
	options: { title: 'Profile' },
};

export default ProfileStackProps;
