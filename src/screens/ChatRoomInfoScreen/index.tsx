/* xeslint-disable */
// x@ts-nocheck

import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import ContainerList from '../../components/ContainerList';
import ListItemInput from '../../components/ListItemInput';
import ListItemNav from '../../components/ListItemNav';
import MyButton from '../../components/MyButton';
import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { ChatRoomInfoScreenProps } from '../../navigation/types';
import { ReduxStore } from '../../store';
import { leaveChatRoom } from '../../utils/helper';
import createStyleSheet from './styles';

const ChatRoomInfoScreen: React.FC<ChatRoomInfoScreenProps> = ({
	navigation,
	route,
}) => {
	const { chatRoom } = route.params;
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors, globalStyles);

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
		<View style={styles.containerScreen}>
			<ContainerList>
				<ListItemInput editable={false} label="Topic" value={chatRoom.name} />
			</ContainerList>
			<ContainerList>
				<ListItemNav
					value="Members"
					screen="ContactListScreen"
					screenArgs={{ users }}
				/>
			</ContainerList>
			<ContainerList>
				<View style={globalStyles.containerListItem}>
					<MyButton
						color={colors.red}
						title="Leave Room"
						onPress={() => leaveChatRoom(chatRoom, currentUserId)}
					/>
				</View>
			</ContainerList>
		</View>
	);
};

export default ChatRoomInfoScreen;
