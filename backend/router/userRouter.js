const express= require("express")
const router= express.Router()
const userController= require("../app/controlllers/userController")

router.post("/registration", userController.register)
router.post("/sendOtpForRegistration",userController.sendOtpForRegistration)
router.post("/login", userController.login)
router.put("/updateProfile",userController.updateProfile)
router.put("/updatePassword",userController.updatePassword)
// ===================== this use according to use=============
router.post("/createOTPForForgetPassword",userController.createOTPForForgetPassword)
// ======================================================================
module.exports=router