import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Colors } from './colors';
import {
	avatarSize1,
	avatarSize2,
	borderRadius,
	imageSize,
	margin2,
	marginBottomCard,
} from './constants';

export type GlobalStyles = {
	avatarLarge: ImageStyle;
	avatarSmall: ImageStyle;
	containerList: ViewStyle;
	containerListItem: ViewStyle;
	containerScreen: ViewStyle;
	containerHeaderRight: ViewStyle;
	image: ImageStyle;
	text: TextStyle;
};

const createStyleSheet = (colors: Colors): GlobalStyles =>
	StyleSheet.create({
		avatarLarge: {
			borderRadius: avatarSize2,
			height: avatarSize2,
			width: avatarSize2,
		},
		avatarSmall: {
			borderRadius: avatarSize1,
			height: avatarSize1,
			width: avatarSize1,
		},
		containerHeaderRight: {
			marginRight: margin2,
		},
		containerList: {
			borderTopColor: colors.border,
			borderTopWidth: 1,
			marginBottom: marginBottomCard,
			width: '100%',
		},
		containerListItem: {
			alignItems: 'center',
			backgroundColor: colors.card,
			borderBottomWidth: 1,
			borderColor: colors.border,
			flexDirection: 'row',
			padding: 10,
			width: '100%',
		},
		containerScreen: {
			backgroundColor: colors.background,
			flex: 1,
		},
		image: {
			borderRadius,
			height: imageSize,
			width: imageSize,
		},
		text: {
			color: colors.text,
		},
	});

export default createStyleSheet;
