import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';
import { fontSize3, imageSize, margin2 } from '../../global/constants';

export type Styles = {
	buttonJoin: ViewStyle;
	container: ViewStyle;
	containerIcon: ViewStyle;
	containerImage: ViewStyle;
	containerInner: ViewStyle;
	textInput: TextStyle;
};

const createStyleSheet = (colors: Colors): Styles =>
	StyleSheet.create({
		buttonJoin: {
			padding: 5,
		},
		container: {
			borderColor: colors.border,
			borderTopWidth: 1,
			justifyContent: 'center',
		},
		containerIcon: {
			justifyContent: 'flex-end',
			marginLeft: margin2,
		},
		containerImage: {
			alignItems: 'center',
			flex: 1,
			height: imageSize,
		},
		containerInner: {
			alignItems: 'center',
			flexDirection: 'row',
			padding: 10,
		},
		textInput: {
			color: colors.text,
			flex: 1,
			fontSize: fontSize3,
			maxHeight: 300,
		},
	});

export default createStyleSheet;
