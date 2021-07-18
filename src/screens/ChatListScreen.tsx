import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, FlatList, Icon, IconButton } from 'native-base';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ChatRoomItem from '../components/ChatRoomItem';
import {
	ChatListScreenProps,
	ScreenName,
	StackProps,
} from '../navigation/types';
import { Selectors, Store } from '../store';

const ChatListScreen: React.FC<ChatListScreenProps> = ({ navigation }) => {
	const chatRoomIds = useSelector<Store.State, Store.ChatRoomUser[]>(
		Selectors.getCurrentUser([Store.IdKey.chatRoomUserIds], [])
	).map(chatRoomUser => chatRoomUser.chatRoomId);

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
					onPress={() => navigation.navigate(ScreenName.CreateChat)}
				/>
			),
		});
	}, [navigation]);

	return (
		<Box>
			<FlatList
				data={chatRoomIds}
				keyExtractor={item => item}
				renderItem={({ item }) => <ChatRoomItem chatRoomId={item} />}
				style={{ height: '100%' }}
			/>
		</Box>
	);
};

const chatListStackProps: StackProps<ChatListScreenProps> = {
	component: ChatListScreen,
	name: ScreenName.ChatList,
	options: { title: 'Chats' },
};

export default chatListStackProps;
