import 'dotenv/config';

import express from 'express';
import proxy from 'http-proxy-middleware';
import path from 'path';

import paths from './paths.mjs';
import proxyConfig from './proxy.mjs';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// get all path wich is not starts from api
app.get(/^\/+(?!api)/, (req, res) =>
  res.sendFile(path.resolve(paths.rootPath, 'public', 'index.html'))
);

app.use('/api', proxy(proxyConfig['/api']));
app.use('/api-local', proxy(proxyConfig['/api-local']));

app.listen(port, () => console.log(`App listening on port ${port}!`));
