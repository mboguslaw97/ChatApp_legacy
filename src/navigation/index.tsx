import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
} from '@react-navigation/native';
import { useColorMode, useTheme } from 'native-base';
import React from 'react';

import BottomTab from './BottomTab';

const Navigation: React.FC = () => {
	const { colorMode } = useColorMode();
	const { colors } = useTheme();

	const baseTheme = colorMode === 'dark' ? DarkTheme : DefaultTheme;
	const theme = {
		...baseTheme,
		colors: {
			...baseTheme.colors,
			primary: colors.primary['400'],
		},
	};

	return (
		<NavigationContainer theme={theme}>
			<BottomTab />
		</NavigationContainer>
	);
};

export default Navigation;
