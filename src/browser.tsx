import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { configureReduxStore } from 'redux-store';

import routes from './routes';

const reduxStore = configureReduxStore();

const BrowserReactApp = (
  <Provider store={reduxStore}>
    <RouterProvider router={routes} />
  </Provider>
);

export default BrowserReactApp;
