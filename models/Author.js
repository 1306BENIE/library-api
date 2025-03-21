const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birthYear: { type: Number, required: true }
});

const Authors =  mongoose.model('Author', authorSchema);

module.exports = Authors