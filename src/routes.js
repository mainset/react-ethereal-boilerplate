import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { history } from 'redux-store';

import { Example, Home } from 'pages';

const routes = (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/example" component={Example} />
    </Switch>
  </ConnectedRouter>
);

export default routes;
