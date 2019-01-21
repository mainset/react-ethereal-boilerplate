import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Example, Home } from 'pages';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/example" component={Example} />
  </Switch>
);

export default routes;
