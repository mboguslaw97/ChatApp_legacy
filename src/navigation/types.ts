import { StackScreenProps } from '@react-navigation/stack';

import { ChatRoom, Message, User } from '../global/types';

export type BottomTabParamList = {
	Browse: undefined;
	Chats: undefined;
	Profile: undefined;
	Search: undefined;
};

export type BrowseProps = StackScreenProps<BottomTabParamList, 'Browse'>;
export type ChatsProps = StackScreenProps<BottomTabParamList, 'Chats'>;
export type ProfileProps = StackScreenProps<BottomTabParamList, 'Profile'>;
export type SearchProps = StackScreenProps<BottomTabParamList, 'Search'>;

export enum ScreenNames {
	BrowseMenuScreen = 'BrowseMenuScreen',
	ChatListScreen = 'ChatListScreen',
	ChatRoomInfoScreen = 'ChatRoomInfoScreen',
	ChatRoomScreen = 'ChatRoomScreen',
	ContactListScreen = 'ContactListScreen',
	CreateChatScreen = 'CreateChatScreen',
	MessageScreen = 'MessageScreen',
	ProfileScreen = 'ProfileScreen',
	SettingsScreen = 'SettingsScreen',
}

export type ScreenProps = {
	[ScreenNames.BrowseMenuScreen]: undefined;
	[ScreenNames.ChatListScreen]: undefined;
	[ScreenNames.ChatRoomInfoScreen]: { chatRoom: ChatRoom };
	[ScreenNames.ChatRoomScreen]: { chatRoomId: string };
	[ScreenNames.ContactListScreen]: { users?: User[] };
	[ScreenNames.CreateChatScreen]: undefined;
	[ScreenNames.MessageScreen]: { message: Message };
	[ScreenNames.ProfileScreen]: { userId: string };
	[ScreenNames.SettingsScreen]: undefined;
};

export type StackProps<T> = {
	component: React.FC<T>;
	name: keyof ScreenProps;
	options?: { title: string };
};

export type BrowseMenuScreenProps = StackScreenProps<
	ScreenProps,
	ScreenNames.BrowseMenuScreen
>;

export type ChatListScreenProps = StackScreenProps<
	ScreenProps,
	ScreenNames.ChatListScreen
>;

export type ChatRoomScreenProps = StackScreenProps<
	ScreenProps,
	ScreenNames.ChatRoomScreen
>;

export type ChatRoomInfoScreenProps = StackScreenProps<
	ScreenProps,
	ScreenNames.ChatRoomInfoScreen
>;

export type ContactListScreenProps = StackScreenProps<
	ScreenProps,
	ScreenNames.ContactListScreen
>;

export type CreateChatScreenProps = StackScreenProps<
	ScreenProps,
	ScreenNames.CreateChatScreen
>;

export type MessageScreenProps = StackScreenProps<
	ScreenProps,
	ScreenNames.MessageScreen
>;

export type ProfileScreenProps = StackScreenProps<
	ScreenProps,
	ScreenNames.ProfileScreen
>;

export type SettingsScreenProps = StackScreenProps<
	ScreenProps,
	ScreenNames.SettingsScreen
>;
