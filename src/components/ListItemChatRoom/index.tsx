import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { iconSize2 } from '../../global/constants';
import { GlobalStyles } from '../../global/styles';
import { ChatRoom, MessageType } from '../../global/types';
import { ReduxStore } from '../../store';
import { leaveChatRoom } from '../../utils/helper';
import ButtonAvatar from '../ButtonAvatar';
import createStyleSheet from './styles';

type Props = {
	chatRoom: ChatRoom;
};

const ListItemChatRoom: React.FC<Props> = ({ chatRoom }) => {
	const navigation = useNavigation();
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors);

	const currentUserId = useSelector<ReduxStore, string>(state => {
		return state.currentUser.id;
	});

	const currentUserIsInRoom =
		chatRoom &&
		chatRoom.chatRoomUsers.items.find(
			chatRoomUser => chatRoomUser.userId === currentUserId
		);

	const openChatRoom = () =>
		navigation.navigate('ChatRoomScreen', { chatRoomId: chatRoom.id });

	const renderRightActions = () => {
		return (
			<TouchableOpacity onPress={() => leaveChatRoom(chatRoom, currentUserId)}>
				<View style={styles.trashContainer}>
					<EvilIcons name="trash" size={iconSize2} color="white" />
				</View>
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
				<View style={globalStyles.containerListItem}>
					{!!lastMessage && (
						<View style={styles.leftContainer}>
							<ButtonAvatar
								uri={lastMessage?.user.avatar}
								userId={lastMessage?.userId}
							/>
						</View>
					)}
					<View style={styles.rightContainer}>
						<View style={styles.topContainer}>
							<View style={styles.middleContainer}>
								<Text style={styles.title} numberOfLines={2}>
									{chatRoomName}
								</Text>
							</View>
							<Text style={styles.lastMessage}>{lastMessageTime}</Text>
						</View>
						<Text
							ellipsizeMode="tail"
							numberOfLines={2}
							style={styles.lastMessage}
						>
							{lastMessageText}
						</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Swipeable>
	);
};

export default ListItemChatRoom;
