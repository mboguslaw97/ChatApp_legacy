import { Button, FormControl, Input, useToast, VStack } from 'native-base';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ChatRoomInfoScreenProps, StackProps } from '../navigation/types';
import { ReduxStore } from '../store';
import { leaveChatRoom } from '../utils/helper';

const ChatRoomInfoScreen: React.FC<ChatRoomInfoScreenProps> = ({
	navigation,
	route,
}) => {
	const { chatRoom } = route.params;

	const toast = useToast();

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
		<VStack pt={5}>
			<FormControl>
				<FormControl.Label>Topic</FormControl.Label>
				<Input defaultValue={chatRoom.name} isDisabled />
			</FormControl>
			<Button
				onPress={() => navigation.navigate('ContactListScreen', { users })}
			>
				Members
			</Button>
			<Button
				colorScheme="secondary"
				onPress={() => leaveChatRoom(chatRoom, currentUserId, toast)}
				variant="outline"
			>
				Leave Room
			</Button>
		</VStack>
	);
};

const chatRoomInfoStackProps: StackProps<ChatRoomInfoScreenProps> = {
	component: ChatRoomInfoScreen,
	name: 'ChatRoomInfoScreen',
	options: { title: 'Room Info' },
};

export default chatRoomInfoStackProps;
