import { Button, FormControl, Input, useToast, VStack } from 'native-base';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import MaxUsersInput from '../components/MaxUsersInput';
import TagInput from '../components/TagInput';
import {
	ChatRoomInfoScreenProps,
	ScreenName,
	StackProps,
} from '../navigation/types';
import { Selectors, Store } from '../store';
import { leaveChatRoom } from '../utils/helper';

const ChatRoomInfoScreen: React.FC<ChatRoomInfoScreenProps> = ({
	navigation,
	route,
}) => {
	const { chatRoomId } = route.params;

	const toast = useToast();

	const currentUserId = useSelector<Store.State, string | undefined>(
		Selectors.getCurrentUserId
	);
	const chatRoom = useSelector<Store.State, Store.ChatRoom>(
		Selectors.getItem(chatRoomId, { [Store.IdKey.chatRoomUserIds]: {} })
	);

	const [tags, setTags] = useState<string[]>(chatRoom.tags);

	const isOwner =
		currentUserId &&
		chatRoom.chatRoomUsers
			.filter(chatRoomUser => chatRoomUser.isModerator)
			.map(chatRoomUser => chatRoomUser.userId)
			.includes(currentUserId);

	const userIds = chatRoom.chatRoomUsers
		.filter(chatRoomUser => chatRoomUser.userId !== currentUserId)
		.map(chatRoomUser => chatRoomUser.userId);

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
				onPress={() => navigation.navigate(ScreenName.ContactList, { userIds })}
			>
				Members
			</Button>
			<Button
				colorScheme="secondary"
				onPress={() => {
					navigation.navigate(ScreenName.ChatList);
					if (currentUserId) leaveChatRoom(chatRoom, currentUserId, toast);
				}}
				variant="outline"
			>
				Leave Room
			</Button>
		</VStack>
	);
};

const chatRoomInfoStackProps: StackProps<ChatRoomInfoScreenProps> = {
	component: ChatRoomInfoScreen,
	name: ScreenName.ChatRoomInfo,
	options: { title: 'Room Info' },
};

export default chatRoomInfoStackProps;
