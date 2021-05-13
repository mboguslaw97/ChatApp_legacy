import { AntDesign, Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../../global/colors';
import { iconSize1 } from '../../global/constants';
import { ReduxStore } from '../../store';

const iconNameClassMap = {
	camera: Entypo,
	close: AntDesign,
	heart: AntDesign,
	hearto: AntDesign,
	info: Feather,
	plus: AntDesign,
	send: MaterialIcons,
};

type Props = {
	color?: string;
	name: keyof typeof iconNameClassMap;
	onPress: () => void;
	size?: number;
	style?: ViewStyle;
};

const ButtonIcon: React.FC<Props> = ({
	color,
	name,
	onPress,
	size = iconSize1,
	style,
}) => {
	// const globalStyles = useSelector<ReduxStore, GlobalStyles>(
	// 	state => state.styles
	// );
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	// const styles = createStyleSheet(colors);

	const IconClass = iconNameClassMap[name];
	const iconProps = { color: color ?? colors.highlight, name, size };

	return (
		<TouchableOpacity onPress={onPress} style={style}>
			{/* @ts-ignore */}
			<IconClass {...iconProps} />
		</TouchableOpacity>
	);
};

export default ButtonIcon;
