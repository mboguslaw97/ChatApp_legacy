import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';
import { fontSize1, fontSize2, margin1, margin3 } from '../../global/constants';

export type Styles = {
	container: ViewStyle;
	lastMessage: TextStyle;
	leftContainer: ViewStyle;
	middleContainer: ViewStyle;
	rightContainer: ViewStyle;
	time: TextStyle;
	title: TextStyle;
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
		lastMessage: {
			color: colors.textAlt,
			fontSize: fontSize2,
		},
		leftContainer: {
			flexDirection: 'row',
			marginRight: margin3,
		},
		middleContainer: {
			flex: 1,
		},
		rightContainer: {
			flex: 1,
		},
		time: {
			color: colors.textAlt,
			fontSize: fontSize1,
		},
		title: {
			color: colors.text,
			fontSize: fontSize2,
			fontWeight: 'bold',
		},
		topContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			marginBottom: margin1,
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
