import 'dotenv/config';

import global from './global.mjs';

global.init();

import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import fs from 'fs';

import proxyConfig from './proxy.mjs';

const app = express();
const port = process.env.PORT || 8080;

import ReactDOMServer from 'react-dom/server';
import ProvideServerReactApp from '../src/server.tsx';

app.use(express.static('public'));
// get all path which is not starts from api
app.get(/^\/+(?!api)/, async (req, res) => {
  fs.readFile(
    path.resolve('public', 'server.html'),
    'utf8',
    async (err, htmlData) => {
      const context = {}; // Context to track SSR rendering information

      if (err) {
        return res.status(404).end();
      }

      try {
        // Construct the full URL for the incoming request
        const fullUrl = `${req.protocol}://${req.get('host')}${req.url}`;

        // Pass both requestUrl (relative) and fullUrl to ProvideServerReactApp
        const appHtml = await ProvideServerReactApp(req.url, fullUrl, context);

        return res.send(
          htmlData.replace(
            '<div id="react-ethereal-boilerplate"></div>',
            `<div id="react-ethereal-boilerplate">${ReactDOMServer.renderToString(
              appHtml
            )}</div>`
          )
        );
      } catch (error) {
        if (error instanceof Response && error.status === 302) {
          // Handle redirects
          return res.redirect(error.headers.get('Location'));
        }
        console.error(error);
        return res.status(500).send('Internal Server Error');
      }
    }
  );
});

app.use('/api', createProxyMiddleware(proxyConfig['/api/']));
app.use('/api-local', createProxyMiddleware(proxyConfig['/api-local/']));
app.use('/api-boilerplate', createProxyMiddleware(proxyConfig['/api-boilerplate/']));

app.listen(port, () => console.log(`App listening on port ${port}!`));
