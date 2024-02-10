const response = require("../helper/commonResponse");
const { SuccessMessage,ErrorMessage } = require("../helper/message");
const { SuccessCode ,ErrorCode} = require("../helper/statusCode");
const cartModel = require("../models/cart/cartModels");
const userModel = require("../models/user/userModel");

module.exports = {
  createCart: async function (req, res) {
    try {
      const data = req.body;
      let {product_id,quantity,sizes,color}=data
    

      const user_id = req.user_id;

      const cart = await cartModel.findOne({ user_id: user_id });
      if (!cart) {
        let addCart = {
          user_id: user_id,
          items: [{ product_id: product_id, quantity: quantity||1,sizes ,color}],
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
          arr[i].quantity =  quantity||1;
          arr[i].sizes=sizes
          arr[i].color=color

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
        $addToSet: { items: { product_id: product_id, quantity: quantity||1,sizes,color } },

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
           {
            $unwind:"$items"
           },
           {
             $project:{
              createdAt:0,
              updatedAt:0,
              __v:0,
              "items._id":0,
              user_id:0,

             }
           },
          {
            $lookup:{
              from:"products",
              localField:"items.product_id",
              foreignField:"_id",
              as:"productDetails"
            }
          },
          {$unwind:"$productDetails"},{
            $project:{
              "productDetails.seller_id":0,
              "productDetails.stocks":0
            }
            
          }
          ,{
            $lookup:{
              from:"productratings",
              localField:"items.product_id",
              foreignField:"product_id",
              as:"productRatings"
            }
          }
           
        ]) 
        return response.commonResponse(res,SuccessCode.SUCCESS, cartData,SuccessMessage.DATA_FOUND)

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
