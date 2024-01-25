const wishlistModel = require("../models/user/userWishListModels")
//const productModel = require("../models/products/productModel")
const response = require("../helper/commonResponse");
const { ErrorCode } = require("../helper/statusCode");
const { ErrorMessage } = require("../helper/message");
const mongoose=require("mongoose")
//  GET Wishlist with Product Details
module.exports = {
  getWishList: async (req, res) => {
    try {
      const user_id = req.params.user_id;
      const wishlist = await wishlistModel.aggregate([
        {
          $match: { user_id: mongoose.Types.ObjectId(user_id) },
        },
        {
          $lookup: {
            from: 'products', // Assuming your product collection is named 'products'
            localField: 'items.product',
            foreignField: '_id',
            as: 'itemDetails',
          },
        },
        {
          $project: {
            user: 1,
            items: {
              $map: {
                input: '$items',
                as: 'item',
                in: {
                  product: '$$item.product',
                  quantity: '$$item.quantity',
                  details: {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: '$itemDetails',
                          as: 'detail',
                          cond: { $eq: ['$$detail._id', '$$item.product'] },
                        },
                      },
                      0,
                    ],
                  },
                },
              },
            },
            created_at: 1,
          },
        },
      ]);
      console.log(wishlist)
      if (!wishlist || wishlist.length === 0) {
        return response.commonErrorResponse(
            res,
            ErrorCode.NOT_FOUND,
            {},
            ErrorMessage.NOT_FOUND)
      }
      res.json(wishlist[0]);
    } catch (error) {
      return response.commonErrorResponse(
            res,
            ErrorCode.INTERNAL_ERROR,
            {},
            error.message)
    }
  },
  // POST Add Item to Wishlist
  creteWishList: async (req, res) => {
    try {
      const user_id = req.params.user_id;
      
      const { product_id, quantity } = req.body;
      
      const wishlist = await wishlistModel.findOne({ user_id: user_id });
    
      if (!wishlist) {
        // Create a new wishlist if it doesn't exist
        const newWishlist = await wishlistModel.create({ user_id: user_id, items: [{ product: product_id, quantity }] });
        console.log(newWishlist)
        return res.json(newWishlist);
      }
      // Check if the product is already in the wishlist
      const existingItem = wishlist.items.find(item => item.product.toString() === product_id);
      if (existingItem) {
        // If it exists, update the quantity
        existingItem.quantity += quantity;
      } else {
        // If not, add a new item to the wishlist
        wishlist.items.push({ product: product_id, quantity });
      }
      await wishlist.save();
      console.log("wishlist:", wishlist);
      res.json(wishlist);
    } catch (error) {
      //console.error(error);
      //res.status(500).json({ msg: error.message });
      return response.commonErrorResponse(
            res,
            ErrorCode.INTERNAL_ERROR,
            {},
            error.message)
    }
 }
}