import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import reduxStore from './redux-store';
import routes from './routes';

const BrowserReactApp = (
  <Provider store={reduxStore}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>
);

export default BrowserReactApp;
