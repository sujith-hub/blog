const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  // Save to MongoDB or send email (requires additional setup)
  res.status(200).json({ message: 'Message received' });
});

module.exports = router;