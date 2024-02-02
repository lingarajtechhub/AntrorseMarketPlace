const path = require('path');
const multer = require('multer');
const express = require('express');
const mongoose = require('mongoose');
// const Image = require('./models/Image'); // Assuming your model is in a 'models' directory

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage: storage });

// Upload multiple images
router.post('/upload', upload.array('images', 5), (req, res) => {
    try {
      const imageUrls = req.files.map(file => `/uploads/${file.filename}`);
  
      // Return the image URLs in the response
      res.json({ imageUrls });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Get image by URL
router.get('/image/:url', (req, res) => {
  const imageUrl = `/uploads/${req.params.url}`;
  res.sendFile(path.join(__dirname, imageUrl));
});

module.exports = router;
