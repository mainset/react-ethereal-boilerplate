import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import reduxStore from './redux-store';
import routes from './routes';

const ProvideServerReactApp = (requestUrl, context) => (
  <Provider store={reduxStore}>
    <StaticRouter location={requestUrl} context={context}>
      {routes}
    </StaticRouter>
  </Provider>
);

export default ProvideServerReactApp;
