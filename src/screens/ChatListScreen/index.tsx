import moment from 'moment';
import {
	Box,
	Container,
	Divider,
	HStack,
	Row,
	Text,
	VStack,
} from 'native-base';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ButtonAvatar from '../../components/ButtonAvatar';
import ButtonIcon from '../../components/ButtonIcon';
import ContainerList from '../../components/ContainerList';
import ChatRoomItem from '../../components/ChatRoomItem';
import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { MessageType, User } from '../../global/types';
import { ChatListScreenProps } from '../../navigation/types';
import { ReduxStore } from '../../store';
import createChatStackProps from '../CreateChatScreen';
import createStyleSheet from './styles';

const ChatListScreen: React.FC<ChatListScreenProps> = ({ navigation }) => {
	const currentUser = useSelector<ReduxStore, User>(state => state.currentUser);
	const chatRooms = currentUser
		? currentUser.chatRoomUsers?.items.map(item => item.chatRoom)
		: [];

	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<ButtonIcon
					name="plus"
					onPress={() => navigation.navigate(createChatStackProps.name)}
					style={globalStyles.containerHeaderRight}
				/>
			),
		});
	}, [globalStyles.containerHeaderRight, navigation]);

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
