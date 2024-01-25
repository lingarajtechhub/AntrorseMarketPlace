const express= require("express")
const route= express.Router()
const auth=require("../app/middleware/auth")

const productController= require("../app/controlllers/productController")
route.post("/AddProduct",auth.sellerAuth,productController.AddProduct)
route.get("/searchProducts",productController.searchProducts)
route.get("/getProductById",productController.getProductById)
route.get("/getAllProduct",productController.getAllProduct)
route.get("/getProductBySubcategory",productController.getProductBySubcategory)
route.put("/updateProduct",auth.sellerAuth,productController.AddProduct)
// ===========productRating========


// Create a new review and rating
route.post("/review-ratings", productController.addReviewRating);

// Get all reviews and ratings
route.get("/review-ratings", productController.getAllReviewRatings);

// Get a specific review and rating by ID
route.get("/review-ratings/:reviewRating_id", productController.getReviewRatingById);

// Update a review and rating by ID
route.put("/review-ratings/:reviewRating_id", productController.updateReviewRatingById);

// Delete a review and rating by ID
route.delete("/review-ratings/:reviewRating_id", productController.deleteReviewRatingById);



module.exports=route