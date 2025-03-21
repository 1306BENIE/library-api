const express = require('express');
const Author = require('../models/author');
const router = express.Router();

// Ajouter un nouvel auteur
router.post('/', async (req, res) => {
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json(author);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Récupérer tous les auteurs
router.get('/', async (req, res) => {
    const authors = await Author.find();
    res.json(authors);
});

// Récupérer un seul auteur par son ID
router.get('/:id', async (req, res) => {
  try {
      const author = await Author.findById(req.params.id);
      if (!author) return res.status(404).json({ message: 'Auteur non trouvé' });
      res.json(author);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});


// Mettre à jour un auteur
router.put('/:id', async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!author) return res.status(404).json({ message: 'Auteur non trouvé' });
        res.json(author);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Supprimer un auteur
router.delete('/:id', async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) return res.status(404).json({ message: 'Auteur non trouvé' });
        res.json({ message: 'Auteur supprimé' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;