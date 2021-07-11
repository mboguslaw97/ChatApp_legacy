import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon, useToast } from 'native-base';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { colors } from '../global/constants';
import { Contact, User } from '../global/types';
import { ReduxStore } from '../store';
import { createContact, deleteContact } from '../utils/api/mutations';

type Props = {
	onPress?: () => void;
	user: User;
};

const UserListItem: React.FC<Props> = ({ user }) => {
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

	const toggleContact = () => {
		if (followeeContact) deleteContact({ id: followeeContact.id }, toast);
		else
			createContact({ followeeId: user.id, followerId: currentUserId }, toast);
	};

	return (
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
	);
};

export default UserListItem;
