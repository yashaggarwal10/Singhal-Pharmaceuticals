const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like CSS and JavaScript)
app.use(express.static('public'));

// Route to handle registration
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    console.log(`New registration: Username - ${username}, Email - ${email}, Password - ${password}`);
    // Redirect to a blank page after registration
    res.redirect('/blank.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
