const mongoose = require('mongoose');
const URI = MRI;

const connectDB = async() => {
    await mongoose.connect(URI);
    console.log('Database Connected!!!')
}

module.exports = connectDB;
