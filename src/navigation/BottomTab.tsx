import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import BrowseStack from './BrowseStack';
import ChatsStack from './ChatsStack';
import ProfileStack from './ProfileStack';
import SettingsStack from './SettingsStack';

type TabBarIconProps = {
	color: string;
	// eslint-disable-next-line react/no-unused-prop-types
	focused: boolean;
	size: number;
};

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
	return (
		<Tab.Navigator tabBarOptions={{ showLabel: false }}>
			<Tab.Screen
				component={ChatsStack}
				name="Chats"
				options={{
					tabBarIcon: ({ color, focused, size }: TabBarIconProps) =>
						focused ? (
							<MaterialCommunityIcons color={color} name="chat" size={size} />
						) : (
							<MaterialCommunityIcons
								color={color}
								name="chat-outline"
								size={size}
							/>
						),
				}}
			/>
			<Tab.Screen
				component={BrowseStack}
				name="Browse"
				options={{
					tabBarIcon: ({ color, size }: TabBarIconProps) => (
						// <MaterialIcons name="library-books" size={size} color={color} />
						<MaterialCommunityIcons color={color} name="magnify" size={size} />
					),
				}}
			/>
			<Tab.Screen
				component={ProfileStack}
				name="Profile"
				options={{
					tabBarIcon: ({ color, focused, size }: TabBarIconProps) =>
						focused ? (
							<MaterialCommunityIcons
								color={color}
								name="account-circle"
								size={size}
							/>
						) : (
							<MaterialCommunityIcons
								color={color}
								name="account-circle-outline"
								size={size}
							/>
						),
				}}
			/>
			<Tab.Screen
				component={SettingsStack}
				name="Settings"
				options={{
					tabBarIcon: ({ color, focused, size }: TabBarIconProps) =>
						focused ? (
							<MaterialCommunityIcons color={color} name="cog" size={size} />
						) : (
							<MaterialCommunityIcons
								color={color}
								name="cog-outline"
								size={size}
							/>
						),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTab;
