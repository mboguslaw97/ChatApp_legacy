import { Container, Text } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';

import MyImage from '../components/MyImage';
import {
	MessageScreenProps,
	ScreenName,
	StackProps,
} from '../navigation/types';
import { Selectors, Store } from '../store';

const MessageScreen: React.FC<MessageScreenProps> = ({ route }) => {
	const { messageId } = route.params;
	const message = useSelector<Store.State, Store.Message>(
		Selectors.getItem(messageId)
	);

	let content;
	switch (message.type) {
		case Store.MessageType.text:
			content = <Text>{message.content}</Text>;
			break;
		case Store.MessageType.image:
			content = <MyImage source={{ s3Key: message.content }} />;
			break;
		default:
			console.warn(`Invalid message type: ${message.type}`);
	}

	return <Container>{content}</Container>;
};

const MessageStackProps: StackProps<MessageScreenProps> = {
	component: MessageScreen,
	name: ScreenName.Message,
	options: { title: 'Message' },
};

export default MessageStackProps;
