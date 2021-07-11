import { Container, Text } from 'native-base';
import React, { useEffect } from 'react';

import MyImage from '../components/MyImage';
import { MessageType } from '../global/types';
import {
	MessageScreenProps,
	ScreenNames,
	StackProps,
} from '../navigation/types';

const MessageScreen: React.FC<MessageScreenProps> = ({ navigation, route }) => {
	const { message } = route.params;

	useEffect(() => {
		navigation.setOptions({ title: 'Message' });
	}, [navigation]);

	let content;
	switch (message.type) {
		case MessageType.Text:
			content = <Text>{message.content}</Text>;
			break;
		case MessageType.Image:
			content = <MyImage source={{ s3Key: message.content }} />;
			break;
		default:
			console.warn(`Invalid message type: ${message.type}`);
	}

	return <Container>{content}</Container>;
};

const MessageStackProps: StackProps<MessageScreenProps> = {
	component: MessageScreen,
	name: ScreenNames.MessageScreen,
	options: { title: '' },
};

export default MessageStackProps;
