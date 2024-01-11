const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const response = require("../helper/commonResponse");
const { ErrorCode } = require("../helper/statusCode");
const { ErrorMessage } = require("../helper/message");

module.exports = {
  verifyToken: (req, res, next) => {
    try {
      jwt.verify(
        req.headers.token,
        "Upendra_gupta",
        (err, result) => {
          if (err) {
            return response.commonErrorResponse(
              res,
              ErrorCode.INTERNAL_ERROR,
              err,
              ErrorMessage.INTERNAL_ERROR
            );
          } else {
            userModel.findOne({ _id: result._id }, (userErr, userResult) => {
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
                console.log(userResult)
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
        err
      );
    }
  },
};
