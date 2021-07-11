import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, FlatList, Icon, IconButton } from 'native-base';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ChatRoomItem from '../components/ChatRoomItem';
import { User } from '../global/types';
import {
	ChatListScreenProps,
	ScreenNames,
	StackProps,
} from '../navigation/types';
import { ReduxStore } from '../store';

const ChatListScreen: React.FC<ChatListScreenProps> = ({ navigation }) => {
	const currentUser = useSelector<ReduxStore, User>(state => state.currentUser);
	const chatRooms = currentUser
		? currentUser.chatRoomUsers?.items.map(item => item.chatRoom)
		: [];

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={
						<Icon
							as={<MaterialCommunityIcons name="plus" />}
							// @ts-ignore
							variant="header"
						/>
					}
					onPress={() => navigation.navigate(ScreenNames.CreateChatScreen)}
				/>
			),
		});
	}, [navigation]);

	return (
		<Box>
			<FlatList
				data={chatRooms}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
				style={{ height: '100%' }}
			/>
		</Box>
	);
};

const chatListStackProps: StackProps<ChatListScreenProps> = {
	component: ChatListScreen,
	name: ScreenNames.ChatListScreen,
	options: { title: 'Chats' },
};

export default chatListStackProps;
