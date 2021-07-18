import { useNavigation } from '@react-navigation/core';
import { Auth } from 'aws-amplify';
import {
	Button,
	Center,
	FormControl,
	HStack,
	IconButton,
	Input,
	KeyboardAvoidingView,
	Spacer,
	Text,
	useDisclose,
	useToast,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { UpdateUserInput } from '../API';
import AvatarButton from '../components/AvatarButton';
import CameraActionSheet from '../components/CameraActionSheet';
import FollowButton from '../components/FollowButton';
import MyIcon from '../components/MyIcon';
import { colors } from '../global/constants';
import { getUser as getUserGql } from '../graphql/queries';
import {
	ProfileScreenProps,
	ScreenName,
	StackProps,
} from '../navigation/types';
import { Selectors, Store } from '../store';
import { updateUser } from '../utils/api/mutations';
import { getUser } from '../utils/api/queries';
import { formatHandler } from '../utils/helper';
import { storeImage } from '../utils/storage';

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
	const userId = route.params?.userId;

	const navigator = useNavigation();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclose();

	const currentUser = useSelector<Store.State, Store.User>(
		Selectors.getCurrentUser()
	);

	const [avatar, setAvatar] = useState<string | undefined>();
	const [bio, setBio] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [user, setUser] = useState<Store.User>();
	const [isCurrentUser, setIsCurrentUser] = useState(false);

	useEffect(() => {
		if (userId && userId !== currentUser.id) {
			setIsCurrentUser(false);
			(async () => {
				const tmpUser = await getUser(getUserGql, userId);
				setUser(tmpUser);
			})();
		} else {
			setIsCurrentUser(true);
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
				isCurrentUser &&
				displayName &&
				bio?.length < 500 &&
				displayName.length < 25 ? (
					<IconButton
						icon={
							<MyIcon
								color={colors.primary}
								name="content-save"
								// @ts-ignore
								variant="header"
							/>
						}
						onPress={updateProfile}
					/>
				) : null,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [avatar, bio, currentUser, displayName, navigation, user, isCurrentUser]);

	return (
		<KeyboardAvoidingView behavior="position">
			<ScrollView>
				<Center mt={4}>
					<AvatarButton
						onPress={isCurrentUser ? onOpen : undefined}
						size="large"
						source={{ s3Key: avatar }}
					/>
					<HStack mt={2} space={2}>
						<Text fontSize="xl">{formatHandler(user?.name)}</Text>
						{!isCurrentUser && user && <FollowButton userId={userId} />}
					</HStack>
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
						// onChangeText={(text: string) => setBio(text)}
					/>
				</FormControl>

				{isCurrentUser && (
					<>
						<Button onPress={() => navigator.navigate('ContactListScreen')}>
							Friends
						</Button>
						{/* <Button onPress={onOpen}>Change Avatar</Button> */}
						<Button
							colorScheme="secondary"
							onPress={() => Auth.signOut()}
							variant="outline"
						>
							Logout
						</Button>
					</>
				)}

				{!isCurrentUser && (
					<>
						<Button>Message</Button>
						<Button colorScheme="secondary" variant="outline">
							Block
						</Button>
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

const ProfileStackProps: StackProps<ProfileScreenProps> = {
	component: ProfileScreen,
	name: ScreenName.Profile,
	options: { title: 'Profile' },
};

export default ProfileStackProps;
