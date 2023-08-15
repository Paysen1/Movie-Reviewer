const express = require('express');
const router = express.Router();
const { reviews } = require('../../models');


// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await reviews.findAll();
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get a specific review by ID
router.get('/:id', async (req, res) => {
  try {
    const reviews = await reviews.findByPk(req.params.id);
    if (!reviews) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create a new review
router.post('/', async (req, res) => {
  try {
    const reviews = await reviews.create(req.body);
    res.status(201).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update a review
router.put('/:id', async (req, res) => {
  try {
    const reviews = await reviews.findByPk(req.params.id);
    if (!reviews) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    await reviews.update(req.body);
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Delete a review
router.delete('/:id', async (req, res) => {
  try {
    const reviews = await reviews.findByPk(req.params.id);
    if (!reviews) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    await reviews.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;