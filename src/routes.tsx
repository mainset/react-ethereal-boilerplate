import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Example, Home } from 'pages';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/example',
    element: <Example />,
  },
]);

export default routes;
