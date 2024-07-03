const mongoose = require('mongoose');

const userSchems = new mongoose.Schema({
    id: Number,
    city: String,
    country: String
},{
   versionKey: false 
})

const User = mongoose.model('user',userSchems,'users')

module.exports = User