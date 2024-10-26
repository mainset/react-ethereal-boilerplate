import React from 'react';
import ReactDOMClient from 'react-dom/client';

const MAIN = <div>Hello world</div>;

const targetContainer = document.getElementById('react-ethereal-boilerplate');

if (targetContainer) {
  ReactDOMClient.createRoot(targetContainer).render(MAIN);
}
