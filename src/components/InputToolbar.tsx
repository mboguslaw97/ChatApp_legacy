import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
	Button,
	Container,
	HStack,
	Icon,
	IconButton,
	Input,
	useDisclose,
	useToast,
} from 'native-base';
import React, { useState } from 'react';

import { colors } from '../global/constants';
import { MessageType } from '../global/types';
import { createChatRoomUser, createMessage } from '../utils/api/mutations';
import CameraActionSheet from './CameraActionSheet';
import MyImage from './MyImage';

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
	const { isOpen, onOpen, onClose } = useDisclose();
	const toast = useToast();
	const [text, setText] = useState('');
	const [image, setImage] = useState('');

	const joinRoom = async () => {
		createChatRoomUser(
			{
				chatRoomId,
				isModerator: false,
				userId: currentUserId,
			},
			toast
		);
	};

	const removeImage = () => {
		setImage('');
	};

	const sendMessage = () => {
		let content;
		let type;
		if (text) {
			content = text;
			type = MessageType.text;
		} else if (image) {
			content = image;
			type = MessageType.image;
		}

		if (content && type)
			createMessage(
				{
					chatRoomId,
					content,
					type,
					userId: currentUserId,
				},
				toast
			);

		setText('');
		setImage('');
	};

	return (
		<>
			<HStack borderTopColor={colors.gray} borderTopWidth={1} px={1} py={1}>
				{currentUserIsInRoom ? (
					<>
						{!!image && (
							<Container alignItems="center" flex={1}>
								<MyImage
									source={{ uri: image }}
									style={{
										borderRadius: 10,
										height: 150,
										width: 150,
									}}
								/>
							</Container>
						)}
						{!image && (
							<Input
								flex={1}
								multiline
								onChangeText={val => setText(val)}
								placeholder="Write a message ..."
								px={2}
								value={text}
								variant="unstyled"
							/>
						)}
						{!text && !image && (
							<IconButton
								icon={
									<Icon
										as={<MaterialCommunityIcons name="camera" />}
										color={colors.primary}
									/>
								}
								onPress={() => {
									// Keyboard.dismiss();
									onOpen();
								}}
							/>
						)}
						{!!image && (
							<IconButton
								icon={<Icon as={<MaterialCommunityIcons name="close" />} />}
								onPress={removeImage}
								style={{ marginRight: 20 }}
							/>
						)}
						{(!!text || !!image) && (
							<IconButton
								icon={
									<Icon
										as={<MaterialCommunityIcons name="send" />}
										color={colors.primary}
									/>
								}
								onPress={sendMessage}
							/>
						)}
					</>
				) : (
					<Button onPress={joinRoom}>Join Room</Button>
				)}
			</HStack>
			<CameraActionSheet
				callback={uri => uri && setImage(uri)}
				isOpen={isOpen}
				onClose={onClose}
			/>
		</>
	);
};

export default InputToolbar;
