const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/usersDB')
    .then(() => console.log('connect to users db'))
    .catch((error) => console.log(error))
}

module.exports = connectDB