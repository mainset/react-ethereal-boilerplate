import { extendScalableStoreCreator } from 'redux-shared-store';

import {
  exampleReducer,
  exampleSagas,
} from 'store';

const createReduxStore = extendScalableStoreCreator(
  {
    localExample: exampleReducer,
  },
  [
    exampleSagas
  ],
);

export default createReduxStore;
