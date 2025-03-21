const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    publishYear: { type: Number, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }
});

const Books = mongoose.model('Book', bookSchema);

module.exports = Books;