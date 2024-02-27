// const Order = require("../models/order/orderModel");
const Product = require("../models/products/productModel");
const cartModels = require("../models/cart/cartModels");
const productModel = require("../models/products/productModel");
const addressModel = require("../models/user/userAddressModel");
const response = require("../helper/commonResponse");
const { ErrorCode, SuccessCode } = require("../helper/statusCode");
const { SuccessMessage, ErrorMessage } = require("../helper/message");
// const orderModel = require("../models/orders/orderModel");
const orderModel = require("../models/orders/orderModels");
// const sendEmail = require("../helper/sendEmail");

//  exports.newOrder= async (req, res) => {
//     try {
//       const { user_id, shippingInfo, orderItems, paymentInfo, totalPrice } =
//         req.body;

//       const orderExist = await Order.findOne({ paymentInfo });

//       if (orderExist) {
//         return response.commonErrorResponse(
//           res,
//           ErrorCode.ALREADY_EXIST,
//           {},
//           ErrorMessage.ALREADY_EXIST_ORDER
//         );
//       }

//       // Check if user is authorized
//     //   if (user_id != req.user_id) {
//     //     return response.commonErrorResponse(
//     //       res,
//     //       ErrorCode.UNAUTHORIZED,
//     //       {},
//     //       ErrorMessage.UNAUTHORIZED
//     //     );
//     //   }

//       const createdOrder = await Order.create({
//         shippingInfo,
//         orderItems,
//         paymentInfo,
//         totalPrice,
//         paidAt: Date.now(),
//         user_id: req.user_id,
//       });
//       console.log(createdOrder);

//       if (createdOrder) {
//         return response.commonResponse(
//           res,
//           SuccessCode.SUCCESSFULLY_CREATED,
//           createdOrder,
//           SuccessMessage.ORDER_CREATE_SUCCESS
//         );
//       }
//     } catch (error) {
//       console.log(error);

