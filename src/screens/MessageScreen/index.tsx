import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import MyImage from '../../components/MyImage';
import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { MessageType } from '../../global/types';
import { MessageScreenProps } from '../../navigation/types';
import { ReduxStore } from '../../store';
import createStyleSheet from './styles';

const MessageScreen: React.FC<MessageScreenProps> = ({ navigation, route }) => {
	const { message } = route.params;
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors);

	useEffect(() => {
		navigation.setOptions({ title: 'Message' });
	}, [navigation]);

	let content;
	switch (message.type) {
		case MessageType.Text:
			content = (
				<ScrollView style={styles.scrollView}>
					<Text style={styles.text}>{message.content}</Text>
				</ScrollView>
			);
			break;
		case MessageType.Image:
			content = (
				<MyImage source={{ s3Key: message.content }} style={styles.image} />
			);
			break;
		default:
			console.warn(`Invalid message type: ${message.type}`);
	}

	return <View style={globalStyles.containerScreen}>{content}</View>;
};

const messageStackProps = {
	component: MessageScreen,
	name: 'MessageScreen',
	options: { title: '' },
};

export default messageStackProps;
