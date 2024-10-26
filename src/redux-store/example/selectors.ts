import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../redux-store';

const exampleStoreSelector = (state: RootState) => state.example;

const welcomeDataSelector = createSelector(
  [exampleStoreSelector],
  (exampleStore) => exampleStore.data
);

export { welcomeDataSelector };
