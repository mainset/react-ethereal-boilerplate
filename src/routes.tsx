import React from 'react';

import { Example, Home } from 'pages';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/example',
    element: <Example />,
  },
];

export default routes;
