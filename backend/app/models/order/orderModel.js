// const mongoose = require("mongoose");
// let ObjectId = mongoose.Schema.Types.ObjectId;

// const orderSchema = new mongoose.Schema({
//   user_id: { type: ObjectId, ref: "user", required: true },
//   shippingInfo: {
//     type: {
//       type: String,
//       enum: ["home", "work"],
//       required: true,
//     },
//     address_id: {
//       type: ObjectId,
//       ref: "Address",
//       required: true,
//     },
//   },
//   orderItems: [
//     {
//       product_id: {
//         type: ObjectId,
//         ref: "Product",
//         required: true,
//       },
//     }
//   ],
//   paymentInfo: {
//     id: {
//       type: String,
//       required: true,
//     },
//     status: {
//       type: String,
//       required: true,
//     },
//   },
//   paidAt: {
//     type: Date,
//     required: true,
//     default: Date.now,
//   },

//   orderStatus: {
//     type: String,
//     default: "Processing",
//   },
//   totalPrice: {
//     type: Number,
//     required: true,
//     default: 0,
//   },
//   deliveredAt: Date,
//   shippedAt: Date,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// },{ timestamps: true});

// module.exports = mongoose.model("Order", orderSchema);