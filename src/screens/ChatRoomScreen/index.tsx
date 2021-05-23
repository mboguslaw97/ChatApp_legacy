import React, { useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { useSelector } from 'react-redux';

import ButtonIcon from '../../components/ButtonIcon';
import InputToolbar from '../../components/InputToolbar';
import MessageItem from '../../components/MessageItem';
import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { User } from '../../global/types';
import { ChatRoomScreenProps, StackProps } from '../../navigation/types';
import { BrowseChatRooms, ReduxStore } from '../../store';
import chatRoomInfoStackProps from '../ChatRoomInfoScreen';
import createStyleSheet from './styles';

const ChatRoomScreen: React.FC<ChatRoomScreenProps> = ({
	navigation,
	route,
}) => {
	const { chatRoomId } = route.params;

	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const styles = createStyleSheet(colors);

	const currentUser = useSelector<ReduxStore, User>(state => state.currentUser);
	const browseChatRooms = useSelector<ReduxStore, BrowseChatRooms>(
		state => state.browseChatRooms
	);

	const chatRoom =
		currentUser.chatRoomUsers.items.find(
			chatRoomUser => chatRoomUser.chatRoomId === chatRoomId
		)?.chatRoom ??
		browseChatRooms.find(chatRoom2 => chatRoom2.id === chatRoomId);

	const currentUserIsInRoom =
		chatRoom?.chatRoomUsers.items.some(
			chatRoomUser => chatRoomUser.userId === currentUser.id
		) ?? false;

	const messages = chatRoom ? chatRoom.messages.items : [];

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<ButtonIcon
					name="info"
					onPress={() => {
						if (chatRoom)
							navigation.navigate(chatRoomInfoStackProps.name, { chatRoom });
					}}
					style={globalStyles.containerHeaderRight}
				/>
			),
			title: chatRoom && chatRoom.name ? chatRoom.name : 'Chat Room',
		});
	}, [
		navigation,
		chatRoom,
		globalStyles.containerHeaderRight,
		colors.highlight,
	]);

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
			style={globalStyles.containerScreen}
		>
			<FlatList
				data={messages?.slice().reverse() ?? []}
				inverted
				keyExtractor={item => item.id}
				renderItem={({ item }) => <MessageItem message={item} />}
			/>
			<InputToolbar
				chatRoomId={chatRoomId}
				currentUserId={currentUser.id}
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
	name: 'ChatRoomScreen',
};

export default chatRoomStackProps;
