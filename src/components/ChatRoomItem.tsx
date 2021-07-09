import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Box, Center, Divider, HStack, Icon, Text, VStack } from 'native-base';
import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useSelector } from 'react-redux';

import { gray, red } from '../global/constants';
import { ChatRoom, MessageType } from '../global/types';
import chatRoomStackProps from '../screens/ChatRoomScreen';
import { ReduxStore } from '../store';
import { leaveChatRoom } from '../utils/helper';
import ButtonAvatar from './ButtonAvatar';

type Props = {
	chatRoom: ChatRoom;
};

const ChatRoomItem: React.FC<Props> = ({ chatRoom }) => {
	const navigation = useNavigation();

	const currentUserId = useSelector<ReduxStore, string>(state => {
		return state.currentUser.id;
	});

	const currentUserIsInRoom =
		chatRoom &&
		chatRoom.chatRoomUsers.items.find(
			chatRoomUser => chatRoomUser.userId === currentUserId
		);

	const openChatRoom = () =>
		navigation.navigate(chatRoomStackProps.name, { chatRoomId: chatRoom.id });

	const renderRightActions = () => {
		return (
			<TouchableOpacity onPress={() => leaveChatRoom(chatRoom, currentUserId)}>
				<Center bg={red} flex={1} w={20}>
					<Icon as={<MaterialCommunityIcons name="trash-can-outline" />} />
				</Center>
			</TouchableOpacity>
		);
	};

	const chatRoomName = chatRoom?.name ?? 'Unnamed Group';
	const messages = chatRoom?.messages.items;
	const lastMessage =
		messages && messages.length ? messages.slice(-1)[0] : undefined;
	const lastMessageTime =
		lastMessage && moment(lastMessage.createdAt).format('MM/DD/YYYY');

	let lastMessageText = 'No messages yet';
	if (lastMessage?.type === MessageType.Text)
		lastMessageText = lastMessage.content;
	if (lastMessage?.type === MessageType.Image)
		lastMessageText = `${lastMessage.user.name} sent an image`;

	return (
		<Swipeable
			renderRightActions={currentUserIsInRoom ? renderRightActions : undefined}
		>
			<TouchableWithoutFeedback onPress={openChatRoom}>
				<Box px={2}>
					<HStack py={2} space={2}>
						{!!lastMessage && (
							<ButtonAvatar
								uri={lastMessage?.user.avatar}
								userId={lastMessage?.userId}
							/>
						)}
						<VStack flex={1} space={1}>
							<HStack justifyContent="space-between">
								<Text bold numberOfLines={2}>
									{chatRoomName}
								</Text>
								<Text color={gray} pr={1}>
									{lastMessageTime}
								</Text>
							</HStack>
							<Text color={gray} ellipsizeMode="tail" numberOfLines={2}>
								{lastMessageText}
							</Text>
						</VStack>
					</HStack>
					<Divider />
				</Box>
			</TouchableWithoutFeedback>
		</Swipeable>
	);
};

export default ChatRoomItem;
