const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT
// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

db.connect((err) => {
    if (err) console.error("DB connection error: ", err);
    else console.log("DB connected.");
});

// fetch all forms
app.get("/api/fetchallform", (req, res) => {
    db.query("SELECT * FROM forms", (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });
// Save Form Structure:
app.post("/api/forms", (req, res) => {
    const { formName, fields } = req.body;
    const query = "INSERT INTO forms (formName, fields) VALUES (?, ?)";
    db.query(query, [formName, JSON.stringify(fields)], (err, result) => {
      if (err) return res.status(500).send(err);
      res.send(fields);
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
  

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
