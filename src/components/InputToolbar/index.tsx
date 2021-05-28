import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Icon, IconButton } from 'native-base';
import React, { RefObject, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';

import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { MessageType } from '../../global/types';
import { ReduxStore } from '../../store';
import { createChatRoomUser, createMessage } from '../../utils/api/mutations';
import BottomSheetCamera from '../BottomSheetCamera';
import MyImage from '../MyImage';
import createStyleSheet from './styles';

type Props = {
	chatRoomId: string;
	currentUserId: string;
	currentUserIsInRoom: boolean;
};

const InputToolbar: React.FC<Props> = ({
	chatRoomId,
	currentUserId,
	currentUserIsInRoom,
}) => {
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors);

	const sheetRef = useRef(null);

	const [text, setText] = useState('');
	const [image, setImage] = useState('');

	const joinRoom = async () => {
		createChatRoomUser({
			chatRoomId,
			isModerator: false,
			userId: currentUserId,
		});
	};

	const removeImage = () => {
		setImage('');
	};

	const sendMessage = () => {
		let content;
		let type;
		if (text) {
			content = text;
			type = MessageType.Text;
		} else if (image) {
			content = image;
			type = MessageType.Image;
		}

		if (content && type)
			createMessage({
				chatRoomId,
				content,
				type,
				userId: currentUserId,
			});

		setText('');
		setImage('');
	};

	return (
		<>
			<View style={styles.container}>
				<View style={styles.containerInner}>
					{currentUserIsInRoom ? (
						<>
							{!!image && (
								<View style={styles.containerImage}>
									<MyImage source={{ uri: image }} style={globalStyles.image} />
								</View>
							)}
							{!image && (
								<TextInput
									multiline
									onChangeText={val => setText(val)}
									placeholder="Start a message"
									placeholderTextColor={colors.textAlt}
									style={styles.textInput}
									value={text}
								/>
							)}

							{!text && !image && (
								<IconButton
									icon={<Icon as={<MaterialCommunityIcons name="camera" />} />}
									onPress={() => {
										const tref = sheetRef as RefObject<BottomSheet>;
										if (tref.current) tref.current.snapTo(0);
									}}
								/>
							)}
							{!!image && (
								<IconButton
									icon={<Icon as={<MaterialCommunityIcons name="close" />} />}
									onPress={removeImage}
									padding={5}
								/>
							)}
							{(!!text || !!image) && (
								<IconButton
									icon={<Icon as={<MaterialCommunityIcons name="send" />} />}
									onPress={sendMessage}
								/>
							)}
						</>
					) : (
						<Button onPress={joinRoom} style={styles.buttonJoin}>
							Join Room
						</Button>
					)}
				</View>
			</View>
			<BottomSheetCamera
				ref={sheetRef}
				callback={uri => uri && setImage(uri)}
			/>
		</>
	);
};

export default InputToolbar;
