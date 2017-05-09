const express = require('express');
const fs = require('fs');

const app = express();
const basePath = '../sessions/2017-Bahrain-RACE-Part1';

app.get('/', (req, res) => {
  res.send(`Timing replayer for ${basePath}`);
});

app.get('/all.js', (req, res) => {
  const data = fs.readFileSync(`${basePath}/all.js`);
  res.setHeader('Content-Type', 'application/javascript');
  res.send(data);
});

app.get('/cur.js', (req, res) => {
  const timestamp = Object.keys(req.query)[0];
  const filename = `${basePath}/cur.js_${timestamp}`;
  if (!fs.existsSync(filename)) {
    res.sendStatus(404);
    return;
  }
  const data = fs.readFileSync(filename);
  res.setHeader('Content-Type', 'application/javascript');
  res.send(data);
});

app.listen(9000, () => {
  console.log('Replayer listening on port 9000!');
});
