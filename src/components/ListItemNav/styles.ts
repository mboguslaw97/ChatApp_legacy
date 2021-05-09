import { StyleSheet, TextStyle } from 'react-native';

import { Colors } from '../../global/colors';
import { fontSize3 } from '../../global/constants';

export type Styles = {
	label: TextStyle;
	textInput: TextStyle;
};

const createStyleSheet = (colors: Colors): Styles =>
	StyleSheet.create({
		label: {
			color: colors.textAlt,
			fontSize: fontSize3,
		},
		textInput: {
			color: colors.text,
			flex: 1,
			fontSize: fontSize3,
			height: '100%',
			paddingTop: 0,
		},
	});

export default createStyleSheet;
