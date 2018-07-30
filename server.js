const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');

let port = process.env.PORT || 8000;

const mongo = require('mongodb').MongoClient;

let db;

const creds = process.env.MPW || require('./mlabpw');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/os-code-challenge/index.html'));
});

app.get('/:file', (req, res) => {
  res.sendFile(path.join(__dirname, `dist/os-code-challenge/${req.params.file}`))
});

app.post('/new/:id', (req, res) => {
  console.log(req.body)
  db.collection('athletes').insert({_id: req.params.id, athlete: req.body})
    .then(res.json({ok:true}));
})

mongo.connect(`mongodb://${creds.user}:${creds.pw}@ds159631.mlab.com:59631/opensponsorship`, (err, database) => {
  if (err) throw err;
  db = database;

  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });

})
