import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
} from '@react-navigation/native';
import { useColorMode } from 'native-base';
import React from 'react';

import BottomTab from './BottomTab';

const Navigation: React.FC = () => {
	const { colorMode } = useColorMode();

	return (
		<NavigationContainer
			theme={colorMode === 'dark' ? DarkTheme : DefaultTheme}
		>
			<BottomTab />
		</NavigationContainer>
	);
};

export default Navigation;
