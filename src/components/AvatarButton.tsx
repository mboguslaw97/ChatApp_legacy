import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import MyImage, { Source } from './MyImage';

type Props = {
	onPress?: () => void;
	size: 'small' | 'large';
	source: Source;
	userId?: string;
};

const AvatarButton: React.FC<Props> = ({ onPress, size, source, userId }) => {
	const navigation = useNavigation();

	const onPress2 =
		onPress ?? (() => navigation.navigate('ProfileScreen', { userId }));

	const radius = size === 'small' ? 50 : 100;

	return (
		<TouchableOpacity onPress={onPress2}>
			<MyImage
				source={source}
				style={{ borderRadius: radius, height: radius, width: radius }}
			/>
		</TouchableOpacity>
	);
};

export default AvatarButton;
