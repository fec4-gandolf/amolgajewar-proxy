const express = require('express');
require('dotenv').config()
const port = process.env.PORT;
const proxy = require('http-proxy');
const apiProxy = proxy.createProxyServer();

const modalApi = "http://localhost:3003";
const bidBuyApi = 'http://localhost:3001';
const reviewApi = "http://localhost:3002";
const alsoViewedApi = 'http://localhost:3004';


const app = express();
app.set('port', port);

app.use(express.static('public'));


app.all("/api/images/*", function(req, res) {
  console.log('redirecting to modalApi server');
  apiProxy.web(req, res, {target: modalApi});
});

app.all("/items/id/*", function(req, res) {
  console.log('redirecting to bidBuyApi');
  apiProxy.web(req, res, {target: bidBuyApi});
});

app.all("/reviews/*", function(req, res) {
  console.log('redirecting to reviewApi');
  apiProxy.web(req, res, {target: reviewApi});
});

app.all("/api/alsovieweditems/*", function(req, res) {
  console.log('redirecting to alsoViewedApi');
  apiProxy.web(req, res, {target: alsoViewedApi});
});

app.listen(app.get('port'), () => {
  console.log(`Amol Proxy listening on : ${app.get('port')}`);
});
