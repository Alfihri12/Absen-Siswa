const db = require('../models');
const data = db.data;

exports.getData = (req, res) => {
    data.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}