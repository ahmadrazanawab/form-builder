const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const db = require('./src/db/db');

const app = express();
app.use(cors());
app.use(bodyParser.json());



db.connect((err) => {
  if (err) console.error("DB connection error: ", err);
  else console.log("DB connected.");
});


// Save Form Structure:
app.post("/api/forms", (req, res) => {
    const { formName, fields } = req.body;
    const query = "INSERT INTO forms (formName, fields) VALUES (?, ?)";
    db.query(query, [formName, JSON.stringify(fields)], (err, result) => {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
});
  
app.get('/', (req, res) => {
    res.send("hi ahmad raza");
})

  // Retrieve Submissions:
  app.get("/api/submissions/:formId", (req, res) => {
    const { formId } = req.params;
    const query = "SELECT * FROM submissions WHERE formId = ?";
    db.query(query, [formId], (err, results) => {
      if (err) return res.status(500).send(err);
      res.send(results);
    });
  });
  

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
