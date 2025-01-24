const mongoose = require('mongoose');

const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("database connected successfully")
    } catch (error) {
        console.log("error in database connection");
    }
}

module.exports = connectDB;