//       return response.commonErrorResponse(
//         res,
//         ErrorCode.INTERNAL_ERROR,
//         {},
//         error.message
//       );
//     }
//   },
// ========
exports.newOrder = async function (req, res) {
  try {
    let user_id = req.user_id;
    let data = req.body;
    let {
      address_id,
      shippingInfo,
      quantity,
      product_id,
      paymentInfo,
      deliveredAt,
      shippedAt,
      sizes
    } = data;

    paymentInfo = JSON.parse(paymentInfo);
    if (data.cart_id) {
      let cart_items = await cartModels.findById(data.cart_id);

      if (!cart_items) {
        return response.commonResponse(
          res,
          ErrorCode.NOT_FOUND,
          {},
          ErrorMessage.NOT_FOUND
        );
      }
      let productIdes = [];

      for (let i = 0; i < cart_items.items.length; i++) {
        productIdes.push(cart_items.items[i].product_id);
      }

      let products = await productModel
        .find({ _id: { $in: productIdes } })
        .toArray();
      let orderItems = [];

      for (let i = 0; i < products.length; i++) {
        let orderItem = {
          product_name: products[i].product_name,
          price: products[i]?.price,
          quantity: cart_items.filter(
            (data) => data.product_id == products[i]._id
          ).quantity[0],
          product: products[i]._id,
        };

        orderItems.push(orderItem);
      }

      let totalQuantity = 0;
      let totalPrice = 0;

      orderItems.forEach((item) => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
      });
      let totalItems = orderItems.length;

      let finalData = {
        totalQuantity,
        totalPrice,
        user_id,
        shippingInfo,
        address_id,
        orderItems,
        totalItems,
        paymentInfo,
        deliveredAt,
        shippedAt,
      };
      // this is for update count in seller product(stocks)
      // ===============================================================
      //  let sizeAndProduct_id=cart_items.items
      //  let updateStocks=[]
      //  cart_items.items.forEach((item,i)=>{
      //   updateStocks.push({product_id:item.product_id,sizes:item?.sizes,color:item?.color})
      //  })

      // let sizesToUpdate = { ...sizes };

      // const updateCount = {
      //   $inc: {},
      // };

      // for (const size in sizesToUpdate) {
      //   if (sizesToUpdate.hasOwnProperty(size)) {
      //     updateCount.$inc[`sizes.${size}`] = -sizesToUpdate[size];
      //   }
      // }
      // let updateProduct = await productModel.findByIdAndUpdate(
      //   product_id,
      //   updateCount,
      //   { new: true }
      // );

      const updateStocks = cart_items.items.map((item) => ({
        product_id: item.product_id,
        sizes: item?.sizes,
        color: item?.color,
      }));

      const updatedProducts = [];

      for (const update of updateStocks) {
        const { product_id, sizes, color } = update;

        const updateCount = {
          $inc: {},
        };

        for (const size in sizes) {
          if (sizes.hasOwnProperty(size)) {
            updateCount.$inc[`sizes.${size}`] = -sizes[size];
          }
        }

        // Add color condition if color is present
        const query = color ? { _id: product_id, color } : { _id: product_id };

        const updatedProduct = await productModel.findOneAndUpdate(
          query,
          updateCount,
          { new: true }
        );

        updatedProducts.push(updatedProduct);
      }

      console.log("Updated Products:", updatedProducts);

      // ================================
      let createdOrder = await Order.create(finalData);
      if (!createdOrder) {
        createdOrder = await Order.create(finalData);

        if (!createdOrder) {
          return response.commonErrorResponse(
            res,
            ErrorCode.WENT_WRONG,
            {},
            ErrorMessage.SOMETHING_WRONG
          );
        }
      } else {
        return response.commonResponse(
          res,
          SuccessCode.SUCCESSFULLY_CREATED,
          createdOrder,
          SuccessMessage.DATA_SAVED
        );
      }
    }
    //  this is for user directly order without cart
    console.log("=======================================================1");
    let productData = await productModel.findById(product_id);
    if(!productData){
      return response.commonErrorResponse(res,ErrorCode.BAD_REQUEST,{},ErrorMessage.NOT_FOUND)
    }
    console.log("++++++++++",productData)
    console.log("=======================================================2");
    let finalData = {
      totalQuantity: quantity,
      totalPrice: productData?.price * quantity,
      user_id: user_id,
      shippingInfo: shippingInfo,
      address_id: address_id,
      orderItems: [
        {
          "product_name": productData.name,
          "price": productData.price,
          "sizes": JSON.parse(sizes),
          "color": productData.variations.color,
          "product_id": productData._id,
          "quantity":quantity,
          
          
        },
      ],
      totalItems: 1,
      paymentInfo: paymentInfo,
      deliveredAt: deliveredAt,
      shippedAt: shippedAt,
    };
    // ============================
    // this is for update count in seller product(stocks)
    console.log("=======================================================3");
    
    
let updateCount={ }

 let size= JSON.parse(sizes)
 sizes={}
 for (let sizeNumber in size) {
  console.log(size, sizeNumber, size[sizeNumber], "+++++++++++++");
  let ss=JSON.parse(JSON.stringify(productData?.variations.sizes))
  let mm=JSON.parse(JSON.stringify(ss[0]))
  console.log(mm[sizeNumber],"===============")
  
 
 
}

    console.log("=======================================================13");
    console.log(updateCount)
    let updateProduct = await productModel.findByIdAndUpdate(
      product_id,
      updateCount,
      { new: true }
    );
    // ========================
    console.log("=======================================================14");
    console.log(finalData);
    let createdOrder = await orderModel.create(finalData);
    if (!createdOrder) {
      createdOrder = await orderModel.create(finalData);

      if (!createdOrder) {
        return response.commonErrorResponse(
          res,
          ErrorCode.WENT_WRONG,
          {},
          ErrorMessage.SOMETHING_WRONG
        );
      }
    } else {
      return response.commonResponse(
        res,
        SuccessCode.SUCCESSFULLY_CREATED,
        createdOrder,
        SuccessMessage.DATA_SAVED
      );
    }
  } catch (error) {
    console.log(error);

    return response.commonErrorResponse(
      res,
      ErrorCode.INTERNAL_ERROR,
      {},
      error.message
    );
  }
};
// =========

