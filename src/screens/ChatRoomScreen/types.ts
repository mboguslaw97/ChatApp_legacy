import { Message } from '../../global/types';

export type GiftedUser = {
	_id: string;
	avatar: string;
	name: string;
};

export type MessagesData = {
	data: {
		messagesByChatRoom: {
			items: Message[];
		};
	};
};
