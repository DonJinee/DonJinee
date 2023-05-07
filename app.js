// Import express (Must be done everytime)
const express = require('express');
// Creating an instance of express
const app = express();
// Create port
const Port = process.env.Port || 3000;
// Import mongoose to connect DB
const mongoose = require('mongoose');
// Import dotenv to hide the .env file where the MRI details, which are sensitive
// and must never be pushed to github, will be stored
const dotenve = require('dotenv');
dotenve.config();
// Import post routes from the routes folder
const postsRoutes = require('./route/posts')
// Add body-parser package
const bodyParser = require('body-parser')
// Add cors package
const cors = require('cors');

// Create routes to go to the root file
app.get('/', (req, res) => {
    res.send('<h1>We are on the Home Page!</h1>')
})

app.use(cors()); 
app.use(bodyParser.json());

// Middleware to go to the post routes anytime posts is called
app.use('/posts', postsRoutes)


// Connect to database
mongoose.connect(process.env.MONGODB_URI,
    console.log('DB connected!!!')
);

// Listen for connection
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});