import ReactDOMClient from 'react-dom/client';

import BrowserReactApp from './browser';

const targetContainer = document.getElementById('react-ethereal-boilerplate');

if (targetContainer) {
  ReactDOMClient.hydrateRoot(targetContainer, BrowserReactApp);
}
