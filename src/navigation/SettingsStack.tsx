import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import settingsStackProps from '../screens/SettingsScreen';
import { screenOptions } from './constants';

const Stack = createStackNavigator();

const SettingsStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen {...settingsStackProps} />
		</Stack.Navigator>
	);
};

export default SettingsStack;
