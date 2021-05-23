import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ButtonIcon from '../../components/ButtonIcon';
import ContainerList from '../../components/ContainerList';
import ListItemChatRoom from '../../components/ListItemChatRoom';
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
				style={styles.flatlist}
				data={browseChatRooms}
				renderItem={({ item }) => <ListItemChatRoom chatRoom={item} />}
				keyExtractor={item => item.id}
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
