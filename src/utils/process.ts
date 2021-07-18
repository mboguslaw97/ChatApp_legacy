// TODO: Do I need this file anymore?
// Follow up: remove calls to these functions

/* eslint-disable @typescript-eslint/no-use-before-define */
import * as APIt from '../API';
import { asyncForEach } from './helper';

export const processChatRoom = async (
	chatRoom: APIt.ChatRoom | undefined
): Promise<APIt.ChatRoom | undefined> => {
	// if (chatRoom?.messages?.items) await processMessages(chatRoom.messages.items);

	// if (chatRoom?.chatRoomUsers?.items)
	// await processChatRoomUsers(chatRoom.chatRoomUsers.items);

	return chatRoom;
};

export const processChatRooms = async (
	chatRooms: APIt.ChatRoom[] | undefined
): Promise<APIt.ChatRoom[] | undefined> => {
	if (!chatRooms) return;

	await asyncForEach(chatRooms, async chatRoom => {
		if (chatRoom) await processChatRoom(chatRoom);
	});
	return chatRooms;
};

export const processChatRoomUser = async (
	chatRoomUser: APIt.ChatRoomUser | undefined
): Promise<APIt.ChatRoomUser | undefined> => {
	if (!chatRoomUser) return;

	const { chatRoom, user } = chatRoomUser;
	if (chatRoom) await processChatRoom(chatRoom);

	if (user) await processUser(user);

	return chatRoomUser;
};

export const processChatRoomUsers = async (
	chatRoomUsers: APIt.ChatRoomUser[] | undefined
): Promise<APIt.ChatRoomUser[] | undefined> => {
	if (!chatRoomUsers) return chatRoomUsers;

	await asyncForEach(chatRoomUsers, async chatRoomUser => {
		if (chatRoomUser) await processChatRoomUser(chatRoomUser);
	});
	return chatRoomUsers;
};

export const processContact = async (
	contact: APIt.Contact | undefined
): Promise<APIt.Contact | undefined> => {
	await processUser(contact?.followee);
	await processUser(contact?.follower);
	return contact;
};

export const processContacts = async (
	contacts: APIt.Contact[] | undefined
): Promise<APIt.Contact[] | undefined> => {
	if (!contacts) return;

	await asyncForEach(contacts, async contact => {
		if (contact) await processContact(contact);
	});
	return contacts;
};

export const processMessage = async (
	message: APIt.Message | undefined
): Promise<APIt.Message | undefined> => {
	if (message?.user) await processUser(message.user);

	if (message?.chatRoom) await processChatRoom(message.chatRoom);

	// if (message?.type === MessageType.Image)
	// message.content = await fetchFile(message.content);
	return message;
};

export const processMessages = async (
	messages: APIt.Message[] | undefined
): Promise<APIt.Message[] | undefined> => {
	if (!messages) return messages;

	await asyncForEach(messages, async message => {
		if (message) await processMessage(message);
	});
	return messages;
};

export const processUser = async (
	user: APIt.User | undefined
): Promise<APIt.User | undefined> => {
	// if (user?.avatar) user.avatar = await fetchFile(user.avatar);
	// if (user?.chatRoomUsers?.items)
	// 	await processChatRoomUsers(user.chatRoomUsers.items);

	// if (user?.followees?.items) await processContacts(user.followees.items);

	// if (user?.followers?.items) await processContacts(user.followers.items);

	return user;
};
