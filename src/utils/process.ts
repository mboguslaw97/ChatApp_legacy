/* eslint-disable @typescript-eslint/no-use-before-define */
import {
	ChatRoom,
	ChatRoomUser,
	Contact,
	Message,
	MessageType,
	User,
} from '../global/types';
import { asyncForEach } from './helper';
import { fetchFile } from './storage';

export const processChatRoom = async (
	chatRoom: ChatRoom | undefined
): Promise<ChatRoom | undefined> => {
	if (chatRoom?.messages?.items) await processMessages(chatRoom.messages.items);
	if (chatRoom?.chatRoomUsers?.items)
		await processChatRoomUsers(chatRoom.chatRoomUsers.items);
	return chatRoom;
};

export const processChatRooms = async (
	chatRooms: ChatRoom[] | undefined
): Promise<ChatRoom[] | undefined> => {
	if (!chatRooms) return;
	await asyncForEach(chatRooms, async chatRoom => {
		if (chatRoom) await processChatRoom(chatRoom);
	});
	return chatRooms;
};

export const processChatRoomUser = async (
	chatRoomUser: ChatRoomUser | undefined
): Promise<ChatRoomUser | undefined> => {
	if (!chatRoomUser) return;
	const { chatRoom, user } = chatRoomUser;
	if (chatRoom) await processChatRoom(chatRoom);
	if (user) await processUser(user);
	return chatRoomUser;
};

export const processChatRoomUsers = async (
	chatRoomUsers: ChatRoomUser[] | undefined
): Promise<ChatRoomUser[] | undefined> => {
	if (!chatRoomUsers) return chatRoomUsers;
	await asyncForEach(chatRoomUsers, async chatRoomUser => {
		if (chatRoomUser) await processChatRoomUser(chatRoomUser);
	});
	return chatRoomUsers;
};

export const processContact = async (
	contact: Contact | undefined
): Promise<Contact | undefined> => {
	await processUser(contact?.followee);
	await processUser(contact?.follower);
	return contact;
};

export const processContacts = async (
	contacts: Contact[] | undefined
): Promise<Contact[] | undefined> => {
	if (!contacts) return;
	await asyncForEach(contacts, async contact => {
		if (contact) await processContact(contact);
	});
	return contacts;
};

export const processMessage = async (
	message: Message | undefined
): Promise<Message | undefined> => {
	if (message?.user) await processUser(message.user);
	if (message?.chatRoom) await processChatRoom(message.chatRoom);
	// TODO: What is this?
	// Default message.type is text
	if (message && !message.type) message.type = MessageType.Text;
	if (message?.type === MessageType.Image)
		message.content = await fetchFile(message.content);
	return message;
};

export const processMessages = async (
	messages: Message[] | undefined
): Promise<Message[] | undefined> => {
	if (!messages) return messages;
	await asyncForEach(messages, async message => {
		if (message) await processMessage(message);
	});
	return messages;
};

export const processUser = async (
	user: User | undefined
): Promise<User | undefined> => {
	if (user?.avatar) user.avatar = await fetchFile(user.avatar);
	if (user?.chatRoomUsers?.items)
		await processChatRoomUsers(user.chatRoomUsers.items);
	if (user?.followees?.items) await processContacts(user.followees.items);
	if (user?.followers?.items) await processContacts(user.followers.items);
	return user;
};
