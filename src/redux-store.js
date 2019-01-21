import { extendScalableStoreCreator } from 'redux-shared-store';

import {
  exampleReducer,
  exampleSagas,
} from 'store';

const createReduxStore = extendScalableStoreCreator(
  {
    localExample: exampleReducer,
    // TODO: add reducers
  },
  [
    exampleSagas,
    // TODO: add sagas
  ],
);

export default createReduxStore;
