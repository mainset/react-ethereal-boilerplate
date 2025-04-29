import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { SessionProvider } from './containers';
import { configureReduxStore } from './redux-store';
import routes from './routes';
import { FetchApiService } from './utils';

FetchApiService.init({
  tokenRefreshUrl: '/api-boilerplate/auth/refresh',
  // TODO: possibly redirect with react-router to keep SPA feel
  onTokenRefreshErrorCb: () => {
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  },
});

const reduxStore = configureReduxStore();

const BrowserReactApp = (
  <Provider store={reduxStore}>
    <SessionProvider>
      <RouterProvider router={createBrowserRouter(routes)} />
    </SessionProvider>
  </Provider>
);

export default BrowserReactApp;
