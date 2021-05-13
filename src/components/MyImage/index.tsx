import React, { useEffect, useState } from 'react';
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
import { fetchFile } from '../../utils/storage';

interface MyImageProps extends ImageProps {
	source: {
		uri?: string;
		s3Key?: string;
	};
}

const MyImage: React.FC<MyImageProps> = props => {
	const { source, style } = props;

	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const [uri, setUri] = useState<string>();

	useEffect(() => {
		(async () => {
			if (source.s3Key) {
				const tmp = await fetchFile(source.s3Key);
				setUri(tmp);
			} else {
				setUri(source.uri);
			}
		})();
	}, [source]);

	const styleFlat = StyleSheet.flatten(style);
	const { width, height } = styleFlat;

	// TODO: What is this?
	// Squashing bug caused by margins
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

	return uri ? (
		<Image
			{...props}
			source={{ uri }}
			imageStyle={newStyle}
			indicator={indicator}
			indicatorProps={{
				color: colors.highlight,
			}}
		/>
	) : (
		<></>
	);
};

export default MyImage;
