import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { Container, HStack, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { colors } from '../global/constants';
import { ScreenName } from '../navigation/types';
import { Selectors, Store } from '../store';
import ConditionalWrapper from './ConditionalWrapper';
import MyImage from './MyImage';

const maxLineCount = 10;

type Props = {
	messageId: string;
};

const MessageItem: React.FC<Props> = ({ messageId }) => {
	const navigation = useNavigation();

	const [maxLineCountReached, setMaxLineCountReached] = useState(false);

	const currentUserId = useSelector<Store.State, string | undefined>(
		Selectors.getCurrentUserId
	);
	const message = useSelector<Store.State, Store.Message>(
		Selectors.getItem(messageId, { [Store.IdKey.userId]: {} })
	);

	const isCurrentUser = message.userId === currentUserId;
	const time = moment(message.createdAt).format('MM/DD/YYYY');
	const alignment = isCurrentUser ? 'flex-end' : 'flex-start';
	const borderRadius = 7;
	const borderBottomLeftRadius = isCurrentUser ? borderRadius : 0;
	const borderBottomRightRadius = isCurrentUser ? 0 : borderRadius;

	const onPressAvatar = () =>
		navigation.navigate(ScreenName.Profile, { userId: message.userId });

	const onPressContent = () =>
		navigation.navigate('MessageScreen', { message });

	// @ts-ignore: TextLayoutEvent is the type
	const onTextLayout = e =>
		setMaxLineCountReached(e.nativeEvent.lines.length === maxLineCount);

	return (
		<HStack justifyContent={alignment} mb={5} mx={2} space={2}>
			{!isCurrentUser && (
				// Todo: Use AvatarButton
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
				{message.type === Store.MessageType.text && (
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
				{message.type === Store.MessageType.image && (
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
