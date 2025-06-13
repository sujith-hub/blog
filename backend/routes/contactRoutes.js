const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to save contact form data
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Failed to save message.' });
  }
});

module.exports = router;
