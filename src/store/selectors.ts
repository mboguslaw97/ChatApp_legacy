/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Normalizr from './normalizr';
import * as Store from './types';

export const getItem =
	(id: string | undefined, key: Store.NormalizrKey = [], defaultValue?: any) =>
	(state: Store.State) => {
		if (!id) return defaultValue;
		return (
			(Array.isArray(key)
				? Normalizr.followPath(state.items, id, key)
				: Normalizr.denormalize(state.items, id, key)) ?? defaultValue
		);
	};

export const getCurrentUserId = (state: Store.State): string | undefined =>
	state.currentUserId;

export const getCurrentUser =
	(key: Store.NormalizrKey = [], defaultValue?: any) =>
	(state: Store.State) => {
		const currentUserId = getCurrentUserId(state);
		return getItem(currentUserId, key, defaultValue)(state);
	};

export const getBrowseChatRoomIds = (state: Store.State): string[] =>
	state.browseChatRoomIds ?? [];
