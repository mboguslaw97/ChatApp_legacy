import { Auth } from 'aws-amplify';
import React, { RefObject, useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
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
import { textMaxLength1, textMaxLength3 } from '../../global/constants';
import { GlobalStyles } from '../../global/styles';
import { User } from '../../global/types';
import { getUser as getUserGql } from '../../graphql/queries';
import { ProfileScreenProps } from '../../navigation/types';
import { ReduxStore } from '../../store';
import { updateUser } from '../../utils/api/mutations';
import { getUser } from '../../utils/api/queries';
import { formatHandler } from '../../utils/helper';
import { showSuccess } from '../../utils/notifications';
import { storeImage } from '../../utils/storage';
import createStyleSheet from './styles';

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
	const userId = route.params?.userId;

	const currentUser = useSelector<ReduxStore, User>(state => state.currentUser);
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors, globalStyles);

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
		<>
			<View style={styles.container}>
				<MyImage source={{ uri: avatar }} style={styles.avatar} />
				<Text style={styles.name}>{formatHandler(user?.name)}</Text>
				{userIsCurrentUser && (
					<ContainerList>
						<ListItemInput
							editable={false}
							label="Email"
							value={currentUser.email}
						/>
						<ListItemInput
							editable={false}
							label="Phone"
							value={currentUser.phone}
						/>
					</ContainerList>
				)}
				<ContainerList>
					<ListItemInput
						editable={userIsCurrentUser}
						label="Name"
						maxLength={textMaxLength1}
						onChangeText={(text: string) => setDisplayName(text)}
						value={displayName}
					/>
					<ListItemInput
						editable={userIsCurrentUser}
						label="Bio"
						maxLength={textMaxLength3}
						multiline
						onChangeText={(text: string) => setBio(text)}
						value={bio}
					/>
				</ContainerList>
				{userIsCurrentUser && (
					<ContainerList>
						<ListItemNav value="Friends" screen="ContactListScreen" />
					</ContainerList>
				)}
				{userIsCurrentUser && (
					<View>
						<ContainerList>
							<View style={globalStyles.containerListItem}>
								<MyButton
									title="Change Avatar"
									onPress={() => {
										const tref = sheetRef as RefObject<BottomSheet>;
										if (tref.current) tref.current.snapTo(0);
									}}
								/>
							</View>
						</ContainerList>
						<ContainerList>
							<View style={globalStyles.containerListItem}>
								<MyButton color={colors.red} title="Logout" onPress={logout} />
							</View>
						</ContainerList>
					</View>
				)}
			</View>
			<BottomSheetCamera
				ref={sheetRef}
				callback={uri => uri && setAvatar(uri)}
			/>
		</>
	);
};

export default ProfileScreen;
