const express= require("express")
const route= express.Router()
const adminController=require("../app/controlllers/adminController")
route.get("/totalUser",adminController.totalUser )
route.get("/totalSeller",adminController.totalSeller)
module.exports=route