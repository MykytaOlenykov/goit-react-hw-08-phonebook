import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './auth/slice';
import { contactsApi } from './contacts/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
