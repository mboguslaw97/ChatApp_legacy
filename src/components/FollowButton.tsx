import { useToast } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { colors } from '../global/constants';
import { Selectors, Store } from '../store';
import { createContact, deleteContact } from '../utils/api/mutations';
import MyIcon from './MyIcon';

type Props = {
	onPress?: () => void;
	userId: string;
};

const FollowButton: React.FC<Props> = ({ userId }) => {
	const toast = useToast();

	const currentUser = useSelector<Store.State, Store.User | undefined>(
		Selectors.getCurrentUser({ [Store.IdKey.followeeIds]: {} })
	);

	const contact = currentUser?.followees.find(
		followee => followee.followeeId === userId
	);

	const toggleContact = () => {
		if (contact) deleteContact({ id: contact.id }, toast);
		else if (currentUser?.id)
			createContact({ followeeId: userId, followerId: currentUser.id }, toast);
	};

	return (
		<TouchableOpacity onPress={toggleContact}>
			<MyIcon color={colors.red} name={contact ? 'heart' : 'heart-outline'} />
		</TouchableOpacity>
	);
};

export default FollowButton;
