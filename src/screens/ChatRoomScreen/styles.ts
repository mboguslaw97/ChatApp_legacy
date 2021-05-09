import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';
import { fontSize3 } from '../../global/constants';

export type Styles = {
	inputToolbarContainer: ViewStyle;
	textInput: TextStyle;
};

const createStyleSheet = (colors: Colors): Styles =>
	StyleSheet.create({
		inputToolbarContainer: {
			borderColor: colors.border,
			borderTopWidth: 1,
			height: 50,
		},
		textInput: {
			backgroundColor: colors.card,
			color: colors.text,
			fontSize: fontSize3,
			height: '100%',
			paddingTop: 0,
			width: '100%',
		},
	});

export default createStyleSheet;
