const express = require('express');
const connectDB = require('./DB/connection');

const app = express();

connectDB();

// app.use('/api/userModel', require('./API/user'))
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log(`Server running on port ${Port}`));
