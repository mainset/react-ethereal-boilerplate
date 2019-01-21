import React from 'react';
import { Provider } from 'react-redux';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server';

import { configureReduxStore } from './redux-store';
import routes from './routes';

const ProvideServerReactApp = async (requestUrl: string, fullUrl: string) => {
  // Step 1: Create a static handler for the routes
  const { query, dataRoutes } = createStaticHandler(routes);

  // Step 2: Create a fetch-compatible Request object
  const fetchRequest = new Request(fullUrl);

  // Step 3: Use the handler to get the context (data loading, routing matches)
  const routerContext = await query(fetchRequest);

  // If the context is a Response (e.g., redirect), throw it to be handled
  if (routerContext instanceof Response) {
    throw routerContext;
  }

  // Step 4: Configure the Redux store
  const reduxStore = configureReduxStore();

  // Step 5: Create the static router
  const staticRouter = createStaticRouter(dataRoutes, routerContext);

  return (
    <Provider store={reduxStore}>
      <StaticRouterProvider router={staticRouter} context={routerContext} />
    </Provider>
  );
};

export default ProvideServerReactApp;
