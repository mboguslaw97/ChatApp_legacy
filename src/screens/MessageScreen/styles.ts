import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';
import { fontSize3, margin2 } from '../../global/constants';
import { GlobalStyles } from '../../global/styles';

export type Styles = {
	image: ImageStyle;
	scrollView: ViewStyle;
	text: TextStyle;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createStyleSheet = (
	colors: Colors,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	globalStyles?: GlobalStyles
): Styles =>
	StyleSheet.create({
		image: {
			flex: 1,
			resizeMode: 'contain',
		},
		scrollView: {},
		text: {
			color: colors.text,
			fontSize: fontSize3,
			margin: margin2,
		},
	});

export default createStyleSheet;
