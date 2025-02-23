import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router';

import { configureReduxStore } from './redux-store';

import routes from './routes';

const reduxStore = configureReduxStore();

const BrowserReactApp = (
  <Provider store={reduxStore}>
    <RouterProvider router={createBrowserRouter(routes)} />
  </Provider>
);

export default BrowserReactApp;
