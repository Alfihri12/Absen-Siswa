const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = require("./app/models");
mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log("Connected to the database");
})
.catch((err) => {
    console.log("Cannot connect to the database", err);
    process.exit();
});

// impor model
const SiswaSchema = require('./app/models/model.js');
const dataModel = mongoose.model("students", SiswaSchema);

app.post("/students", (req, res) => {
  const data = new dataModel(req.body);
  data
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.get("/students", (req, res) => {
  dataModel
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});

require('./app/routes/route')(app);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});