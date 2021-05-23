import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ButtonIcon from '../../components/ButtonIcon';
import ContainerList from '../../components/ContainerList';
import ListItemChatRoom from '../../components/ListItemChatRoom';
import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { User } from '../../global/types';
import { ChatListScreenProps } from '../../navigation/types';
import { ReduxStore } from '../../store';
import createChatStackProps from '../CreateChatScreen';
import createStyleSheet from './styles';

const ChatListScreen: React.FC<ChatListScreenProps> = ({ navigation }) => {
	const currentUser = useSelector<ReduxStore, User>(state => state.currentUser);
	const chatRooms = currentUser
		? currentUser.chatRoomUsers?.items.map(item => item.chatRoom)
		: [];

	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet();

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<ButtonIcon
					name="plus"
					onPress={() => navigation.navigate(createChatStackProps.name)}
					style={globalStyles.containerHeaderRight}
				/>
			),
		});
	}, [colors.highlight, globalStyles.containerHeaderRight, navigation]);

	return (
		<ContainerList style={styles.container}>
			<FlatList
				style={styles.flatlist}
				data={chatRooms}
				renderItem={({ item }) => <ListItemChatRoom chatRoom={item} />}
				keyExtractor={item => item.id}
			/>
		</ContainerList>
	);
};

const chatListStackProps = {
	component: ChatListScreen,
	name: 'ChatListScreen',
	options: { title: 'Chats' },
};

export default chatListStackProps;
