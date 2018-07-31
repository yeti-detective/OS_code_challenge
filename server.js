const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');

let port = process.env.PORT || 8000;

const mongo = require('mongodb').MongoClient;
const asyncHandler = require('express-async-handler');

let db;

const creds = process.env.MPW || require('./mlabpw');
const defaultPlayers = require('./default-players');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/os-code-challenge/index.html'));
});

app.get(
  '/athletes',
  asyncHandler(async (req, res, next) => {
    const athletes = await db
      .collection('athletes')
      .find()
      .toArray();
    res.send(athletes);
  })
);

app.get('/:file', (req, res) => {
  res.sendFile(
    path.join(__dirname, `dist/os-code-challenge/${req.params.file}`)
  );
});

app.post('/new', (req, res) => {
  // i know this line is ridiculous, i am sorry
  const athlete = Object.keys(req.body)[0];
  db.collection('athletes')
    .insert(JSON.parse(athlete))
    .then(res.json({ ok: true }));
});

app.delete(
  '/reset_data',
  asyncHandler(async (req, res, next) => {
    db.collection('athletes')
      .remove({})
      .then(db.collection('athletes').insert(defaultPlayers))
      .then(res.json({ ok: true }));
  })
);

mongo.connect(
  `mongodb://${creds.user}:${creds.pw}@ds159631.mlab.com:59631/opensponsorship`,
  (err, database) => {
    if (err) throw err;
    db = database;

    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  }
);
