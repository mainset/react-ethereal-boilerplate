require('dotenv').config();

/* eslint-disable */
var express = require('express');
var proxy = require('http-proxy-middleware');
var path = require('path');
var fs = require("fs");

var proxyConfig = require('./proxy');

var app = express();
var port = process.env.PORT || 3000;

import ReactDOMServer from 'react-dom/server';
import ProvideServerReactApp from '../src/server';
/* eslint-enable */

app.use(express.static('public'));

// get all path wich is not starts from api
app.get(/^\/+(?!api)/, (req, res) => {
  fs.readFile(path.resolve('public', 'index.html'), 'utf8', (err, htmlData) => {
    if (err) { return res.status(404).end(); }

    return res.send(
      htmlData.replace(
        '<div id="react-ethereal-boilerplate"></div>',
        `<div id="react-ethereal-boilerplate">
          ${ReactDOMServer.renderToString(ProvideServerReactApp(req.url))}
        </div>`,
      ),
    );
  });
});

app.use('/api', proxy(proxyConfig['/api/']));
app.use('/api-local', proxy(proxyConfig['/api-local/']));

app.listen(port, () => console.log(`App listening on port ${port}!`));
