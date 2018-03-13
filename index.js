const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.send('./heroku-front-app')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log('connected');
})
  .on('error', err => console.error(`erreur de connexion: ${err}`));