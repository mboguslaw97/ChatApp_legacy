import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';
import { fontSize2, margin2, margin3 } from '../../global/constants';

export type Styles = {
	container: ViewStyle;
	displayName: TextStyle;
	name: TextStyle;
	leftContainer: ViewStyle;
	middleContainer: ViewStyle;
	rightContainer: ViewStyle;
	topContainer: ViewStyle;
	trashContainer: ViewStyle;
};

const createStyleSheet = (colors: Colors): Styles =>
	StyleSheet.create({
		container: {
			alignItems: 'flex-start',
			justifyContent: 'space-between',
			padding: 10,
		},
		displayName: {
			color: colors.text,
			fontSize: fontSize2,
			marginRight: margin2,
		},
		leftContainer: {
			flexDirection: 'row',
			marginRight: margin3,
		},
		middleContainer: {
			flex: 1,
		},
		name: {
			color: colors.textAlt,
			fontSize: fontSize2,
		},
		rightContainer: {
			flex: 1,
			flexDirection: 'row',
		},
		topContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginBottom: 5,
			width: '100%',
		},
		trashContainer: {
			alignItems: 'center',
			backgroundColor: colors.red,
			height: '100%',
			justifyContent: 'center',
			width: 100,
		},
	});

export default createStyleSheet;
