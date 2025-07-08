import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../redux-store';

const currentSessionStoreSelector = (state: RootState) => state.currentSession;

const currentSessionUserIdSelector = createSelector(
  [currentSessionStoreSelector],
  (currentSessionStore) => currentSessionStore.authenticatedUserId,
);

export { currentSessionUserIdSelector };
