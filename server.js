const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create connection to MySQL
const db = mysql.createConnection({
  host: 'mysql@localhost',
  user: 'root',
  password: 'sam2004@',
  database: 'dummy',
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Query the database to validate credentials
  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.query(sql, [username, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

// Route to handle prediction
app.post('/predict', (req, res) => {
  const { grades, attendance } = req.body;

  // Save academic data to the database
  const sql = `INSERT INTO AcademicData (grades, attendance) VALUES (?, ?)`;
  db.query(sql, [grades, attendance], (err, result) => {
    if (err) throw err;
    res.send('Prediction saved successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
