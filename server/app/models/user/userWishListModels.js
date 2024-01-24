const mongoose = require('mongoose');
// Define Wishlist Schema
const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
 
},{timestamps:true});
// Create Wishlist model
module.exports = mongoose.model('Wishlist', wishlistSchema);