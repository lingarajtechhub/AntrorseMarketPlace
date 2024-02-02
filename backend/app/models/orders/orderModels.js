const mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    user_id: { type: ObjectId, ref: "user", required: true },
    shippingInfo: {
        type: String,
        enum: ["home", "work"],
        required: true,
    },
    address_id: {
        type: ObjectId,
        ref: "Address",
        required: true,
      },
    orderItems: [
      {
        product_name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        product: {
          type: ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    totalPrice: { type: Number, required: true, default: 0 },
    totalItems: { type: Number, required: true },
    totalQuantity: { type: Number, required: true },
    paymentInfo: {
      payment_id: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
    },
    paidAt: {
      type: Date,
      required: true,
    },

    orderStatus: {
      type: String,
      default: "pending",
      enum: ["pending", "completed", "canceled"],
    },
    deliveredAt: Date,
    shippedAt: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    deletedAt: { type: Date, default: null },
    isDeleted: { type: Boolean, default: false },
  },
 
  { timestamps: true }
);

module.exports = mongoose.model("Order",orderSchema);