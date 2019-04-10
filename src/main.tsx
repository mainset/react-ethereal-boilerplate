import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

import createReduxStore from './redux-store';
import routes from './routes';

const { store: browserStore, history: browserHistory } = createReduxStore();

const MAIN = (
  <Provider store={browserStore}>
    <ConnectedRouter history={browserHistory}>{routes}</ConnectedRouter>
  </Provider>
);

const targetContainer = document.getElementById('react-ethereal-boilerplate');

if (targetContainer) {
  ReactDOMClient.createRoot(targetContainer).render(MAIN);
}
