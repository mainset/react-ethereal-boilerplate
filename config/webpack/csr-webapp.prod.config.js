/* eslint-disable */
var merge = require('webpack-merge');

var csrWebapp = require('./config-fragments/csr-webapp.config.js');

var prod = require('./config-fragments/prod.config.js');
/* eslint-enable */

module.exports = merge(csrWebapp, prod);
