import { Button, FormControl, Input, useToast, VStack } from 'native-base';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MaxUsersInput from '../components/MaxUsersInput';
import TagInput from '../components/TagInput';
import {
	ChatRoomInfoScreenProps,
	ScreenNames,
	StackProps,
} from '../navigation/types';
import { ReduxStore } from '../store';
import { leaveChatRoom } from '../utils/helper';

const ChatRoomInfoScreen: React.FC<ChatRoomInfoScreenProps> = ({
	navigation,
	route,
}) => {
	const { chatRoom } = route.params;

	const toast = useToast();

	const [tags, setTags] = useState<string[]>(chatRoom.tags);

	const currentUserId = useSelector<ReduxStore, string>(state => {
		return state.currentUser.id;
	});

	const isOwner = chatRoom.moderators.items
		.map(user => user.id)
		.includes(currentUserId);

	const users = chatRoom.chatRoomUsers.items
		.filter(chatRoomUser => chatRoomUser.userId !== currentUserId)
		.map(chatRoomUser => chatRoomUser.user);

	return (
		<VStack pt={5}>
			<FormControl>
				<FormControl.Label>Topic</FormControl.Label>
				<Input defaultValue={chatRoom.name} isDisabled />
			</FormControl>
			{!!chatRoom.maxUsers && <MaxUsersInput maxUsers={chatRoom.maxUsers} />}
			{chatRoom.isPublic && (
				<TagInput setTags={isOwner ? setTags : undefined} tags={tags} />
			)}
			<Button
				onPress={() =>
					navigation.navigate(ScreenNames.ContactListScreen, { users })
				}
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
	name: ScreenNames.ChatRoomInfoScreen,
	options: { title: 'Room Info' },
};

export default chatRoomInfoStackProps;
