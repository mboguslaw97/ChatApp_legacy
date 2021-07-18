import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

import * as APIt from '../../../API';
import { Store } from '../../../store';
import * as GQL from './graphql';

export const getChatRoomUser = async (
	id: string
): Promise<Store.ChatRoomUser | undefined> => {
	const vars: APIt.GetChatRoomQueryVariables = { id };
	const result = (await API.graphql(
		graphqlOperation(GQL.getChatRoomUser, vars)
	)) as GraphQLResult<{ getChatRoomUser: Store.ChatRoomUser }>;
	return result.data?.getChatRoomUser;
};

export const getUser = async (
	gql: string,
	id: string
): Promise<Store.User | undefined> => {
	const vars: APIt.GetUserQueryVariables = { id };
	const result = (await API.graphql(
		graphqlOperation(gql, vars)
	)) as GraphQLResult<{ getUser: Store.User }>;

	const user = result.data?.getUser;
	// await processUser(user);
	return user;
};

export const listBrowseChatRooms = async (): Promise<
	Store.ChatRoom[] | undefined
> => {
	const result = (await API.graphql(
		graphqlOperation(GQL.listChatRooms)
	)) as GraphQLResult<{ listChatRooms: { items: Store.ChatRoom[] } }>;
	const browseChatRooms = result.data?.listChatRooms.items;
	// await processChatRooms(browseChatRooms);
	return browseChatRooms;
};
