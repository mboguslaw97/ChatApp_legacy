import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

import * as APIt from '../../../API';
import {
	ChatRoom,
	ChatRoomUser,
	Contact,
	Message,
	MessageType,
	User,
} from '../../../global/types';
import * as GQL from '../../../graphql/mutations';
import { storeImage } from '../../storage';
import * as CustomGQL from './graphql';

type Args<S> = {
	gql?: string;
	key: keyof typeof GQL;
	process?: (x: S) => Promise<void>;
};

const factory =
	<T, S>(args: Args<S>) =>
	async (input: S) => {
		const { gql, key, process } = args;
		if (process) await process(input);
		type GqlPromise = Promise<GraphQLResult<{ [key: string]: T }>>;
		const { data } = await (API.graphql(
			graphqlOperation(gql ?? GQL[key], { input })
		) as GqlPromise);
		if (data && data[key]) return data[key];
		throw Error('Invalid response');
	};

export const createChatRoom = factory<ChatRoom, APIt.CreateChatRoomInput>({
	key: 'createChatRoom',
});

export const createChatRoomUser = factory<
	ChatRoomUser,
	APIt.CreateChatRoomUserInput
>({ gql: CustomGQL.createChatRoomUser, key: 'createChatRoomUser' });

export const createContact = factory<Contact, APIt.CreateContactInput>({
	key: 'createContact',
});

export const createMessage = factory<Message, APIt.CreateMessageInput>({
	gql: CustomGQL.createMessage,
	key: 'createMessage',
	process: async input => {
		if (input.type === MessageType.Image)
			input.content = await storeImage(input.content);
		if (!input.content) throw new Error('content is undefined');
	},
});

export const createUser = factory<User, APIt.CreateUserInput>({
	key: 'createUser',
});

export const deleteChatRoomUser = factory<
	ChatRoomUser,
	APIt.DeleteChatRoomUserInput
>({ key: 'deleteChatRoomUser' });

export const deleteContact = factory<Contact, APIt.DeleteContactInput>({
	key: 'deleteContact',
});

export const updateUser = factory<User, APIt.UpdateUserInput>({
	key: 'updateUser',
});
