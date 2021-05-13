import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { GlobalStyles } from '../../global/styles';
import { ReduxStore } from '../../store';
import MyImage from '../MyImage';
import createStyleSheet from './styles';

type Props = {
	uri: string;
	userId: string;
};

const ButtonAvatar: React.FC<Props> = ({ uri, userId }) => {
	const navigation = useNavigation();
	const globalStyles = useSelector<ReduxStore, GlobalStyles>(
		state => state.styles
	);
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const styles = createStyleSheet(colors);

	const onPress = () => navigation.navigate('ProfileScreen', { userId });

	return (
		<TouchableOpacity
			onPress={onPress}
			// style={globalStyles.headerRightContainer}
		>
			<MyImage source={{ s3Key: uri }} style={globalStyles.avatarSmall} />
		</TouchableOpacity>
	);
};

export default ButtonAvatar;
