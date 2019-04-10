import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { exampleReducer } from 'store';

import { history } from 'redux-store';

const createGlobalReducer = () => (
  combineReducers({
    example: exampleReducer,
    // NOTE: put other app reducers here

    router: connectRouter(history),
  })
);

export default createGlobalReducer;
