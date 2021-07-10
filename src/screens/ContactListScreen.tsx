import { Box } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import UserListItem from '../components/UserListItem';
import { User } from '../global/types';
import { ContactListScreenProps, StackProps } from '../navigation/types';
import { ReduxStore } from '../store';

const ContactListScreen: React.FC<ContactListScreenProps> = ({
	navigation,
	route,
}) => {
	const users = route.params?.users;
	const followees = useSelector<ReduxStore, User[]>(state =>
		state.currentUser.followees.items.map(contact => contact.followee)
	);

	useEffect(() => {
		const title = users ? 'Members' : 'Friends';
		navigation.setOptions({ title });
	}, [navigation, users]);

	return (
		<Box>
			<FlatList
				data={users ?? followees}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <UserListItem user={item} />}
			/>
		</Box>
	);
};

const contactListStackProps: StackProps<ContactListScreenProps> = {
	component: ContactListScreen,
	name: 'ContactListScreen',
	options: { title: 'Contacts' },
};

export default contactListStackProps;
