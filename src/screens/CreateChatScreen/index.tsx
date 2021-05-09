import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import ContainerList from '../../components/ContainerList';
import ListItemInput from '../../components/ListItemInput';
import MyButton from '../../components/MyButton';
import { Colors } from '../../global/colors';
import { textMaxLength2 } from '../../global/constants';
import { GlobalStyles } from '../../global/styles';
import { User } from '../../global/types';
import { CreateChatScreenProps } from '../../navigation/types';
import { ReduxStore } from '../../store';
import { createChatRoom, createChatRoomUser } from '../../utils/api/mutations';
import { showDanger } from '../../utils/notifications';
import createStyleSheet from './styles';

const CreateChatScreen: React.FC<CreateChatScreenProps> = ({ navigation }) => {
	const currentUser = useSelector<ReduxStore, User>(state => state.currentUser);
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors); // eslint-disable-line

	const [name, setName] = useState('');
	const [maxUsers, setMaxUsers] = useState(10);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={globalStyles.containerHeaderRight}>
					<MyButton
						title="Submit"
						onPress={async () => {
							if (!name) return;

							// TODO: lambda should create chatRoomUser if chatRoom is created
							createChatRoom({ maxUsers, name })
								.then(chatRoom2 => {
									if (!chatRoom2.id) throw Error();
									return createChatRoomUser({
										chatRoomId: chatRoom2.id,
										isModerator: true,
										userId: currentUser.id,
									});
								})
								.then(chatRoomUser => {
									if (!chatRoomUser.chatRoomId) throw Error();
									navigation.goBack();
									navigation.navigate('ChatRoomScreen', {
										chatRoomId: chatRoomUser.chatRoomId,
									});
								})
								.catch(() => showDanger('Failed to create chat room!'));
						}}
					/>
				</View>
			),
			title: 'New Chat',
		});
	}, [
		currentUser.id,
		globalStyles.containerHeaderRight,
		maxUsers,
		navigation,
		name,
	]);

	return (
		<ContainerList>
			<ListItemInput
				label="Topic"
				maxLength={textMaxLength2}
				multiline
				onChangeText={(text: string) => setName(text)}
			/>
			<ListItemInput
				keyboardType="numeric"
				label="MaxUsers"
				maxLength={textMaxLength2}
				multiline
				onChangeText={(text: string) => setMaxUsers(parseInt(text, 10))}
			/>
		</ContainerList>
	);
};

export default CreateChatScreen;
