import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import contactListStackProps from '../screens/ContactListScreen';
import profileStackProps from '../screens/ProfileScreen';
import { screenOptions } from './constants';

const Stack = createStackNavigator();

const ProfileStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen {...profileStackProps} />
			<Stack.Screen {...contactListStackProps} />
		</Stack.Navigator>
	);
};

export default ProfileStack;
