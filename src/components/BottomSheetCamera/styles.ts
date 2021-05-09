import { StyleSheet, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';

export type Styles = {
	container: ViewStyle;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createStyleSheet = (
	colors: Colors
	// globalStyles?: GlobalStyles
): Styles =>
	StyleSheet.create({
		container: { backgroundColor: colors.background, borderRadius: 20 },
	});

export default createStyleSheet;
