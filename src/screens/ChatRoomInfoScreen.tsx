import { Box, Button, Text } from 'native-base';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ChatRoomInfoScreenProps, StackProps } from '../navigation/types';
import { ReduxStore } from '../store';
import { leaveChatRoom } from '../utils/helper';
import contactListStackProps from './ContactListScreen';

const ChatRoomInfoScreen: React.FC<ChatRoomInfoScreenProps> = ({
	navigation,
	route,
}) => {
	const { chatRoom } = route.params;

	const currentUserId = useSelector<ReduxStore, string>(state => {
		return state.currentUser.id;
	});

	useEffect(() => {
		navigation.setOptions({ title: 'Room Info' });
	}, [navigation]);

	const users = chatRoom.chatRoomUsers.items
		.filter(chatRoomUser => chatRoomUser.userId !== currentUserId)
		.map(chatRoomUser => chatRoomUser.user);

	return (
		<Box>
			<Text>{chatRoom.name}</Text>
			<Button
				onPress={() =>
					navigation.navigate(contactListStackProps.name, { users })
				}
			>
				Members
			</Button>
			<Button onPress={() => leaveChatRoom(chatRoom, currentUserId)}>
				Leave Room
			</Button>
		</Box>
	);
};

const chatRoomInfoStackProps: StackProps<ChatRoomInfoScreenProps> = {
	component: ChatRoomInfoScreen,
	name: 'ChatRoomInfoScreen',
	options: { title: 'Room Info' },
};

export default chatRoomInfoStackProps;
