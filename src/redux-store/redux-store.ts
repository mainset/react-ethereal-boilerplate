import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

const configuredReduxStore = configureStore({
  reducer: rootReducer,
});

function configureReduxStore() {
  return configuredReduxStore;
}

export { configureReduxStore };

// https://redux.js.org/tutorials/typescript-quick-start#define-root-state-and-dispatch-types

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
type RootState = ReturnType<typeof configuredReduxStore.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppStore = typeof configuredReduxStore;
type AppDispatch = typeof configuredReduxStore.dispatch;

export type { AppDispatch, AppStore, RootState };
