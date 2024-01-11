const userModel = require("../models/userModel");
const response = require("../helper/commonResponse");

const { SuccessMessage, ErrorMessage } = require("../helper/message");
const { ErrorCode, SuccessCode } = require("../helper/statusCode");
const validation = require("../helper/validation");
const commonFunction = require("../helper/commonFunction");
const bcrypt= require("bcrypt")

module.exports = {
  register: async function (req, res) {
    try {
      const data = req.body;
      if (!validation.isNonEmptyString(data.user_name)) {
        return response.commonErrorResponse(
          res,
          ErrorCode.BAD_REQUEST,
          {},
          ErrorMessage.NAME_EMPTY
        );
      }
      if (!validation.isValidMobileNumber(data.mobile_number)) {
        return response.commonErrorResponse(
          res,
          ErrorCode.BAD_REQUEST,
          {},
          ErrorMessage.PHONE_EMPTY
        );
      }

      if (!data.email_id) {
        return response.commonErrorResponse(
          res,
          ErrorCode.BAD_REQUEST,
          {},
          ErrorMessage.EMAIL_EMPTY
        );
      }
      let checkedEmailUnique = await userModel.findOne({
        email_id: data.email_id,
      });
      if (checkedEmailUnique) {
        return response.commonErrorResponse(
          res,
          ErrorCode.ALREADY_EXIST,
          {},
          ErrorMessage.ALREADY_EXIST_EMAIL
        );
      }

      let registerData = await userModel.create(data);

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
        err
      );
    }
  },
  sendOtpForRegistration: async function (req, res) {
    try {
      let data = req.body;
      if(!data.mobile_number){
        return response.commonErrorResponse(
          res,
          ErrorCode.BAD_REQUEST,
          {},
          ErrorMessage.PHONE_EMPTY
        )}
        if (!validation.isValidMobileNumber(data.mobile_number)) {
          return response.commonErrorResponse(
            res,
            ErrorCode.BAD_REQUEST,
            {},
            ErrorMessage.PHONE_EMPTY
          );
      }
      let checkNumber = await userModel.findOne({
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
      //  here function for send otp
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
        err.message
      );
    }
  },
  login: async function (req, res) {
    try {
      let data = req.body;
let userData;
      if (data.email_id) {
         userData = await userModel.fidOne({ email_id:email_id });
      }
      if (data.mobile_number) {
         userData = await userModel.fidOne({ mobile_number });
      } else {
        console.log("================================")
        return response.commonErrorResponse(
          res,
          ErrorCode.BAD_REQUEST,
          {},
          ErrorMessage.NOT_FOUND
        );
      }

      if (!userData) {
        return response.commonErrorResponse(
          res,
          ErrorCode.NOT_FOUND,
          {},
          ErrorMessage.USER_NOT_FOUND
        );
      }
      const matchPass = await bcrypt.compare(password, userData.password);

      if (!matchPass) {
        return response.commonErrorResponse(
          res,
          ErrorCode.INVALID_CREDENTIAL,
          {},
          ErrorMessage.INVALID_CREDENTIAL
        );
      }

      let payLoad = {
        user_id: data.userData._id.toString(),
      };
      let token = jwt.sign(payLoad, "Upendra_gupta", {
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
  updateProfile: async function (req, res) {
    try {
      let data = req.body;
      let files = req.files;
console.log(data)
console.log(files)
      if(data && !files){

        return response.commonErrorResponse(res,ErrorCode.BAD_REQUEST ,"", "some data need for update")
      }
      let updateData = {};
      if (data.password) {
        const saltRounds = 10;
        const hash = await bcrypt.hash(data.password, saltRounds);
        updateData.password = hash;
      }
      if ( files?.length > 0) {
        updateData.user_image = files[0].buffer;
      }
      if (data.mobile_number) {
        if (!validation.isValidMobileNumber(data.mobile_number)) {
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
      }
      let updated = await userModel.findOneAndUpdate(
        // { _id: data.user_id },
        {mobile_number:data.mobile_number},
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
  createOTPForForgetPassword: async function (req, res) {
    try {
      let email_id = req.body.email_id;
      let userData = await userModel.findOne({ email_id });
      if (!userData) {
        return response.commonErrorResponse(
          res,
          ErrorCode.BAD_REQUEST,
          {},
          ErrorMessage.USER_NOT_FOUND
        );

        let OTP = commonFunction.generateOTP();

        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          OTP,
          SuccessMessage.OTP_SEND
        );
      }
    } catch (err) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        err
      );
    }
  },
  updatePassword: async function (req, res) {
    try {
      let data = req.body.email_id;
      let password;
      if (data.password) {
        const saltRounds = 10;
        const hash = await bcrypt.hash(data.password, saltRounds);
        password = hash;
      }
      let updatePassword = await userModel.findOneAndUpdate(
        { email_id: data.email_id },
        { $set: { password: password } },
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
    } catch (err) {
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        err
      );
    }
  },
};
