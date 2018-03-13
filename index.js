const express = require('express');
const front = require('./heroku-front-app/public/index.html')
const app = express();

app.get('*', (req, res) => {
  res.send(front);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log('connected');
})
  .on('error', err => console.error(`erreur de connexion: ${err}`));