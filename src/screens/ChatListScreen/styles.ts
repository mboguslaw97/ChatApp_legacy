import { StyleSheet, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';

export type Styles = {
	container: ViewStyle;
	flatlist: ViewStyle;
};

// @tsignore
const createStyleSheet = (colors?: Colors): Styles => // eslint-disable-line
	StyleSheet.create({
		container: {
			marginBottom: 0,
		},
		flatlist: {
			height: '100%',
		},
	});

export default createStyleSheet;
