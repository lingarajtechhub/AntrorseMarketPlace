require("dotenv").config()
const userModel = require("../models/user/userModel");
// const sellerModels= require("../models/")
const jwt = require("jsonwebtoken");
const response = require("../helper/commonResponse");
const { ErrorCode } = require("../helper/statusCode");
const { ErrorMessage } = require("../helper/message");
const { default: mongoose } = require("mongoose");

module.exports = {
  authorization: (req, res, next) => {
    try {
      jwt.verify(
        req.headers.token,
        process.env.SECRET_KEY,
        (err, result) => {
          if (err) {
            return response.commonErrorResponse(
              res,
              ErrorCode.INTERNAL_ERROR,
              err,
              ErrorMessage.INTERNAL_ERROR
            );
          } else {
            userModel.findOne({ _id:mongoose.Types.ObjectId(result.user_id) }, (userErr, userResult) => {
              if (userErr) {
                return response.commonErrorResponse(
                  res,
                  ErrorCode.INTERNAL_ERROR,
                  userErr,
                  ErrorMessage.INTERNAL_ERROR
                );
              } else if (!userResult) {
                return response.commonErrorResponse(
                  res,
                  ErrorCode.NOT_FOUND,
                  {},
                  ErrorMessage.NOT_FOUND
                );
              } else {
                req.user_id = userResult._id;
                
                next();
              }
            });
          }
        }
      );
    } catch (error) {
      console.log(error);
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        err.ErrorMessage
      );
    }
  },
  // sellerAuth: (req, res, next) => {
  //   try {
  //     jwt.verify(
  //       req.headers.token,
  //       process.env.SECRET_KEY,
  //       (err, result) => {
  //         if (err) {
  //           return response.commonErrorResponse(
  //             res,
  //             ErrorCode.INTERNAL_ERROR,
  //             err,
  //             ErrorMessage.INTERNAL_ERROR
  //           );
  //         } else {
  //           sellerModels.findOne({ _id:mongoose.Types.ObjectId(result.seller_id) }, (sellErr, sellerResult) => {
  //             if (sellErr) {
  //               return response.commonErrorResponse(
  //                 res,
  //                 ErrorCode.INTERNAL_ERROR,
  //                 sellErr,
  //                 ErrorMessage.INTERNAL_ERROR
  //               );
  //             } else if (!sellerResult) {
  //               return response.commonErrorResponse(
  //                 res,
  //                 ErrorCode.NOT_FOUND,
  //                 {},
  //                 ErrorMessage.NOT_FOUND
  //               );
  //             } else {
  //               req.seller_id = sellerResult._id;
                
  //               next();
  //             }
  //           });
  //         }
  //       }
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     return response.commonErrorResponse(
  //       res,
  //       ErrorCode.INTERNAL_ERROR,
  //       {},
  //       err.ErrorMessage
  //     );
  //   }
  // },
};
