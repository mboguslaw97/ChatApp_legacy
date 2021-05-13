import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

import * as APIt from '../../../API';
import { ChatRoomUser, User } from '../../../global/types';
import { BrowseChatRooms } from '../../../store';
import * as GQL from './graphql';

export const getChatRoomUser = async (
	id: string
): Promise<ChatRoomUser | undefined> => {
	const vars: APIt.GetChatRoomQueryVariables = { id };
	const result = (await API.graphql(
		graphqlOperation(GQL.getChatRoomUser, vars)
	)) as GraphQLResult<{ getChatRoomUser: ChatRoomUser }>;
	return result.data?.getChatRoomUser;
};

export const getUser = async (
	gql: string,
	id: string
): Promise<User | undefined> => {
	const vars: APIt.GetUserQueryVariables = { id };
	const result = (await API.graphql(
		graphqlOperation(gql, vars)
	)) as GraphQLResult<{ getUser: User }>;

	const user = result.data?.getUser;
	// await processUser(user);
	return user;
};

export const listBrowseChatRooms = async (): Promise<
	BrowseChatRooms | undefined
> => {
	const result = (await API.graphql(
		graphqlOperation(GQL.listChatRooms)
	)) as GraphQLResult<{ listChatRooms: { items: BrowseChatRooms } }>;
	const browseChatRooms = result.data?.listChatRooms.items;
	// await processChatRooms(browseChatRooms);
	return browseChatRooms;
};
