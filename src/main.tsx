import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';

import reduxStore from './redux-store';
import routes from './routes';

const MAIN = <Provider store={reduxStore}>{routes}</Provider>;

const targetContainer = document.getElementById('react-ethereal-boilerplate');

if (targetContainer) {
  ReactDOMClient.createRoot(targetContainer).render(MAIN);
}
