const express = require('express');
const app = express();
const path = require('path');
app.use('/', express.static(path.join(__dirname + '/heroku-front-app/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/heroku-front-app/build/index.html'));
})

const port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log('connected');
})
  .on('error', err => console.error(`erreur de connexion: ${err}`));