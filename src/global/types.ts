import { IToastProps } from 'native-base/lib/typescript/components/composites/Toast/types';

export type Toast = {
	show: (props: IToastProps) => void;
};

export type ChatRoom = {
	chatRoomUsers: {
		items: ChatRoomUser[];
	};
	id: string;
	messages: {
		items: Message[];
	};
	name?: string;
};

export type ChatRoomUser = {
	chatRoom: ChatRoom;
	chatRoomId: string;
	id: string;
	user: User;
	userId: string;
};

export type Contact = {
	follower: User;
	followerId: string;
	followee: User;
	followeeId: string;
	id: string;
};

export enum MessageType {
	Text = 'text',
	Image = 'image',
}

export type Message = {
	chatRoom: ChatRoom;
	chatRoomId: string;
	content: string;
	createdAt: string;
	id: string;
	type: MessageType;
	user: User;
	userId: string;
};

export type User = {
	avatar: string;
	bio: string;
	chatRoomUsers: {
		items: ChatRoomUser[];
	};
	displayName: string;
	email: string;
	followees: {
		items: Contact[];
	};
	followers: {
		items: Contact[];
	};
	id: string;
	name: string;
	phone: string;
	pushToken: string;
};
