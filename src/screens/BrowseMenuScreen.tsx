import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Box, FlatList, Icon, IconButton } from 'native-base';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ChatRoomItem from '../components/ChatRoomItem';
import {
	BrowseMenuScreenProps,
	ScreenNames,
	StackProps,
} from '../navigation/types';
import { BrowseChatRooms, ReduxStore } from '../store';

const BrowseMenuScreen: React.FC<BrowseMenuScreenProps> = ({ navigation }) => {
	const browseChatRooms = useSelector<ReduxStore, BrowseChatRooms>(
		state => state.browseChatRooms
	);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={
						<Icon
							as={<MaterialCommunityIcons name="plus" />}
							// @ts-ignore
							variant="header"
						/>
					}
					onPress={() => navigation.navigate(ScreenNames.CreateChatScreen)}
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

const browseMenuStackProps: StackProps<BrowseMenuScreenProps> = {
	component: BrowseMenuScreen,
	name: ScreenNames.BrowseMenuScreen,
	options: { title: 'Browse' },
};

export default browseMenuStackProps;
