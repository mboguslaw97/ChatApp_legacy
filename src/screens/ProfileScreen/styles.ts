import { ImageStyle, StyleSheet } from 'react-native';

import { Colors } from '../../global/colors';
import { margin1, marginBottomCard } from '../../global/constants';
import { GlobalStyles } from '../../global/styles';

export type Styles = {
	avatar: ImageStyle;
};

const createStyleSheet = (colors: Colors, globalStyles: GlobalStyles): Styles =>
	StyleSheet.create({
		avatar: {
			...globalStyles.avatarLarge,
			marginBottom: margin1,
			marginTop: marginBottomCard,
		},
	});

export default createStyleSheet;
