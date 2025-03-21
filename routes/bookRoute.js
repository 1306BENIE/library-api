const express = require('express');
const Books = require('../models/book');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const book = new Books(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    const books = await Books.find().populate('author');
    res.json(books);
});

router.get('/:id', async (req, res) => {
  try {
      const book = await Books.findById(req.params.id).populate('author');
      if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
      res.json(book);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});


router.put('/:id', async (req, res) => {
    try {
        const book = await Books.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
        res.json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const book = await Books.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: 'Livre non trouvé' });
        res.json({ message: 'Livre supprimé' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;