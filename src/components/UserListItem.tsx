import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Divider, HStack, Icon, Text, useToast } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { colors } from '../global/constants';
import { Contact, User } from '../global/types';
import { ReduxStore } from '../store';
import { createContact, deleteContact } from '../utils/api/mutations';
import { formatHandler } from '../utils/helper';
import AvatarButton from './AvatarButton';

type Props = {
	onPress?: () => void;
	user: User;
};

const UserListItem: React.FC<Props> = ({ user, onPress }) => {
	const navigation = useNavigation();
	const toast = useToast();

	const currentUserId = useSelector<ReduxStore, string>(state => {
		return state.currentUser.id;
	});

	const followees = useSelector<ReduxStore, Contact[]>(state => {
		return state.currentUser.followees.items;
	});

	const [followeeContact, setFolloweeContact] = useState<Contact | undefined>(
		undefined
	);

	useEffect(() => {
		setFolloweeContact(
			followees.find(contact => contact.followeeId === user.id)
		);
	}, [followees, user.id]);

	if (user.id === currentUserId) {
		console.warn(`Tried to create ${UserListItem.name} for currnetUser`);
		return null;
	}

	if (!onPress)
		onPress = () => navigation.navigate('ProfileScreen', { userId: user.id });

	const toggleContact = () => {
		if (followeeContact) deleteContact({ id: followeeContact.id }, toast);
		else
			createContact({ followeeId: user.id, followerId: currentUserId }, toast);
	};

	return (
		<TouchableOpacity onPress={onPress}>
			<HStack alignItems="center" justifyContent="space-between" p={2}>
				<HStack alignItems="center" space={3}>
					<AvatarButton
						size="small"
						source={{ s3Key: user.avatar }}
						userId={user.id}
					/>
					{user.displayName && <Text>{user.displayName}</Text>}
					<Text color={colors.gray}>{formatHandler(user.name)}</Text>
				</HStack>
				<TouchableOpacity onPress={toggleContact}>
					<Icon
						as={
							<MaterialCommunityIcons
								name={followeeContact ? 'heart' : 'heart-outline'}
							/>
						}
						color={colors.red}
					/>
				</TouchableOpacity>
			</HStack>
			<Divider />
		</TouchableOpacity>
	);
};

export default UserListItem;
