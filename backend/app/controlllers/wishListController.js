const wishlistModel = require("../models/user/userWishListModels");
//const productModel = require("../models/products/productModel")
const response = require("../helper/commonResponse");
const { ErrorCode, SuccessCode } = require("../helper/statusCode");
const { ErrorMessage, SuccessMessage } = require("../helper/message");
const mongoose = require("mongoose");
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
            from: "products", // Assuming your product collection is named 'products'
            localField: "items.product",
            foreignField: "_id",
            as: "itemDetails",
          },
        },
        {
          $project: {
            user: 1,
            items: {
              $map: {
                input: "$items",
                as: "item",
                in: {
                  user_id: "$user_id",
                  product_details: {
                    $let: {
                      vars: {
                        product: {
                          $arrayElemAt: [
                            {
                              $filter: {
                                input: "$itemDetails",
                                as: "detail",
                                cond: {
                                  $eq: ["$$detail._id", "$$item.product"],
                                },
                              },
                            },
                            0,
                          ],
                        },
                      },
                      in: {
                        _id: "$$product._id",
                        description: "$$product.description",
                        brand: "$$product.brand",
                        color: "$$product.color",
                        sizes: "$$product.sizes",
                        material: "$$product.material",
                        style: "$$product.style",
                        price: "$$product.price",
                        oldPrice: "$$product.oldPrice",
                        currency: "$$product.currency",
                        category: "$$product.category",
                        subCategory: "$$product.subCategory",
                        product_name: "$$product.product_name",
                        updatedAt: "$$product.updatedAt",
                      },
                    },
                  },
                },
              },
            },
            created_at: 1,
          },
        },
      ]);
      if (!wishlist || wishlist.length === 0) {
        return response.commonErrorResponse(
          res,
          ErrorCode.NOT_FOUND,
          {},
          ErrorMessage.NOT_FOUND
        );
      }
      return response.commonResponse(
        res,
        SuccessCode.SUCCESS,
        wishlist,
        SuccessMessage.DATA_FOUND
      );
    } catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        error.message
      );
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
        const newWishlist = await wishlistModel.create({
          user_id: user_id,
          items: [{ product: product_id, quantity }],
        });
        console.log(newWishlist);
        return response.commonResponse(
          res,
          SuccessCode.SUCCESSFULLY_CREATED,
          wishlist,
          SuccessMessage.newWishlist
        );
      }
      // Check if the product is already in the wishlist
      const existingItem = wishlist.items.find(
        (item) => item.product.toString() === product_id
      );
      if (existingItem) {
        // If it exists, update the quantity
        existingItem.quantity += quantity;
      } else {
        // If not, add a new item to the wishlist
        wishlist.items.push({ product: product_id, quantity });
      }
      await wishlist.save();
      //console.log("wishlist:", wishlist);
      return response.commonResponse(
        res,
        SuccessCode.SUCCESSFULLY_CREATED,
        wishlist,
        SuccessMessage.DATA_SAVED
      );
    } catch (error) {
      //console.error(error);
      //res.status(500).json({ msg: error.message });
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        error.message
      );
    }
  },
};
