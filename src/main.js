import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import createReduxStore from './redux-store';
import routes from './routes';

const {
  store: browserStore,
  history: browserHistory,
} = createReduxStore();

const MAIN = (
  <Provider store={browserStore}>
    <ConnectedRouter history={browserHistory}>
      {routes}
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(MAIN, document.getElementById('react-ethereal-boilerplate'));
