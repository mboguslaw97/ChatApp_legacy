import {
	Button,
	Container,
	HStack,
	IconButton,
	Input,
	useDisclose,
	useToast,
} from 'native-base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../global/constants';
import { Actions, Selectors, Store } from '../store';
import { createChatRoomUser, createMessage } from '../utils/api/mutations';
import CameraActionSheet from './CameraActionSheet';
import MyIcon from './MyIcon';
import MyImage from './MyImage';

type Props = {
	chatRoomId: string;
	currentUserIsInRoom: boolean;
};

const InputToolbar: React.FC<Props> = ({ chatRoomId, currentUserIsInRoom }) => {
	const dispatch = useDispatch();
	const currentUserId = useSelector<Store.State, string | undefined>(
		Selectors.getCurrentUserId
	);

	const { isOpen, onOpen, onClose } = useDisclose();
	const toast = useToast();
	const [text, setText] = useState('');
	const [image, setImage] = useState('');

	const joinRoom = async () => {
		if (currentUserId)
			createChatRoomUser(
				{
					chatRoomId,
					isModerator: false,
					userId: currentUserId,
				},
				toast
			).then(chatRoomUser => dispatch(Actions.updateItems(chatRoomUser)));
	};

	const removeImage = () => {
		setImage('');
	};

	const sendMessage = () => {
		let content;
		let type;
		if (text) {
			content = text;
			type = Store.MessageType.text;
		} else if (image) {
			content = image;
			type = Store.MessageType.image;
		}

		if (currentUserId && content && type)
			createMessage(
				{
					chatRoomId,
					content,
					type,
					userId: currentUserId,
				},
				toast
			).then(message => {
				dispatch(Actions.updateItems(message));
			});

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
								icon={<MyIcon color={colors.primary} name="camera" />}
								onPress={() => {
									// Keyboard.dismiss();
									onOpen();
								}}
							/>
						)}
						{!!image && (
							<IconButton
								icon={<MyIcon name="close" />}
								onPress={removeImage}
								style={{ marginRight: 20 }}
							/>
						)}
						{(!!text || !!image) && (
							<IconButton
								icon={<MyIcon color={colors.primary} name="send" />}
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
