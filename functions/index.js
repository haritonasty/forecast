const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });

const cities = require('./cities');

exports.getCities = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    res.send(cities);
  });
});
