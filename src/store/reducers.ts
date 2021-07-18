import _ from 'lodash';

import { Store } from '.';
import { normalize } from './normalizr';

export const setBrowseChatRoomIds = (
	state: Store.State,
	action: { payload: string[] }
): void => {
	state.browseChatRoomIds = action.payload;
};

export const setCurrentUserId = (
	state: Store.State,
	action: { payload: string }
): void => {
	state.currentUserId = action.payload;
};

// x@ts-ignore
const onUpdateMerge = (x, y) =>
	_.isArray(x) ? _.uniq(x.concat(y)) : undefined;

const normAndMerge = (state: Store.State, item: Store.Item) => {
	const norm = normalize(item);
	_.mergeWith(state.items, norm, onUpdateMerge);
};

export const updateItems = (
	state: Store.State,
	action: { payload: Store.Item | Store.Item[] }
): void => {
	if (Array.isArray(action.payload))
		action.payload.forEach(item => normAndMerge(state, item));
	else normAndMerge(state, action.payload);
};

// x@ts-ignore
const onDeleteMerge = (x, y) => (_.isArray(x) ? _.difference(x, y) : undefined);

export const deleteItem = (
	state: Store.State,
	action: { payload: Store.Item }
): void => {
	const norm = normalize(action.payload);
	_.mergeWith(state.items, norm, onDeleteMerge);
	const { id } = action.payload;
	delete state.items[id];
};
