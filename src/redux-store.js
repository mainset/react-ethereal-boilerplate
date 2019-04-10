import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import createGlobalReducer from './global-reducer';
import globalSaga from './global-saga';

export const history = createBrowserHistory();

const globalReducer = createGlobalReducer();
const sagaMiddleware = createSagaMiddleware();

const middlewareComposedWithDevTools = composeWithDevTools(
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
    // NOTE: put other middleware here
  ),
);

const reduxStore = createStore(
  globalReducer,
  middlewareComposedWithDevTools,
);

sagaMiddleware.run(globalSaga);

export default reduxStore;
