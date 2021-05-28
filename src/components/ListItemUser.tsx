import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Divider, HStack, Icon, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { gray, iconSize1, red } from '../global/constants';
import { Contact, User } from '../global/types';
import profileStackProps from '../screens/ProfileScreen';
import { ReduxStore } from '../store';
import { createContact, deleteContact } from '../utils/api/mutations';
import { formatHandler } from '../utils/helper';
import ButtonAvatar from './ButtonAvatar';

type Props = {
	onPress?: () => void;
	user: User;
};

const ListItemUser: React.FC<Props> = ({ user, onPress }) => {
	const navigation = useNavigation();

	const currentUserId = useSelector<ReduxStore, string>(state => {
		return state.currentUser.id;
	});

	const followees = useSelector<ReduxStore, Contact[]>(state => {
		return state.currentUser.followees.items;
	});

	const [followeeContact, setFolloweeContact] =
		useState<Contact | undefined>(undefined);

	useEffect(() => {
		setFolloweeContact(
			followees.find(contact => contact.followeeId === user.id)
		);
	}, [followees, user.id]);

	if (user.id === currentUserId) {
		console.warn(`Tried to create ${ListItemUser.name} for currnetUser`);
		return null;
	}

	if (!onPress)
		onPress = () =>
			navigation.navigate(profileStackProps.name, { userId: user.id });

	const toggleContact = () => {
		if (followeeContact) deleteContact({ id: followeeContact.id });
		else createContact({ followeeId: user.id, followerId: currentUserId });
	};

	return (
		<TouchableOpacity onPress={onPress}>
			<HStack alignItems="center" justifyContent="space-between" p={2}>
				<HStack alignItems="center" space={3}>
					<ButtonAvatar uri={user.avatar} userId={user.id} />
					{user.displayName && <Text>{user.displayName}</Text>}
					<Text color={gray}>{formatHandler(user.name)}</Text>
				</HStack>
				<TouchableOpacity onPress={toggleContact}>
					<Icon
						as={
							<MaterialCommunityIcons
								name={followeeContact ? 'heart' : 'heart-outline'}
							/>
						}
						color={red}
					/>
				</TouchableOpacity>
			</HStack>
			<Divider />
		</TouchableOpacity>
	);
};

export default ListItemUser;
