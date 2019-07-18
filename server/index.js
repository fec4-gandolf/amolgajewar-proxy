const express = require('express');
require('dotenv').config()
const port = process.env.PORT;

const app = express();
app.set('port', port);

app.use(express.static('public'));

app.listen(app.get('port'), () => {
  console.log(`Amol Proxy listening on : ${app.get('port')}`);
});
