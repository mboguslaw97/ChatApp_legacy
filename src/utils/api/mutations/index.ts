import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

import * as APIt from '../../../API';
import { ChatRoom, ChatRoomUser, Contact, User } from '../../../global/types';
import * as GQL from '../../../graphql/mutations';
import { storeImage } from '../../storage';
import * as CustomGQL from './graphql';

const factory = <T, S>(key: keyof typeof GQL, gql?: string) => async (
	input: S
) => {
	type GqlPromise = Promise<GraphQLResult<{ [key: string]: T }>>;
	const { data } = await (API.graphql(
		graphqlOperation(gql ?? GQL[key], { input })
	) as GqlPromise);
	if (data && data[key]) return data[key];
	throw Error('Invalid response');
};

export const createChatRoom = factory<ChatRoom, APIt.CreateChatRoomInput>(
	'createChatRoom'
);

export const createChatRoomUser = factory<
	ChatRoomUser,
	APIt.CreateChatRoomUserInput
>('createChatRoomUser', CustomGQL.createChatRoomUser);

export const createContact = factory<Contact, APIt.CreateContactInput>(
	'createContact'
);

// TODO: Create this function with factory
export const createMessage = async (
	input: APIt.CreateMessageInput
): Promise<void> => {
	if (input.type === 'image') input.content = await storeImage(input.content);
	if (!input.content) throw new Error('content is undefined');
	await API.graphql(graphqlOperation(CustomGQL.createMessage, { input }));
};

export const createUser = factory<User, APIt.CreateUserInput>('createUser');

export const deleteChatRoomUser = factory<
	ChatRoomUser,
	APIt.DeleteChatRoomUserInput
>('deleteChatRoomUser');

export const deleteContact = factory<Contact, APIt.DeleteContactInput>(
	'deleteContact'
);

export const updateUser = factory<User, APIt.UpdateUserInput>('updateUser');
