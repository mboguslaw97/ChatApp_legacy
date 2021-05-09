import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { Message, MessageType } from '../../global/types';
import { ReduxStore } from '../../store';
import ConditionalWrapper from '../ConditionalWrapper';
import MyImage from '../MyImage';
import createStyleSheet from './styles';

const maxLineCount = 10;

type Props = {
	message: Message;
};

const MessageItem: React.FC<Props> = ({ message }) => {
	const navigation = useNavigation();

	const currentUserId = useSelector<ReduxStore, string>(state => {
		return state.currentUser.id;
	});
	const isCurrentUser = message.userId === currentUserId;

	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors, globalStyles, isCurrentUser);

	const [maxLineCountReached, setMaxLineCountReached] = useState(false);

	const onPressAvatar = () =>
		navigation.navigate('ProfileScreen', { userId: message.userId });

	const onPressContent = () =>
		navigation.navigate('MessageScreen', { message });

	// @ts-ignore: TextLayoutEvent is the type
	const onTextLayout = e =>
		setMaxLineCountReached(e.nativeEvent.lines.length === maxLineCount);

	const time = moment(message.createdAt).format('MM/DD/YYYY');

	return (
		<View style={styles.container}>
			{!isCurrentUser && (
				<View style={styles.containerLeft}>
					<TouchableOpacity onPress={onPressAvatar}>
						<MyImage
							source={{ uri: message.user.avatar }}
							style={styles.avatar}
						/>
					</TouchableOpacity>
				</View>
			)}
			<View style={styles.containerRight}>
				{message.type === MessageType.Text && (
					<ConditionalWrapper
						condition={maxLineCountReached}
						wrapper={children => (
							<TouchableOpacity onPress={onPressContent}>
								{children}
							</TouchableOpacity>
						)}
					>
						<View style={styles.containerText}>
							<Text
								numberOfLines={maxLineCount}
								onTextLayout={onTextLayout}
								style={styles.text}
							>
								{message.content}
							</Text>
							{maxLineCountReached && (
								<Ionicons
									name="ios-arrow-forward"
									size={24}
									color={colors.text}
								/>
							)}
						</View>
					</ConditionalWrapper>
				)}
				{message.type === MessageType.Image && (
					<TouchableOpacity onPress={onPressContent}>
						<MyImage
							source={{ uri: message.content }}
							style={globalStyles.image}
						/>
					</TouchableOpacity>
				)}
				<Text style={styles.time}>{time}</Text>
			</View>
		</View>
	);
};

export default MessageItem;
