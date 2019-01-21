/* eslint-disable */
var merge = require('webpack-merge');

var ssrServer = require('./config-fragments/ssr-server.config.js');
var ssrWebapp = require('./config-fragments/ssr-webapp.config.js');

var prod = require('./config-fragments/prod.config.js');
/* eslint-enable */

module.exports = [ssrServer, merge(ssrWebapp, prod)];
