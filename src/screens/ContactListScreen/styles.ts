import { StyleSheet, ViewStyle } from 'react-native';

import { Colors } from '../../global/colors';

export type Styles = {
	flatlist: ViewStyle;
};

// @tsignore
const createStyleSheet = (colors: Colors): Styles => // eslint-disable-line
	StyleSheet.create({
		flatlist: {
			height: '100%',
		},
	});

export default createStyleSheet;
