import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

import * as APIt from '../API';
import { Toast } from '../global/types';
import * as GQL from '../graphql/mutations';
import * as GQL2 from '../graphql2/mutations';
import { Store } from '../store';
import { storeImage } from '../utils/storage';

type Args<S> = {
	gql?: string;
	key: keyof typeof GQL;
	process?: (x: S) => Promise<void>;
};

const factory =
	<T, S>(args: Args<S>) =>
	async (input: S, toast?: Toast) => {
		const { gql, key, process } = args;
		if (process) await process(input);

		type GqlPromise = Promise<GraphQLResult<{ [key: string]: T }>>;
		const { data } = await (API.graphql(
			graphqlOperation(gql ?? GQL[key], { input })
		) as GqlPromise);

		if (data && data[key]) return data[key];

		toast?.show({
			status: 'error',
			title: 'There was an error processing your request',
		});
		throw Error('Invalid response');
	};

export const createChatRoom = factory<Store.ChatRoom, APIt.CreateChatRoomInput>(
	{
		key: 'createChatRoom',
	}
);

export const createChatRoomUser = factory<
	Store.ChatRoomUser,
	APIt.CreateChatRoomUserInput
>({ gql: GQL2.createChatRoomUser, key: 'createChatRoomUser' });

export const createContact = factory<Store.Contact, APIt.CreateContactInput>({
	key: 'createContact',
});

export const createMessage = factory<Store.Message, APIt.CreateMessageInput>({
	gql: GQL2.createMessage,
	key: 'createMessage',
	process: async input => {
		if (input.type === Store.MessageType.image)
			input.content = await storeImage(input.content);

		if (!input.content) throw new Error('content is undefined');
	},
});

export const createUser = factory<Store.User, APIt.CreateUserInput>({
	key: 'createUser',
});

export const deleteChatRoomUser = factory<
	Store.ChatRoomUser,
	APIt.DeleteChatRoomUserInput
>({ key: 'deleteChatRoomUser' });

export const deleteContact = factory<Store.Contact, APIt.DeleteContactInput>({
	key: 'deleteContact',
});

export const updateUser = factory<Store.User, APIt.UpdateUserInput>({
	key: 'updateUser',
});
