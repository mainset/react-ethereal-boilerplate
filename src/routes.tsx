import React from 'react';

import { ProtectedRoute } from 'containers';
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
    path: '/login',
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/portal',
        element: <Portal />,
      },
    ],
  },
];

export default routes;
