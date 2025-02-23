import 'dotenv/config';

import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';

import paths from './paths.mjs';
import proxyConfig from './proxy.mjs';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));

// get all path wich is not starts from api
app.get(/^\/+(?!api)/, (_req, res) =>
  res.sendFile(path.resolve(paths.rootPath, 'public', 'index.html'))
);

app.use('/api', createProxyMiddleware(proxyConfig['/api/']));
app.use('/api-local', createProxyMiddleware(proxyConfig['/api-local/']));

app.listen(port, () => console.log(`App listening on port ${port}!`));
