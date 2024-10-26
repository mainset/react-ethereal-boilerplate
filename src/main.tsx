import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { configureReduxStore } from 'redux-store';

import routes from './routes';

const reduxStore = configureReduxStore();

const MAIN = (
  <Provider store={reduxStore}>
    <RouterProvider router={routes} />
  </Provider>
);

const targetContainer = document.getElementById('react-ethereal-boilerplate');

if (targetContainer) {
  ReactDOMClient.createRoot(targetContainer).render(MAIN);
}
