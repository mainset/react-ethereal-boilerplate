import React from 'react';

import { SecureRoute } from 'containers';
import { Example, Home, Login, Portal } from 'pages';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/example',
    element: <Example />,
  },
  {
    element: <SecureRoute.Public />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    element: <SecureRoute.Protected />,
    children: [
      {
        path: '/portal',
        element: <Portal />,
      },
    ],
  },
];

export default routes;
