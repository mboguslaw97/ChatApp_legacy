import React from 'react';
import { ImageProps, StyleSheet } from 'react-native';
// eslint-disable-next-line
// @ts-ignore
import Image from 'react-native-image-progress';
// eslint-disable-next-line
// @ts-ignore
import ProgressBar from 'react-native-progress/Bar';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { ReduxStore } from '../../store';

const MyImage: React.FC<ImageProps> = props => {
	const { style } = props;

	const colors = useSelector<ReduxStore, Colors>(state => state.colors);

	const styleFlat = StyleSheet.flatten(style);
	const { width } = styleFlat;
	const { height } = styleFlat;

	// Squashing bug caused by marings
	const newStyle = {
		...styleFlat,
		margin: 0,
		marginBottom: 0,
		marginLeft: 0,
		marginRight: 0,
		marginTop: 0,
		marginVertical: 0,
	};

	const indicator =
		width && width >= 150 && height && height >= 150 ? ProgressBar : undefined;

	return (
		<Image
			{...props}
			imageStyle={newStyle}
			indicator={indicator}
			indicatorProps={{
				color: colors.highlight,
			}}
		/>
	);
};

export default MyImage;