(exports.getSingleOrderDetails = async (req, res) => {
  try {
    const singleOrder = await Order.findById(req.params.id);

    if (!singleOrder) {
      return response.commonErrorResponse(
        res,
        ErrorCode.NOT_FOUND,
        {},
        ErrorMessage.NOT_FOUND
      );
    }

    if (singleOrder) {
      return response.commonResponse(
        res,
        SuccessCode.SUCCESS,
        singleOrder,
        SuccessMessage.DETAIL_GET
      );
    }
  } catch (error) {
    console.log(error);

    return response.commonErrorResponse(
      res,
      ErrorCode.INTERNAL_ERROR,
      {},
      error.message
    );
  }
}),
  // get all order of the user
  (exports.myOrders = async (req, res) => {
    try {
      const FetchedOrders = await Order.findOne();

      // Check if orders are found
      if (!FetchedOrders) {
        return response.commonErrorResponse(
          res,
          ErrorCode.NOT_FOUND,
          {},
          ErrorMessage.NOT_FOUND
        );
      } else {
        // Return success response with orders
        return response.commonResponse(
          res,
          SuccessCode.SUCCESS,
          FetchedOrders,
          SuccessMessage.DETAIL_GET
        );
      }
    } catch (error) {
      console.log(error);
      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        error.message
      );
    }
  }),
  /* ======================ADMIN================== */
  // Get All Orders ---ADMIN
  (exports.getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find();

      if (!orders) {
        return response.commonErrorResponse(
          res,
          ErrorCode.NOT_FOUND,
          {},
          ErrorMessage.NOT_FOUND
        );
      }

      let totalAmount = 0;
      orders.forEach((order) => {
        totalAmount += order.totalPrice;
      });

      res.status(200).json({
        success: true,
        orders,
        totalAmount,
      });
    } catch (error) {
      console.log(error);

      return response.commonErrorResponse(
        res,
        ErrorCode.INTERNAL_ERROR,
        {},
        error.message
      );
    }
  });
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return response.commonErrorResponse(
        res,
        ErrorCode.NOT_FOUND,
        {},
        ErrorMessage.NOT_FOUND
      );
    }
    if (order.orderStatus === "Delivered") {
      return res.status(400).send({
        error: "ORDER_ALREADY_DELIVERED",
        message: "The order has already been delivered.",
      });
    }

    if (req.body.status === "Shipped") {
      order.shippedAt = Date.now();
      order.orderItems.forEach(async (i) => {
        await updateStock(i.product, i.quantity);
      });
    }

    order.orderStatus = req.body.status;
    if (req.body.status === "Delivered") {
      order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: false });

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return response.commonErrorResponse(
      res,
      ErrorCode.INTERNAL_ERROR,
      {},
      error.message
    );
  }
};

async function updateStock(id, quantity) {
  const product = await Product.findById(id);
  product.stocks -= quantity;
  await product.save({ validateBeforeSave: false });
}

// Delete Order ---ADMIN
exports.deleteOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return response.commonErrorResponse(
      res,
      ErrorCode.NOT_FOUND,
      {},
      ErrorMessage.NOT_FOUND
    );
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
};

exports.getOrderBySellerId = async function (req, res) {
  try {
    let seller_id = req.seller_id;

    let orderDetails = await orderModel.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "",
        },
      },
    ]);
  } catch (error) {
    console.log(error);

    return response.commonErrorResponse(
      res,
      ErrorCode.INTERNAL_ERROR,
      {},
      error.message
    );
  }
};

exports.orderHistory = async function (req, res) {
  try {
    let user_id = req.user_id;
    let allOrder = await orderModel.find({ user_id: user_id });
    if (!allOrder?.length == 0) {
      return response.commonErrorResponse(
        res,
        ErrorCode.BAD_REQUEST,
        [],
        ErrorMessage.NOT_FOUND
      );
    } else {
      return response.commonResponse(
        res,
        SuccessCode.SUCCESS,
        allOrder,
        SuccessMessage.DATA_FOUND
      );
    }
  } catch (error) {
    return response.commonErrorResponse(
      res,
      ErrorCode.INTERNAL_ERROR,
      {},
      error.message
    );
  }
};
