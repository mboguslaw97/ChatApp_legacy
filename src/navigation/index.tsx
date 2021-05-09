import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import { useSelector } from 'react-redux';

import { Colors } from '../global/colors';
import { ReduxStore } from '../store';
import BottomTab from './BottomTab';

const Navigation: React.FC = () => {
	const colors = useSelector<ReduxStore, Colors>(state => state.colors);
	const colorTheme = useSelector<ReduxStore, ColorSchemeName>(
		state => state.colorTheme
	);

	const theme = {
		colors: {
			background: colors.background,
			border: colors.border,
			card: colors.card,
			notification: colors.notification,
			primary: colors.highlight,
			text: colors.text,
		},
		dark: colorTheme === 'dark',
	};

	return (
		<NavigationContainer theme={theme}>
			<BottomTab />
		</NavigationContainer>
	);
};

export default Navigation;
