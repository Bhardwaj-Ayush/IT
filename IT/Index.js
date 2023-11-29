const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const PORT = 10000;

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'user_auth',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(bodyParser.urlencoded({ extended: true }));

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Serve signin.html
app.get('/signin', (req, res) => {
  res.sendFile(__dirname + '/signin.html');
});

// Serve signup.html
app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

// Handle SignIn form submission
app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  // Check credentials in the database
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      // Successful sign-in
      res.send('Welcome, ' + username + '!');
    } else {
      res.send('Invalid credentials. Please try again.');
    }
  });
});

// Handle SignUp form submission
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Insert new entry into the database
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], (err, results) => {
    if (err) throw err;

    // Successful sign-up
    res.sendFile(__dirname + '/index.html');
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
