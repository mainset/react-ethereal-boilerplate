import ReactDOMClient from 'react-dom/client';

import BrowserReactApp from './browser';

const targetContainer = document.getElementById('react-ethereal-boilerplate');

ReactDOMClient.createRoot(targetContainer).render(BrowserReactApp);
