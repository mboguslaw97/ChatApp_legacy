import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';
import { fontSize3, margin1, margin2 } from '../../global/constants';

export type Styles = {
	container: ViewStyle;
	label: TextStyle;
};

const createStyleSheet = (colors: Colors): Styles =>
	StyleSheet.create({
		container: {
			width: '100%',
		},
		label: {
			color: colors.textAlt,
			fontSize: fontSize3,
			marginBottom: margin1,
			marginLeft: margin2,
		},
	});

export default createStyleSheet;
