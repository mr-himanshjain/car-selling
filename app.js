const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "",
  database: 'mycars',
});

connection.connect((error) => {
    if (error) {
      console.error('Error connecting to database:', error);
    } else {
      console.log('Database connected!');
    }
  });

// Create the Express app
const app = express();

// Use the body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the login page
app.get('/', (req, res,next) => {
    res.sendFile(__dirname + '/login.html');
    console.log(`${req.method} ${req.url}`);
    next();
});


// Handle the form submission
app.post('/login', (req, res) => {
  const Username = req.body.Username;
  const Password = req.body.Password;

  res.send(`Hello ${Username}!`);

  // Insert the user data into the database
  const query = `INSERT INTO user (Username, Password) VALUES ('${Username}', '${Password}')`;
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error inserting user:', error);
      res.status(500).send('Error inserting user');
    } else {
      console.log('User inserted:', results);
      res.status(200).send('User inserted');
    }
  });
});

// Start the server
app.listen(5500, () => {
  console.log('Server started on port 5500');
});
