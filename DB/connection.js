const mongoose = require('mongoose');
const URI = 'mongodb+srv://testmongodb:testmongodb1122@cluster0.zvejkgb.mongodb.net/test';

const connectDB = async() => {
    await mongoose.connect(URI);
    console.log('Database Connected!!!')
}

module.exports = connectDB;
