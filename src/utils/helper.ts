import { ChatRoom } from '../global/types';
import { deleteChatRoomUser } from './api/mutations';

export type ValueOf<T> = T[keyof T];

export const asyncForEach = async <T>(
	array: T[],
	callback: (x: T, i: number, l: T[]) => Promise<void>
): Promise<void> => {
	// TODO: Optimize
	// eslint-disable-next-line no-await-in-loop
	for (let i = 0; i < array.length; i += 1) await callback(array[i], i, array);
};

export const formatHandler = (name: string | undefined): string =>
	name ? `@${name}` : '';

export const range = (
	start: number,
	stop?: number,
	step?: number
): number[] => {
	if (typeof stop === 'undefined') {
		// one param defined
		stop = start;
		start = 0;
	}

	if (typeof step === 'undefined') step = 1;

	if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) return [];

	const result = [];
	for (let i = start; step > 0 ? i < stop : i > stop; i += step) result.push(i);

	return result;
};

// TODO: Do I still need this?
export const leaveChatRoom = (
	chatRoom: ChatRoom,
	currentUserId: string
): void => {
	const currentChatRoomUser = chatRoom?.chatRoomUsers.items.find(
		chatRoomUser => chatRoomUser.userId === currentUserId
	);

	if (currentChatRoomUser?.id)
		deleteChatRoomUser({ id: currentChatRoomUser.id });
};
