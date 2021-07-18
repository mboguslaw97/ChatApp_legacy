import * as APIt from '../API';
import { MessageType } from '../API';

export { MessageType };

export type ChatRoom = Omit<
	APIt.ChatRoom,
	'chatRoomUsers' | 'messages' | 'tags'
> & {
	chatRoomUserIds: string[];
	chatRoomUsers: ChatRoomUser[];
	messageIds: string[];
	messages: Message[];
	tags: string[];
};
export type ChatRoomUser = APIt.ChatRoomUser;
export type Contact = Omit<APIt.Contact, '__typename'> & {
	__typename: 'Contact' | 'Followee' | 'Follower';
};
export type Message = APIt.Message;
export type User = Omit<
	APIt.User,
	'chatRoomUsers' | 'followees' | 'followers'
> & {
	chatRoomUserIds: string[];
	chatRoomUsers: ChatRoomUser[];
	followeeIds: string[];
	followees: Contact[];
	followerIds: string[];
	followers: Contact[];
	email?: string;
	phone?: string;
};

export type Item = ChatRoom | ChatRoomUser | Contact | Message | User;
export type Items = Record<string, Item>;

export enum IdKey {
	chatRoomUserIds = 'chatRoomUserIds',
	followeeIds = 'followeeIds',
	followerIds = 'followerIds',
	messageIds = 'messageIds',
	userId = 'userId',
}
export type FieldSelector = { [k in IdKey]?: FieldSelector };
export type NormalizrKey = FieldSelector | IdKey[];

export type State = {
	browseChatRoomIds?: string[];
	currentUserId?: string;
	items: Items;
};
