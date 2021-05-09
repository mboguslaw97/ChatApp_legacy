import { StyleSheet, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';

export type Styles = {
	container: ViewStyle;
};

const createStyleSheet = (colors: Colors): Styles =>
	StyleSheet.create({
		// Placeholder
		container: {
			backgroundColor: colors.background,
		},
	});

export default createStyleSheet;
