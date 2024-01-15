const express= require("express")
const router= express.Router()
const userController= require("../app/controlllers/userController")
const auth=require("../app/middleware/auth")

router.post("/registration", userController.register)
router.post("/sendOtpForRegistration",userController.sendOtpForRegistration)
router.post("/login", userController.login)
router.put("/updateProfile",auth.authorization, userController.updateProfile)
router.put("/forgetPassword",userController.forgetPassword)
// ===================== this use according to use=============
router.post("/createOTPForForgetPassword",userController.createOTPForForgetPassword)
// ======================================================================
module.exports=router