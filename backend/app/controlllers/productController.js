const productModel = require("../models/products/productModel");

// const reviewRatingModel = require("../models/reviews/reviewRatingModel");
const reviewRatingModel=require("../models/products/productRatingModel")
const response = require("../helper/commonResponse");

const { SuccessMessage, ErrorMessage } = require("../helper/message");
const { ErrorCode, SuccessCode } = require("../helper/statusCode");
const validation = require("../helper/validation");
const commonFunction = require("../helper/commonFunction");
const { default: mongoose } = require("mongoose");

module.exports = {
  AddProduct: async function (req, res) {
    try {
      let data = req.body;
      let files=req.files
     

      let seller_id = req.seller_id;
      data.seller_id = seller_id;

      let addedProducts = await productModel.create(data);
      if (addedProducts) {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESSFULLY_CREATED,
          addedProducts
        );
      }
    } catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        error.message
      );
    }
  },
  getAllProduct: async function (req, res) {
    try {
      let allProducts = await productModel.find();
      if (allProducts?.length > 0) {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          allProducts,
          SuccessMessage.DATA_FOUND
        );
      } else {
        return response.commonErrorResponse(
          res,
          ErrorCode.BAD_REQUEST,
          [],
          ErrorMessage
        );
      }
    } catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        error.message,
        ErrorMessage.INTERNAL_ERROR
      );
    }
  },
  getProductById: async function (req, res) {
    try {
      let product_id = req.params.product_id;
      let product = await productModel.findById(product_id);
      if (product) {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          product,
          SuccessMessage.DATA_FOUND
        );
      } else {
        return response.commonErrorResponse(
          res,
          ErrorCode.NOT_FOUND,
          "",
          ErrorMessage.NOT_FOUND
        );
      }
    } catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        error.message
      );
    }
  },
  searchProducts: async function (req, res) {
    try {
      let data = req.query;

      const condition = {};
      // const sort = {};
      if (data.search && data.search != "") {
        data.search = data.search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        condition.$or = [
          {
            product_name: new RegExp(data.search, "i"),
          },
          {
            brand: new RegExp(data.search, "i"),
          },
          {
            category: new RegExp(data.search, "i"),
          },
          
        ];
      }
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 12;
      const skip = (page - 1) * limit;
      let allProduct = await productModel.aggregate([
        {
          $match: condition,
        },
        {
          $skip: skip,
        },
        {
          $limit: limit,
        },
      ]);
      return response.commonResponse(
        res,
        SuccessCode.SUCCESS,
        allProduct,
        SuccessMessage.DATA_FOUND
      );
    } catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        [],
        error.message,
        ErrorMessage.INTERNAL_ERROR
      );
    }
  },
  getProductBySubcategory: async function(req, res) {
    try {
      let data = req.query;
      let filter = {};
  
      if (data.category && data.subCategory) {
        // Use $and when both category and subcategory are present
        filter.$and = [{ category: data.category }, { subCategory: data.subCategory }];
      } else if (data.category || data.subCategory) {
        // Use $or when either category or subcategory is present
        filter.$or = [];
  
        if (data.category) {
          filter.$or.push({ category: data.category });
        }
  
        if (data.subCategory) {
          filter.$or.push({ subCategory: data.subCategory });
        }
      }
  
      let products = await productModel.find(filter);
  
      return response.commonResponse(
        res,
        SuccessCode.SUCCESS,
        products,
        SuccessMessage.DATA_FOUND
      );
    } catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        [],
        error.message,
        ErrorMessage.INTERNAL_ERROR
      );
    }
  }
  ,
  updateProduct:async function(req,res){
    try{

      let data= req.body
      let product_id=req.params.product_id
      let files=req.files
      // here image validation pending

let updatedProduct= await productModel.findByIdAndUpdate(product_id,{$set:data},{new:true,upsert: true})
      return response.commonResponse(
        res,
        SuccessCode.SUCCESS,
        updatedProduct,
        SuccessMessage.DATA_FOUND
      );
  }catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        [],
        error.message,
        ErrorMessage.INTERNAL_ERROR
      );
    }
  }
,
// ================productRating==================



  // Create a new review and rating
  addReviewRating: async function (req, res) {
    try {
      let data = req.body;
      let user_id = req.user_id; // Assuming user_id is obtained from authentication middleware
     

      let addedReviewRating = await reviewRatingModel.create(data);
      if (addedReviewRating) {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESSFULLY_CREATED,
          addedReviewRating,
          SuccessMessage.DATA_SAVED
        );
      }
    } catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        error.message
      );
    }
  },

  // Get all reviews and ratings
  getAllReviewRatings: async function (req, res) {
    try {
      let allReviewRatings = await reviewRatingModel.find();
      if (allReviewRatings?.length > 0) {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          allReviewRatings,
          SuccessMessage.DATA_FOUND
        );
      } else {
        return response.commonErrorResponse(
          res,
          ErrorCode.BAD_REQUEST,
          [],
          ErrorMessage.NOT_FOUND
        );
      }
    } catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        ErrorMessage.INTERNAL_ERROR
      );
    }
  },

  // Get a specific review and rating by ID
  getReviewRatingById: async function (req, res) {
    try {
      let reviewRating_id = req.params.reviewRating_id;
      let reviewRating = await reviewRatingModel.findById(reviewRating_id);
      if (reviewRating) {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          reviewRating,
          SuccessMessage.DATA_FOUND
        );
      } else {
        return response.commonErrorResponse(
          res,
          ErrorCode.NOT_FOUND,
          {},
          ErrorMessage.NOT_FOUND
        );
      }
    } catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        error.message
      );
    }
  },

  // Update a review and rating by ID
  updateReviewRatingById: async function (req, res) {
    try {
      let reviewRating_id = req.params.reviewRating_id;
      let updatedReviewRating = await reviewRatingModel.findByIdAndUpdate(
        reviewRating_id,
        req.body,
        { new: true }
      );
      if (updatedReviewRating) {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          updatedReviewRating,
          SuccessMessage.SUCCESSFULLY_UPDATED
        );
      } else {
        return response.commonErrorResponse(
          res,
          ErrorCode.NOT_FOUND,
          {},
          ErrorMessage.NOT_FOUND
        );
      }
    } catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        error.message
      );
    }
  },

  // Delete a review and rating by ID
  deleteReviewRatingById: async function (req, res) {
    try {
      let reviewRating_id = req.params.reviewRating_id;
      let deletedReviewRating = await reviewRatingModel.findByIdAndDelete(
        reviewRating_id
      );
      if (deletedReviewRating) {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          deletedReviewRating,
          SuccessMessage.SUCCESSFULLY_DELETED
        );
      } else {
        return response.commonErrorResponse(
          res,
          ErrorCode.NOT_FOUND,
          {},
          ErrorMessage.NOT_FOUND
        );
      }
    } catch (error) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        error.message
      );
    }
  },
};
