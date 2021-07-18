import { Box, FlatList } from 'native-base';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import UserListItem from '../components/UserListItem';
import {
	ContactListScreenProps,
	ScreenName,
	StackProps,
} from '../navigation/types';
import { Selectors, Store } from '../store';

const ContactListScreen: React.FC<ContactListScreenProps> = ({
	navigation,
	route,
}) => {
	const userIds = route.params?.userIds;
	useEffect(() => {
		const title = userIds ? 'Members' : 'Friends';
		navigation.setOptions({ title });
	}, [navigation, userIds]);

	const followees = useSelector<Store.State, Store.Contact[]>(
		Selectors.getCurrentUser([Store.IdKey.followeeIds])
	);

	return (
		<Box>
			<FlatList
				data={userIds ?? followees.map(followee => followee.followeeId)}
				keyExtractor={item => item}
				renderItem={({ item }) => <UserListItem userId={item} />}
			/>
		</Box>
	);
};

const contactListStackProps: StackProps<ContactListScreenProps> = {
	component: ContactListScreen,
	name: ScreenName.ContactList,
	options: { title: 'Contacts' },
};

export default contactListStackProps;
