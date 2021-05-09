import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';
import {
	borderRadius,
	fontSize1,
	fontSize2,
	margin1,
	margin2,
	margin3,
} from '../../global/constants';
import { GlobalStyles } from '../../global/styles';

export type Styles = {
	avatar: ImageStyle;
	container: ViewStyle;
	containerLeft: ViewStyle;
	containerRight: ViewStyle;
	containerText: ViewStyle;
	text: TextStyle;
	time: TextStyle;
};

const createStyleSheet = (
	colors: Colors,
	globalStyles: GlobalStyles,
	isCurrentUser: boolean
): Styles =>
	StyleSheet.create({
		avatar: {
			...globalStyles.avatarSmall,
		},
		container: {
			flexDirection: isCurrentUser ? 'row-reverse' : 'row',
			marginBottom: margin3,
			width: '100%',
		},
		containerLeft: {
			flexDirection: 'column-reverse',
			height: '100%',
		},
		containerRight: {
			alignItems: isCurrentUser ? 'flex-end' : 'flex-start',
			marginHorizontal: margin2,
			maxWidth: '70%',
		},
		containerText: {
			alignItems: 'flex-end',
			backgroundColor: isCurrentUser ? '#339' : '#369',
			borderBottomLeftRadius: isCurrentUser ? borderRadius : 0,
			borderBottomRightRadius: isCurrentUser ? 0 : borderRadius,
			borderRadius,
			flexDirection: 'row',
			justifyContent: 'center',
			paddingHorizontal: 12,
			paddingVertical: 8,
		},
		text: {
			color: colors.text,
			fontSize: fontSize2,
			marginRight: 1,
		},
		time: {
			color: colors.textAlt,
			fontSize: fontSize1,
			marginTop: margin1,
		},
	});

export default createStyleSheet;
