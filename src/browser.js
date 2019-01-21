import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import createReduxStore from 'redux-store';

import routes from './routes';

const {
  store: browserStore,
  history: browserHistory,
} = createReduxStore();

const BrowserReactApp = (
  <Provider store={browserStore}>
    <BrowserRouter>
      <ConnectedRouter history={browserHistory}>
        {routes}
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>
);

export default BrowserReactApp;
