import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';
import Observable from 'zen-observable';

import * as APIt from '../../../API';
import { ChatRoomUser, Contact, Message } from '../../../global/types';
import * as GQL from '../../../graphql/subscriptions';
import * as CustomGQL from './graphql';

type Args<T> = {
	gql?: string;
	key: keyof typeof GQL;
	process?: (x: T | undefined) => Promise<T | undefined>;
};

type Payload<T> = { value: GraphQLResult<{ [key: string]: T | undefined }> };
type Subscription = { unsubscribe: () => void };

const factory =
	<T, S>(args: Args<T>) =>
	(callback: (result: T) => void, vars: S): Subscription | undefined => {
		const { gql, key } = args;
		const subscription = API.graphql(graphqlOperation(gql ?? GQL[key], vars));
		if (!(subscription instanceof Observable)) return;
		return subscription.subscribe({
			next: async (payload: Payload<T>) => {
				const { data, errors } = payload.value;
				if (errors) console.warn(errors);
				if (!data) return;
				const result = data[key];
				// if (process) result = await process(result);
				if (!result) return;
				callback(result);
			},
		});
	};

export const onCreateChatRoomUserByChatRoomId = factory<
	ChatRoomUser,
	APIt.OnCreateChatRoomUserByChatRoomIdSubscriptionVariables
>({
	key: 'onCreateChatRoomUserByChatRoomId',
	// process: processChatRoomUser,
});

export const onCreateChatRoomUserByUserId = factory<
	ChatRoomUser,
	APIt.OnCreateChatRoomUserByUserIdSubscriptionVariables
>({
	gql: CustomGQL.onCreateChatRoomUserByUserId,
	key: 'onCreateChatRoomUserByUserId',
	// process: processChatRoomUser,
});

export const onCreateFollowee = factory<
	Contact,
	APIt.OnCreateContactByFolloweeIdSubscriptionVariables
>({
	key: 'onCreateContactByFolloweeId',
	// process: processContact,
});

export const onCreateFollower = factory<
	Contact,
	APIt.OnCreateContactByFollowerIdSubscriptionVariables
>({
	key: 'onCreateContactByFollowerId',
	// process: processContact,
});

export const onCreateMessage = factory<
	Message,
	APIt.OnCreateMessageByChatRoomIdSubscriptionVariables
>({
	gql: CustomGQL.onCreateMessageByChatRoomId,
	key: 'onCreateMessageByChatRoomId',
	// process: processMessage,
});

export const onDeleteChatRoomUserByChatRoomId = factory<
	ChatRoomUser,
	APIt.OnDeleteChatRoomUserByChatRoomIdSubscriptionVariables
>({
	key: 'onDeleteChatRoomUserByChatRoomId',
});

export const onDeleteChatRoomUserByUserId = factory<
	ChatRoomUser,
	APIt.OnDeleteChatRoomUserByUserIdSubscriptionVariables
>({
	key: 'onDeleteChatRoomUserByUserId',
});

export const onDeleteFollowee = factory<
	Contact,
	APIt.OnDeleteContactByFolloweeIdSubscriptionVariables
>({
	key: 'onDeleteContactByFolloweeId',
});

export const onDeleteFollower = factory<
	Contact,
	APIt.OnDeleteContactByFollowerIdSubscriptionVariables
>({
	key: 'onDeleteContactByFollowerId',
});
