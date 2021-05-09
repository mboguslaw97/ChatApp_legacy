import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import SettingsScreen from '../screens/SettingsScreen';
import { screenOptions } from './constants';

const Stack = createStackNavigator();

const SettingsStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen
				name="SettingsScreen"
				component={SettingsScreen}
				options={{ title: 'Settings' }}
			/>
		</Stack.Navigator>
	);
};

export default SettingsStack;
