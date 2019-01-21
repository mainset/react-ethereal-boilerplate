import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import createReduxStore from 'redux-store';

import routes from './routes';

const ProvideServerReactApp = (requestUrl, context) => {
  const {
    store: serverStore,
    history: memoryHistory,
  } = createReduxStore({ requestUrl });

  return (
    <Provider store={serverStore}>
      <StaticRouter location={requestUrl} context={context}>
        <ConnectedRouter history={memoryHistory}>
          {routes}
        </ConnectedRouter>
      </StaticRouter>
    </Provider>
  );
};

export default ProvideServerReactApp;
