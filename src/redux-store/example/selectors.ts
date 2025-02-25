import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../redux-store';

const exampleStoreSelector = (state: RootState) => state.example;

// internal API
const internalWelcomeDataSelector = createSelector(
  [exampleStoreSelector],
  (exampleStore) => exampleStore.internalAPIData
);

// public API
const publicWelcomeDataSelector = createSelector(
  [exampleStoreSelector],
  (exampleStore) => exampleStore.publicAPIData
);

export { internalWelcomeDataSelector, publicWelcomeDataSelector };
