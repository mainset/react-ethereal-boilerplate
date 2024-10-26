import React from 'react';
import ReactDOMClient from 'react-dom/client';

const MAIN = <div>Hello world</div>;

const targetContainer = document.getElementById('react-ethereal-boilerplate');

ReactDOMClient.createRoot(targetContainer).render(MAIN);
