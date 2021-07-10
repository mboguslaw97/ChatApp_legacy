import { useTheme } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ImageProps, StyleSheet } from 'react-native';
// @ts-ignore
import Image from 'react-native-image-progress';
// @ts-ignore
import ProgressBar from 'react-native-progress/Bar';

import { fetchFile } from '../utils/storage';

export type Source = {
	uri?: string;
	s3Key?: string;
};

interface MyImageProps extends ImageProps {
	source: Source;
}

const MyImage: React.FC<MyImageProps> = props => {
	const { source, style } = props;

	const { colors } = useTheme();
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

	const styleFlat = StyleSheet.flatten(style ?? {});
	const { width, height } = styleFlat;

	const indicator =
		width && width >= 150 && height && height >= 150 ? ProgressBar : undefined;

	return uri ? (
		<Image
			{...props}
			imageStyle={style}
			indicator={indicator}
			indicatorProps={{
				color: colors.primary['400'],
			}}
			source={{ uri }}
		/>
	) : (
		<></>
	);
};

export default MyImage;
