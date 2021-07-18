import { StackScreenProps } from '@react-navigation/stack';

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

export enum ScreenName {
	BrowseMenu = 'BrowseMenuScreen',
	ChatList = 'ChatListScreen',
	ChatRoomInfo = 'ChatRoomInfoScreen',
	ChatRoom = 'ChatRoomScreen',
	ContactList = 'ContactListScreen',
	CreateChat = 'CreateChatScreen',
	Message = 'MessageScreen',
	Profile = 'ProfileScreen',
	Settings = 'SettingsScreen',
}

export type ScreenProps = {
	[ScreenName.BrowseMenu]: undefined;
	[ScreenName.ChatList]: undefined;
	[ScreenName.ChatRoomInfo]: { chatRoomId: string };
	[ScreenName.ChatRoom]: { chatRoomId: string };
	[ScreenName.ContactList]: { userIds?: string[] };
	[ScreenName.CreateChat]: undefined;
	[ScreenName.Message]: { messageId: string };
	[ScreenName.Profile]: { userId: string };
	[ScreenName.Settings]: undefined;
};

export type StackProps<T> = {
	component: React.FC<T>;
	name: keyof ScreenProps;
	options?: { title: string };
};

export type BrowseMenuScreenProps = StackScreenProps<
	ScreenProps,
	ScreenName.BrowseMenu
>;

export type ChatListScreenProps = StackScreenProps<
	ScreenProps,
	ScreenName.ChatList
>;

export type ChatRoomScreenProps = StackScreenProps<
	ScreenProps,
	ScreenName.ChatRoom
>;

export type ChatRoomInfoScreenProps = StackScreenProps<
	ScreenProps,
	ScreenName.ChatRoomInfo
>;

export type ContactListScreenProps = StackScreenProps<
	ScreenProps,
	ScreenName.ContactList
>;

export type CreateChatScreenProps = StackScreenProps<
	ScreenProps,
	ScreenName.CreateChat
>;

export type MessageScreenProps = StackScreenProps<
	ScreenProps,
	ScreenName.Message
>;

export type ProfileScreenProps = StackScreenProps<
	ScreenProps,
	ScreenName.Profile
>;

export type SettingsScreenProps = StackScreenProps<
	ScreenProps,
	ScreenName.Settings
>;
