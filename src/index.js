const express = require('express');
const fs = require('fs');

const app = express();
const basePath = '../spike/timing-spike/sessions/2017-04-16_1545';

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/all.js', (req, res) => {
  const data = fs.readFileSync(`${basePath}/all.js`);
  res.setHeader('Content-Type', 'application/javascript');
  res.send(data);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
