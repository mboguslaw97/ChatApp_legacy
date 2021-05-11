import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { iconSize1 } from '../../global/constants';
import { GlobalStyles } from '../../global/styles';
import { Contact, User } from '../../global/types';
import { ReduxStore } from '../../store';
import { createContact, deleteContact } from '../../utils/api/mutations';
import { formatHandler } from '../../utils/helper';
import ButtonAvatar from '../ButtonAvatar';
import createStyleSheet from './styles';

type Props = {
	onPress?: () => void;
	user: User;
};

const ListItemUser: React.FC<Props> = ({ user, onPress }) => {
	const navigation = useNavigation();

	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors);

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
		// eslint-disable-next-line no-console
		console.warn(`Tried to create ${ListItemUser.name} for currnetUser`);
		return null;
	}

	if (!onPress)
		onPress = () => navigation.navigate('ProfileScreen', { userId: user.id });

	const toggleContact = () => {
		if (followeeContact) deleteContact({ id: followeeContact.id });
		else createContact({ followeeId: user.id, followerId: currentUserId });
	};

	return (
		<TouchableOpacity onPress={onPress}>
			<View style={globalStyles.containerListItem}>
				<View style={styles.leftContainer}>
					<ButtonAvatar uri={user.avatar} userId={user.id} />
				</View>
				<View style={styles.rightContainer}>
					{user.displayName && (
						<Text style={styles.displayName}>{user.displayName}</Text>
					)}
					<Text style={styles.name}>{formatHandler(user.name)}</Text>
				</View>
				<TouchableOpacity
					onPress={toggleContact}
					style={globalStyles.containerHeaderRight}
				>
					<AntDesign
						name={followeeContact ? 'heart' : 'hearto'}
						size={iconSize1}
						color={colors.highlight}
					/>
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);
};

export default ListItemUser;
