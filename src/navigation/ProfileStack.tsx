import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ContactListScreen from '../screens/ContactListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { screenOptions } from './constants';

const Stack = createStackNavigator();

const ProfileStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen
				name="ProfileScreen"
				component={ProfileScreen}
				options={{ title: 'Profile' }}
			/>
			<Stack.Screen name="ContactListScreen" component={ContactListScreen} />
		</Stack.Navigator>
	);
};

export default ProfileStack;
