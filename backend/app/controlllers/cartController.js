const response = require("../helper/commonResponse");
const { SuccessMessage } = require("../helper/message");
const { SuccessCode } = require("../helper/statusCode");
const cartModel = require("../models/cart/cartModels");
const userModel = require("../models/user/userModel");

module.exports = {
  createCart: async function (req, res) {
    try {
      const product_id = req.query.product_id;

      const user_id = req.user_id;

      const cart = await cartModel.findOne({ user_id: user_id });
      if (!cart) {
        let addCart = {
          user_id: user_id,
          items: [{ product_id: product_id, quantity: 1 }],
          totalItems: 1,
        };

        const createdCart = await cartModel.create(addCart);
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          createdCart,
          SuccessMessage.CART_SAVED
        );
      }

      let arr = cart.items;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].product_id.toString() == product_id) {
          arr[i].quantity = arr[i].quantity + 1;

          let updatedCart = await cartModel.findOneAndUpdate(
            { user_id: user_id },
            {
              items: arr,

              totalItems: arr.length,
            },
            { new: true }
          );
          return response.commonResponse(
            res,
            SuccessCode.SUCCESS,
            updatedCart,
            SuccessMessage.CART_SAVED
          );
        }
      }

      let newCart = {
        $addToSet: { items: { product_id: product_id, quantity: 1 } },

        totalItems: (cart.totalItems || 0) + 1,
      };
      let updatedCart = await cartModel.findOneAndUpdate(
        { user_id: user_id },
        newCart,
        { new: true }
      );
      return response.commonResponse(
        res,
        SuccessCode.SUCCESS,
        updatedCart,
        SuccessMessage.CART_SAVED
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
  getCartData:async function(req,res){
    try{
        let user_id=req.user_id

        let cartData = await cartModel.aggregate([
           { $match:{user_id:user_id}}
           ,
           {$unwind:items}
           
        ]) 

    }catch(error){
        return response.commonErrorResponse(
            res,
            ErrorCode.INTERNAL_ERROR,
            {},
            error.message
          );
    }
  }
};
