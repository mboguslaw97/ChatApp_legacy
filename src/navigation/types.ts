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

export type ScreenProps = {
	BrowseMenuScreen: undefined;
	ChatListScreen: undefined;
	ChatRoomInfoScreen: { chatRoom: ChatRoom };
	ChatRoomScreen: { chatRoomId: string };
	ContactListScreen: { users?: User[] };
	CreateChatScreen: { title: string };
	MessageScreen: { message: Message };
	ProfileScreen: { userId: string };
	SettingsScreen: undefined;
};

export type StackProps<T> = {
	component: React.FC<T>;
	name: keyof ScreenProps;
	options?: { title: string };
};

export type BrowseMenuScreenProps = StackScreenProps<
	ScreenProps,
	'BrowseMenuScreen'
>;

export type ChatListScreenProps = StackScreenProps<
	ScreenProps,
	'ChatListScreen'
>;

export type ChatRoomScreenProps = StackScreenProps<
	ScreenProps,
	'ChatRoomScreen'
>;

export type ChatRoomInfoScreenProps = StackScreenProps<
	ScreenProps,
	'ChatRoomInfoScreen'
>;

export type ContactListScreenProps = StackScreenProps<
	ScreenProps,
	'ContactListScreen'
>;

export type CreateChatScreenProps = StackScreenProps<
	ScreenProps,
	'CreateChatScreen'
>;

export type MessageScreenProps = StackScreenProps<ScreenProps, 'MessageScreen'>;

export type ProfileScreenProps = StackScreenProps<ScreenProps, 'ProfileScreen'>;

export type SettingsScreenProps = StackScreenProps<
	ScreenProps,
	'SettingsScreen'
>;

// Currently unused

// export type BrowseStackParamList = {
// 	BrowseMenuScreen: ScreenProps['BrowseMenuScreen'];
// 	ChatRoomScreen: ScreenProps['ChatRoomScreen'];
// 	ChatRoomInfoScreen: ScreenProps['ChatRoomInfoScreen'];
// 	CreateChatScreen: ScreenProps['CreateChatScreen'];
// 	ProfileScreen: ScreenProps['ProfileScreen'];
// };

// export type ChatsStackParamList = {
// 	ChatListScreen: ScreenProps['ChatListScreen'];
// 	ChatRoomScreen: ScreenProps['ChatRoomScreen'];
// 	ChatRoomInfoScreen: ScreenProps['ChatRoomInfoScreen'];
// 	CreateChatScreen: ScreenProps['CreateChatScreen'];
// 	ProfileScreen: ScreenProps['ProfileScreen'];
// };

// export type ProfileStackParamList = {
// 	ProfileScreen: ScreenProps['ProfileScreen'];
// };
