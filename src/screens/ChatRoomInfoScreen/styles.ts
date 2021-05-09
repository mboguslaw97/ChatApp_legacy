import { StyleSheet, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';
import { marginBottomCard } from '../../global/constants';
import { GlobalStyles } from '../../global/styles';

export type Styles = {
	containerScreen: ViewStyle;
	flatlist: ViewStyle;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createStyleSheet = (colors: Colors, globalStyles: GlobalStyles): Styles =>
	StyleSheet.create({
		containerScreen: {
			...globalStyles.containerScreen,
			paddingTop: marginBottomCard,
		},
		flatlist: {
			height: '100%',
		},
	});

export default createStyleSheet;
