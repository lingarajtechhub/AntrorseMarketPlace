const userModel = require("../models/user/userModel");
const sellerModel = require("../models/seller/sellerModels");
const productModel = require("../models/products/productModel");
const response = require("../helper/commonResponse");
const { SuccessMessage, ErrorMessage } = require("../helper/message");
const { ErrorCode, SuccessCode } = require("../helper/statusCode");
const commonFunction = require("../helper/commonFunction");
const orderModels = require("../models/orders/orderModels");

module.exports = {
  totalUser: async function (req, res) {
    try {
      let totalUser = await userModel.find();
      if (totalUser.length == 0) {
        totalUser = await userModel.find();
        if (totalUser.length == 0) {
          return response.commonErrorResponse(
            res,
            ErrorCode.NOT_FOUND,
            [],
            ErrorMessage.NOT_FOUND
          );
        }
      } else {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          totalUser,
          SuccessMessage.DATA_FOUND
        );
      }
    } catch (err) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        err.message
      );
    }
  },
  totalSeller: async function (req, res) {
    try {
      let totalSeller = await sellerModel.find();
      if (totalSeller.length == 0) {
        totalSeller = await sellerModel.find();
        if (totalSeller.length == 0) {
          return response.commonErrorResponse(
            res,
            ErrorCode.NOT_FOUND,
            [],
            ErrorMessage.NOT_FOUND
          );
        }
      } else {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          totalSeller,
          SuccessMessage.DATA_FOUND
        );
      }
    } catch (err) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        err.message
      );
    }
  },
  totalProduct: async function (req, res) {
    try {
      let totalProduct = await productModel.find();
      if (totalProduct.length == 0) {
        totalProduct = await productModel.find();
        if (totalProduct.length == 0) {
          return response.commonErrorResponse(
            res,
            ErrorCode.NOT_FOUND,
            [],
            ErrorMessage.NOT_FOUND
          );
        }
      } else {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          totalProduct,
          SuccessMessage.DATA_FOUND
        );
      }
    } catch (err) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        err.message
      );
    }
  },
  // Total sales worth
  totalSalesWorth: async function (req, res) {
    try {
      const totalSalesWorth = await orderModel.aggregate([
        {
          $match: {
            orderStatus: "completed",
          },
        },
        {
          $group: {
            _id: null, // grouping all documents together
            totalSales: { $sum: "$totalPrice" }, // calculating the sum of totalPrice field
          },
        },
        {
          $project: {
            _id: 0, // excluding the _id field from the result
            totalSales: 1, // including only the totalSales field in the result
          },
        },
      ]);
    } catch (err) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        err.message
      );
    }
  },
  
  //  this api for single seller==== total sale worth
  totalSalesWorthOfSeller: async function () {
    try {
      let seller_id = req.seller_id;
      let totalSale= await orderModels.aggregate([
        {
$unwind:"$orderItems"
        },
        {$lookup:{
          from:"products",
          localField:"orderItems.product_id",
          foreignField:"_id",
          as:productDetails
        }}
        ,{
          $unwind:"$productDetails"

          
        },
        {
          $match:{
            "productDetails.seller_id": seller_id
          }
        },
        {
          $addFields:{
            totalPrice:{$sum:"$orderItems.price"}
          }
        }
        
      ])


    } catch (err) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        err.message
      );
    }
  },
  //   this Api for seller
  totalProductOfSingleSeller: async function (req, res) {
    try {
      let seller_id = req.seller_id;

      let totalProduct = await productModel.find({ seller_id });
      if (totalProduct.length == 0) {
        totalProduct = await productModel.find({ seller_id });
        if (totalProduct.length == 0) {
          return response.commonErrorResponse(
            res,
            ErrorCode.NOT_FOUND,
            [],
            ErrorMessage.NOT_FOUND
          );
        }
      } else {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          totalProduct,
          SuccessMessage.DATA_FOUND
        );
      }
    } catch (err) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        err.message
      );
    }
  },
};
