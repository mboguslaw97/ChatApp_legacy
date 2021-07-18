import { configureStore, createSlice } from '@reduxjs/toolkit';

import * as Reducers from './reducers';
import * as Selectors from './selectors';
import * as Store from './types';

const initialState: Store.State = {
	items: {},
};

const slice = createSlice({
	initialState,
	name: 'root',
	reducers: Reducers,
});

export { Selectors, Store };
export const Actions = slice.actions;
export default configureStore({ reducer: slice.reducer });
