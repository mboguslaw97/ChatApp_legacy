import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';
import { fontSize4, margin1, marginBottomCard } from '../../global/constants';
import { GlobalStyles } from '../../global/styles';

export type Styles = {
	avatar: ImageStyle;
	container: ViewStyle;
	name: TextStyle;
};

const createStyleSheet = (colors: Colors, globalStyles: GlobalStyles): Styles =>
	StyleSheet.create({
		avatar: {
			...globalStyles.avatarLarge,
			marginBottom: margin1,
			marginTop: marginBottomCard,
		},
		container: {
			alignItems: 'center',
			backgroundColor: colors.background,
		},
		name: {
			color: colors.text,
			fontSize: fontSize4,
			marginBottom: marginBottomCard,
		},
	});

export default createStyleSheet;
