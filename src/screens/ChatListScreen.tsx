import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, Icon, IconButton } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ChatRoomItem from '../components/ChatRoomItem';
import { colors } from '../global/constants';
import { User } from '../global/types';
import { ChatListScreenProps } from '../navigation/types';
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
					onPress={() => navigation.navigate('CreateChatScreen')}
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

const chatListStackProps = {
	component: ChatListScreen,
	name: 'ChatListScreen',
	options: { title: 'Chats' },
};

export default chatListStackProps;
