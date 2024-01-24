const express= require("express")
const router= express.Router()
const userController= require("../app/controlllers/userController")
const wishlistController= require("../app/controlllers/wishListController")
const auth=require("../app/middleware/auth")

router.post("/registration", userController.register)
router.post("/sendOtpForRegistration",userController.sendOtpForRegistration)
router.post("/login", userController.login)
router.put("/updateProfile",auth.authorization, userController.updateProfile)
router.put("/forgetPassword",userController.forgetPassword)
// ===================== this use according to use=============
router.post("/createOTPForForgetPassword",userController.createOTPForForgetPassword)
// ======================================================================
// ================wishList=============
router.post("/creteWishList", wishlistController.creteWishList)
router.get("/getWishList",wishlistController.getWishList)
// ==============
module.exports=router