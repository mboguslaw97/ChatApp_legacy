import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';

import ListItemUser from '../../components/ListItemUser';
import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { User } from '../../global/types';
import { ContactListScreenProps } from '../../navigation/types';
import { ReduxStore } from '../../store';
import createStyleSheet from './styles';

const ContactListScreen: React.FC<ContactListScreenProps> = ({
	navigation,
	route,
}) => {
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors);

	const users = route.params?.users;
	const followees = useSelector<ReduxStore, User[]>(state =>
		state.currentUser.followees.items.map(contact => contact.followee)
	);

	useEffect(() => {
		const title = users ? 'Members' : 'Friends';
		navigation.setOptions({ title });
	}, [navigation, users]);

	return (
		<View style={globalStyles.containerList}>
			<FlatList
				style={styles.flatlist}
				data={users ?? followees}
				renderItem={({ item }) => <ListItemUser user={item} />}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

export default ContactListScreen;
