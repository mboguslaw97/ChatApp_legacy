import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ButtonIcon from '../../components/ButtonIcon';
import ContainerList from '../../components/ContainerList';
import ChatRoomItem from '../../components/ChatRoomItem';
import { GlobalStyles } from '../../global/styles';
import { BrowseMenuScreenProps } from '../../navigation/types';
import { BrowseChatRooms, ReduxStore } from '../../store';
import createChatStackProps from '../CreateChatScreen';
import createStyleSheet from './styles';

const BrowseMenuScreen: React.FC<BrowseMenuScreenProps> = ({ navigation }) => {
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	// const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet();

	const browseChatRooms = useSelector<ReduxStore, BrowseChatRooms>(
		state => state.browseChatRooms
	);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<ButtonIcon
					name="plus"
					onPress={() => navigation.navigate(createChatStackProps.name)}
					style={globalStyles.containerHeaderRight}
				/>
			),
		});
	}, [globalStyles.containerHeaderRight, navigation]);

	return (
		<ContainerList style={styles.container}>
			<FlatList
				data={browseChatRooms}
				keyExtractor={item => item.id}
				renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
				style={styles.flatlist}
			/>
		</ContainerList>
	);
};

const browseMenuStackProps = {
	component: BrowseMenuScreen,
	name: 'BrowseMenuScreen',
	options: { title: 'Browse' },
};

export default browseMenuStackProps;
