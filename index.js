const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/heroku-front-app/build'))

app.get('*', (req, res) => {
  res.sendfile(__dirname + '/heroku-front-app/build/index.html');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log('connected');
})
  .on('error', err => console.error(`erreur de connexion: ${err}`));