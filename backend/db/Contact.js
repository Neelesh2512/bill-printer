const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    message:String
});

module.exports = mongoose.model('contact', contactSchema);