import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Container, HStack, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { colors } from '../global/constants';
import { Message, MessageType } from '../global/types';
import { ReduxStore } from '../store';
import ConditionalWrapper from './ConditionalWrapper';
import MyImage from './MyImage';

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

	const [maxLineCountReached, setMaxLineCountReached] = useState(false);

	const onPressAvatar = () =>
		navigation.navigate('ProfileScreen', { userId: message.userId });

	const onPressContent = () =>
		navigation.navigate('MessageScreen', { message });

	// @ts-ignore: TextLayoutEvent is the type
	const onTextLayout = e =>
		setMaxLineCountReached(e.nativeEvent.lines.length === maxLineCount);

	const time = moment(message.createdAt).format('MM/DD/YYYY');

	const alignment = isCurrentUser ? 'flex-end' : 'flex-start';
	const borderRadius = 7;
	const borderBottomLeftRadius = isCurrentUser ? borderRadius : 0;
	const borderBottomRightRadius = isCurrentUser ? 0 : borderRadius;

	return (
		<HStack justifyContent={alignment} mb={5} mx={2}>
			{!isCurrentUser && (
				<Container>
					<TouchableOpacity onPress={onPressAvatar}>
						<MyImage
							source={{ s3Key: message.user.avatar }}
							style={{
								borderRadius: 55,
								height: 55,
								width: 55,
							}}
						/>
					</TouchableOpacity>
				</Container>
			)}
			<VStack alignItems={alignment} pr={2} width="100%">
				{message.type === MessageType.Text && (
					<ConditionalWrapper
						condition={maxLineCountReached}
						wrapper={children => (
							<TouchableOpacity onPress={onPressContent}>
								{children}
							</TouchableOpacity>
						)}
					>
						<Container
							backgroundColor={isCurrentUser ? '#339' : '#369'}
							borderBottomLeftRadius={borderBottomLeftRadius}
							borderBottomRightRadius={borderBottomRightRadius}
							borderRadius={borderRadius}
							mb={2}
							px={4}
							py={2}
						>
							<Text numberOfLines={maxLineCount} onTextLayout={onTextLayout}>
								{message.content}
							</Text>
							{maxLineCountReached && (
								<Ionicons name="ios-arrow-forward" size={24} />
							)}
						</Container>
					</ConditionalWrapper>
				)}
				{message.type === MessageType.Image && (
					<TouchableOpacity onPress={onPressContent}>
						<MyImage
							source={{ s3Key: message.content }}
							style={{ borderRadius: 10, height: 150, width: 150 }}
						/>
					</TouchableOpacity>
				)}
				<Text color={colors.gray}>{time}</Text>
			</VStack>
		</HStack>
	);
};

export default MessageItem;
