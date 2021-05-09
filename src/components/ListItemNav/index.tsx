import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { ScreenProps } from '../../navigation/types';
import { ReduxStore } from '../../store';
import { ValueOf } from '../../utils/helper';
import createStyleSheet from './styles';

type Props = {
	value: string;
	screen: keyof ScreenProps;
	screenArgs?: ValueOf<ScreenProps>;
};

const ListItemNav: React.FC<Props> = ({ value, screen, screenArgs }) => {
	const navigation = useNavigation();
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors);

	const onPress = () => navigation.navigate(screen, screenArgs);
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={globalStyles.containerListItem}>
				<Text style={styles.textInput}>{value}</Text>
				<Ionicons name="ios-arrow-forward" size={24} color={colors.text} />
			</View>
		</TouchableOpacity>
	);
};

export default ListItemNav;
