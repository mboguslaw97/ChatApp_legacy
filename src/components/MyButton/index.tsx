import React from 'react';
import { ButtonProps, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { ReduxStore } from '../../store';
import createStyleSheet from './styles';

type Props = ButtonProps & { color?: string; style?: ViewStyle };

const MyButton: React.FC<Props> = ({ color, onPress, style, title }) => {
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const styles = createStyleSheet(colors, color);

	return (
		<TouchableOpacity onPress={onPress} style={[styles.container, style]}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

export default MyButton;
