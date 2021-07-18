import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, Icon, IconButton, KeyboardAvoidingView } from 'native-base';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';

import InputToolbar from '../components/InputToolbar';
import MessageItem from '../components/MessageItem';
import {
	ChatRoomScreenProps,
	ScreenName,
	StackProps,
} from '../navigation/types';
import { Selectors, Store } from '../store';

const ChatRoomScreen: React.FC<ChatRoomScreenProps> = ({
	navigation,
	route,
}) => {
	const { chatRoomId } = route.params;

	const currentUserId = useSelector<Store.State, string | undefined>(
		Selectors.getCurrentUserId
	);
	const chatRoom = useSelector<Store.State, Store.ChatRoom>(
		Selectors.getItem(chatRoomId, { [Store.IdKey.chatRoomUserIds]: {} })
	);
	const currentUserIsInRoom = chatRoom.chatRoomUsers.some(
		chatRoomUser => chatRoomUser.userId === currentUserId
	);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={
						<Icon
							as={<MaterialCommunityIcons name="information-outline" />}
							// @ts-ignore
							variant="header"
						/>
					}
					onPress={() => {
						navigation.navigate(ScreenName.ChatRoomInfo, {
							chatRoomId,
						});
					}}
				/>
			),
			title: chatRoom && chatRoom.name ? chatRoom.name : 'Chat Room',
		});
	}, [navigation, chatRoomId, chatRoom]);

	return (
		<KeyboardAvoidingView
			behavior={Platform.select({
				android: 'padding',
				default: undefined,
				ios: 'padding',
			})}
			keyboardVerticalOffset={Platform.select({
				android: -150,
				default: undefined,
				ios: 64,
			})}
			style={{ flex: 1 }}
		>
			<FlatList
				data={chatRoom.messageIds?.reverse()}
				inverted
				keyExtractor={item => item}
				renderItem={({ item }) => <MessageItem messageId={item} />}
			/>
			<InputToolbar
				chatRoomId={chatRoomId}
				currentUserIsInRoom={currentUserIsInRoom}
			/>

			{/* KeyboardAvoidingView - Causes problems with web */}
			{/* {Platform.OS !== 'web' && (
				<KeyboardSpacer
					topSpacing={Platform.select({
						android: -175,
						ios: -50,
					})}
				/>
			)} */}
		</KeyboardAvoidingView>
	);
};

const chatRoomStackProps: StackProps<ChatRoomScreenProps> = {
	component: ChatRoomScreen,
	name: ScreenName.ChatRoom,
};

export default chatRoomStackProps;
