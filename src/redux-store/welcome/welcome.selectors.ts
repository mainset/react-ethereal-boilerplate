import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../redux-store';

const welcomeStoreSelector = (state: RootState) => state.welcome;

// internal API
const internalWelcomePublicDataSelector = createSelector(
  [welcomeStoreSelector],
  (welcomeStore) => welcomeStore.internalPublicAPIData
);

const internalWelcomeProtectedDataSelector = createSelector(
  [welcomeStoreSelector],
  (welcomeStore) => welcomeStore.internalProtectedAPIData
);

// external API
const externalPublicWelcomeDataSelector = createSelector(
  [welcomeStoreSelector],
  (welcomeStore) => welcomeStore.externalPublicAPIData
);

export {
  externalPublicWelcomeDataSelector,
  internalWelcomeProtectedDataSelector,
  internalWelcomePublicDataSelector,
};
