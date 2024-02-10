const express = require("express");
const router = express.Router();
const { authorization } = require("../app/middleware/auth")
const {newOrder,  getSingleOrderDetails, myOrders,orderHistory} = require("../app/controlllers/orderController");

router.post("/newOrder", authorization, newOrder);
router.get("/:id", authorization, getSingleOrderDetails);
router.get("/myOrders",  myOrders)

// router.route('/admin/').get(, authorizeRoles("admin"), getAllOrders);
// router.route('/admin/order/:id').put( authorizeRoles("admin"), updateOrder)
    // .delete( authorizeRoles("admin"), deleteOrder);
    router.get("/orderHistory",authorization,orderHistory)

module.exports = router;