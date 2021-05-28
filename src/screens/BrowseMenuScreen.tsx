import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, Icon, IconButton } from 'native-base';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ChatRoomItem from '../components/ChatRoomItem';
import { primary } from '../global/constants';
import { BrowseMenuScreenProps } from '../navigation/types';
import { BrowseChatRooms, ReduxStore } from '../store';
import createChatStackProps from './CreateChatScreen';

const BrowseMenuScreen: React.FC<BrowseMenuScreenProps> = ({ navigation }) => {
	const browseChatRooms = useSelector<ReduxStore, BrowseChatRooms>(
		state => state.browseChatRooms
	);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={
						<Icon as={<MaterialCommunityIcons name="plus" />} color={primary} />
					}
					onPress={() => navigation.navigate(createChatStackProps.name)}
					variant="header"
				/>
			),
		});
	}, [navigation]);

	return (
		<Box>
			<FlatList
				data={browseChatRooms}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
				style={{ height: '100%' }}
			/>
		</Box>
	);
};

const browseMenuStackProps = {
	component: BrowseMenuScreen,
	name: 'BrowseMenuScreen',
	options: { title: 'Browse' },
};

export default browseMenuStackProps;
