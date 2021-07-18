import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import {
	Box,
	Center,
	Divider,
	HStack,
	Text,
	useToast,
	VStack,
} from 'native-base';
import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useSelector } from 'react-redux';

import { colors } from '../global/constants';
import { Selectors, Store } from '../store';
import { deleteChatRoomUser } from '../utils/api/mutations';
import AvatarButton from './AvatarButton';
import MyIcon from './MyIcon';

type Props = {
	chatRoomId: string;
};

const ChatRoomItem: React.FC<Props> = ({ chatRoomId }) => {
	const navigation = useNavigation();
	const toast = useToast();

	const currentUserid = useSelector<Store.State, string | undefined>(
		Selectors.getCurrentUserId
	);
	const chatRoom = useSelector<Store.State, Store.ChatRoom | undefined>(
		Selectors.getItem(chatRoomId, {
			[Store.IdKey.chatRoomUserIds]: {},
			[Store.IdKey.messageIds]: {},
		})
	);

	const chatRoomUserId = chatRoom?.chatRoomUsers.find(
		chatRoomUser => chatRoomUser.userId === currentUserid
	)?.id;
	const lastMessage = chatRoom?.messages.slice(-1)[0];
	const lastMessageUser = useSelector<Store.State, Store.User | undefined>(
		Selectors.getItem(lastMessage?.userId)
	);

	const chatRoomName = chatRoom?.name ?? 'Unnamed Group';
	const lastMessageTime =
		lastMessage && moment(lastMessage.createdAt).format('MM/DD/YYYY');

	let lastMessageText = 'No messages yet';
	if (lastMessage?.type === Store.MessageType.text)
		lastMessageText = lastMessage.content;

	if (lastMessage?.type === Store.MessageType.image)
		lastMessageText = `${lastMessageUser?.name} sent an image`;

	const openChatRoom = () =>
		navigation.navigate('ChatRoomScreen', { chatRoomId });

	const renderRightActions = () => {
		return (
			<TouchableOpacity
				onPress={() =>
					chatRoomUserId && deleteChatRoomUser({ id: chatRoomUserId }, toast)
				}
			>
				<Center bg={colors.red} flex={1} w={20}>
					<MyIcon name="trash-can-outline" />
				</Center>
			</TouchableOpacity>
		);
	};

	return (
		<Swipeable
			renderRightActions={chatRoomUserId ? renderRightActions : undefined}
		>
			<TouchableWithoutFeedback onPress={openChatRoom}>
				<Box px={2}>
					<HStack py={2} space={2}>
						{!!lastMessage && (
							<AvatarButton
								size="small"
								source={{ s3Key: lastMessageUser?.avatar }}
								userId={lastMessage?.userId}
							/>
						)}
						<VStack flex={1} space={1}>
							<HStack justifyContent="space-between">
								<Text bold numberOfLines={2}>
									{chatRoomName}
								</Text>
								<Text color={colors.gray} pr={1}>
									{lastMessageTime}
								</Text>
							</HStack>
							<Text color={colors.gray} ellipsizeMode="tail" numberOfLines={2}>
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
