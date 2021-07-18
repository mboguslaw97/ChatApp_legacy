import { Box, FlatList, IconButton } from 'native-base';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ChatRoomItem from '../components/ChatRoomItem';
import MyIcon from '../components/MyIcon';
import {
	BrowseMenuScreenProps,
	ScreenName,
	StackProps,
} from '../navigation/types';
import { Selectors, Store } from '../store';

const BrowseMenuScreen: React.FC<BrowseMenuScreenProps> = ({ navigation }) => {
	const browseChatRooms = useSelector<Store.State, string[]>(
		Selectors.getBrowseChatRoomIds
	);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					// @ts-ignore
					icon={<MyIcon name="plus" variant="header" />}
					onPress={() => navigation.navigate(ScreenName.CreateChat)}
				/>
			),
		});
	}, [navigation]);

	return (
		<Box>
			<FlatList
				data={browseChatRooms}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <ChatRoomItem chatRoomId={item} />}
				style={{ height: '100%' }}
			/>
		</Box>
	);
};

const browseMenuStackProps: StackProps<BrowseMenuScreenProps> = {
	component: BrowseMenuScreen,
	name: ScreenName.BrowseMenu,
	options: { title: 'Browse' },
};

export default browseMenuStackProps;
