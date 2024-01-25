const sellerModel= require("../models/seller/sellerModels")
const response = require("../helper/commonResponse");
const jwt= require("jsonwebtoken")
const { SuccessMessage, ErrorMessage } = require("../helper/message");
const { ErrorCode, SuccessCode } = require("../helper/statusCode");
const validation = require("../helper/validation");
const commonFunction = require("../helper/commonFunction");

module.exports={
    
    sellerRegistration: async function (req, res) {
        try {
          const data = req.body;

          if(!data.GST||! validation.gstValidation(data.GST)){
            return response.commonErrorResponse(
                res,
                ErrorCode.BAD_REQUEST,
                {},
                ErrorMessage.INVALID_GST
              )
          }
          if (!validation.isNonEmptyString(data.fullName)) {
            return response.commonErrorResponse(
              res,
              ErrorCode.BAD_REQUEST,
              {},
              ErrorMessage.NAME_EMPTY
            );
          }
          if (!data.mobile_number||!validation.isValidMobileNumber(data.mobile_number)) {
            return response.commonErrorResponse(
              res,
              ErrorCode.BAD_REQUEST,
              {},
              ErrorMessage.PHONE_EMPTY
            );
          }
    
          if (data.email_id && !validation.isValidEmail(data.email_id)) {
            return response.commonErrorResponse(
              res,
              ErrorCode.BAD_REQUEST,
              {},
              ErrorMessage.INVALID_EMAIL
            );
          }
          let checkedMobileNumberUnique = await sellerModel.findOne({
            mobile_number: data.mobile_number,
          });
          if (checkedMobileNumberUnique) {
            return response.commonErrorResponse(
              res,
              ErrorCode.ALREADY_EXIST,
              {},
              ErrorMessage.MOBILE_EXIST
            );
          }
    
          let registerData = await sellerModel.create(data);
    
          if (registerData) {
            return response.commonResponse(
              res,
              SuccessCode.SUCCESSFULLY_CREATED,
              registerData,
              SuccessMessage.ACCOUNT_CREATION
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
      sendOtpForRegistration: async function (req, res) {
        try {
          let data = req.body;
          
            if ( !data.mobile_number||!validation.isValidMobileNumber(data.mobile_number)) {
              return response.commonErrorResponse(
                res,
                ErrorCode.BAD_REQUEST,
                {},
                ErrorMessage.PHONE_EMPTY
              );
          }
          let checkNumber = await sellerModel.findOne({
            mobile_number: data.mobile_number,
          });
          if (checkNumber) {
            return response.commonErrorResponse(
              res,
              ErrorCode.ALREADY_EXIST,
              {},
              ErrorMessage.MOBILE_EXIST
            );
          }
          // this function for 6 digit otp create
          let otp = commonFunction.generateOTP();
          console.log(otp);
          //  here function for send otp on mobile number
          
          return response.commonResponse(
            res,
            SuccessCode.SUCCESSFULLY_CREATED,
            otp,
            SuccessMessage.OTP_SEND
          );
        } catch (error) {
          return response.commonErrorResponse(
            res,
            ErrorCode.INTERNAL_ERROR,
            {},
            error.message
          );
        }
      }
      ,
      sellerLogin: async function (req, res) {
        try {
          let data = req.body;
          let sellerData;
          if (!data.mobile_number||!validation.isValidMobileNumber(data.mobile_number)) {
            return response.commonErrorResponse(
              res,
              ErrorCode.BAD_REQUEST,
              {},
              ErrorMessage.PHONE_EMPTY
            );
          }
          if (data.mobile_number) {
             sellerData = await sellerModel.findOne({ mobile_number:data.mobile_number });
          } else {
          
            return response.commonErrorResponse(
              res,
              ErrorCode.BAD_REQUEST,
              {},
              ErrorMessage.NOT_FOUND
            );
          }
    
          if (!sellerData) {
            return response.commonErrorResponse(
              res,
              ErrorCode.NOT_FOUND,
              {},
              ErrorMessage.USER_NOT_FOUND
            );
          }
          const matchPass = await bcrypt.compare(data.password, sellerData.password);
    
          if (!matchPass) {
            return response.commonErrorResponse(
              res,
              ErrorCode.INVALID_CREDENTIAL,
              {},
              ErrorMessage.INVALID_CREDENTIAL
            );
          }
    
          let payLoad = {
            seller_id: sellerData._id.toString(),
          };
          let token = jwt.sign(payLoad, process.env.SECRET_KEY, {
            expiresIn: "72h",
          });
          if (token) {
            return response.commonResponse(
              res,
              SuccessCode.SUCCESS,
              token,
              SuccessMessage.LOGIN_SUCCESS
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
      createOTPForForgetPassword: async function (req, res) {
        try {
          let mobile_number = req.body.mobile_number;
          if (!mobile_number||!validation.isValidMobileNumber(mobile_number)) {
            return response.commonErrorResponse(
              res,
              ErrorCode.BAD_REQUEST,
              {},
              ErrorMessage.PHONE_EMPTY
            );
          }
          
          let userData = await sellerModel.findOne({ mobile_number:mobile_number });
          if (!userData) {
            return response.commonErrorResponse(
              res,
              ErrorCode.BAD_REQUEST,
              {},
              ErrorMessage.USER_NOT_FOUND
            );
            }
            let OTP = commonFunction.generateOTP();
            console.log(OTP)
    // here function for send  the otp on number
            return response.commonResponse(
              res,
              SuccessCode.SUCCESS,
              OTP,
              SuccessMessage.OTP_SEND
            );
          
        } catch (err) {
          return response.commonErrorResponse(
            res,
            ErrorCode.INTERNAL_ERROR,
            {},
            err
          );
        }
      },
      forgetPassword: async function (req, res) {
        try {
          let data = req.body;
          console.log(data)
          if (!data.mobile_number||!validation.isValidMobileNumber(data.mobile_number)) {
            return response.commonErrorResponse(
              res,
              ErrorCode.BAD_REQUEST,
              {},
              ErrorMessage.PHONE_EMPTY
            );
          }
          if (data.password) {
            const saltRounds = 10;
            const hash = await bcrypt.hash(data.password, saltRounds);
            data.password = hash;
          }
          let updatePassword = await sellerModel.findOneAndUpdate(
            { mobile_number: data.mobile_number },
            { $set: { password: data.password } },
            { new: true }
          );
          if (updatePassword) {
            return response.commonResponse(
              res,
              SuccessCode.SUCCESS,
              updatePassword.password,
              SuccessMessage.UPDATE_SUCCESS
            );
          }
          else {
            return response.commonErrorResponse(
              res,
              ErrorCode.NOT_FOUND,
              {},
              ErrorMessage.USER_NOT_FOUND
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
      updateProfile: async function (req, res) {
        try {
          let data = req.body;
          let files = req.files;
    
          if(!data && !files){
    
            return response.commonErrorResponse(res,ErrorCode.BAD_REQUEST ,"", "some data need for update")
          }
          let updateData = {};
          if (data.password) {
            const saltRounds = 10;
            const hash = await bcrypt.hash(data.password, saltRounds);
            updateData.password = hash;
          }
        
          
            if ( data.mobile_number&& !validation.isValidMobileNumber(data.mobile_number)) {
              return response.commonErrorResponse(
                res,
                ErrorCode.BAD_REQUEST,
                {},
                ErrorMessage.PHONE_EMPTY
              );
            }
             else {
              updateData.mobile_number = data.mobile_number;
            }
          
          let updated = await sellerModel.findOneAndUpdate(
            { _id: req.seller_id },
           
            { $set: updateData },
            { new: true }
          );
    
          if (updated) {
            return response.commonResponse(
              res,
              SuccessCode.SUCCESS,
              updated,
              SuccessMessage.PROFILE_DETAILS
            );
          } else {
            return response.commonErrorResponse(
              res,
              ErrorCode.WENT_WRONG,
              {},
              ErrorMessage.SOMETHING_WRONG
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

}