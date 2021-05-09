import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
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
		<Tab.Navigator>
			<Tab.Screen
				name="Chats"
				component={ChatsStack}
				options={{
					tabBarIcon: ({ color, focused, size }: TabBarIconProps) =>
						focused ? (
							<MaterialCommunityIcons name="chat" size={size} color={color} />
						) : (
							<MaterialCommunityIcons
								name="chat-outline"
								size={size}
								color={color}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Browse"
				component={BrowseStack}
				options={{
					tabBarIcon: ({ color, size }: TabBarIconProps) => (
						<MaterialIcons name="library-books" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={ProfileStack}
				options={{
					tabBarIcon: ({ color, focused, size }: TabBarIconProps) =>
						focused ? (
							<MaterialCommunityIcons
								name="account-circle"
								size={size}
								color={color}
							/>
						) : (
							<MaterialCommunityIcons
								name="account-circle-outline"
								size={size}
								color={color}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsStack}
				options={{
					tabBarIcon: ({ color, focused, size }: TabBarIconProps) =>
						focused ? (
							<MaterialCommunityIcons name="cog" size={size} color={color} />
						) : (
							<MaterialCommunityIcons
								name="cog-outline"
								size={size}
								color={color}
							/>
						),
				}}
			/>
		</Tab.Navigator>
	);
};

export default BottomTab;
