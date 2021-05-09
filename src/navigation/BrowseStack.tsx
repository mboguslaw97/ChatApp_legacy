import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BrowseMenuScreen from '../screens/BrowseMenuScreen';
import ChatRoomInfoScreen from '../screens/ChatRoomInfoScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactListScreen from '../screens/ContactListScreen';
import CreateChatScreen from '../screens/CreateChatScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { screenOptions } from './constants';

const Stack = createStackNavigator();

const BrowseStack: React.FC = () => {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen
				name="BrowseMenuScreen"
				component={BrowseMenuScreen}
				options={{ title: 'Browse' }}
			/>
			<Stack.Screen name="ChatRoomInfoScreen" component={ChatRoomInfoScreen} />
			<Stack.Screen name="ChatRoomScreen" component={ChatRoomScreen} />
			<Stack.Screen name="ContactListScreen" component={ContactListScreen} />
			<Stack.Screen name="CreateChatScreen" component={CreateChatScreen} />
			<Stack.Screen name="MessageScreen" component={MessageScreen} />
			<Stack.Screen name="ProfileScreen" component={ProfileScreen} />
		</Stack.Navigator>
	);
};

export default BrowseStack;
