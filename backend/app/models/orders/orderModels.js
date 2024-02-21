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
        // image: {
        //   type: String,
        //   // required: true,
        // },
          sizes: {
            XS: {
                type: Number
            },
            S: {
                type: Number
            },
            M: {
                type: Number
            },
            L: {
                type: Number
            },
            XL: {
                type: Number
            }
        
        },
        color:{
          type:String
      },

        product_id: {
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
      transaction_id: {
        type: String,
        required: true
      },
      payment_amount: {
        type: Number,
        // required: true
      },
      transaction_status: {
        type: String,
        enum: ["paid", "unpaid", "pending"],
        default: "unpaid",
        required: true
      },
      payment_details: {
        UPI_id: {
          type: String
        },
        card_number: {
          type: String
        },
        card_expiration: {
          type: String
        }
      },
      payment_mode: {
        type: String,
        enum: ["COD", "creditCard", "debitCard", "UPI"],
        default:"cash",
        required: true
      }
    }
,    
    paidAt: {
      type: Date,
      
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
    orderId:{
      type:String
    },
    order_processing:{
      type:Boolean,
      default:false
    },
    shipped:{
      type:Boolean,
      default:false
    },
    inTransit:{
      type:Boolean,
      default:false
    },
    outForDelivery:{
      type:Boolean,
      default:false
    },
    delivered:{
      type:Boolean,
      default:false

    },
    refunded:{
      type:Boolean,
      default:false
    },
    channel_id:{
      type:String
    },
    
    pickup_location:{
      type:String,
      require:true
    }
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order",orderSchema);