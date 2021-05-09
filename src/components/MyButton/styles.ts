import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';
import { fontSize3 } from '../../global/constants';

export type Styles = {
	container: ViewStyle;
	text: TextStyle;
};

const createStyleSheet = (colors: Colors, textColor?: string): Styles =>
	StyleSheet.create({
		container: {
			alignItems: 'center',
			flex: 1,
			justifyContent: 'center',
			width: '100%',
		},
		text: {
			color: textColor ?? colors.highlight,
			fontSize: fontSize3,
		},
	});

export default createStyleSheet;
