const fs = require("fs");
const pdf = require("html-pdf");
const ejs = require("ejs");
const mongoose = require("mongoose");
const Order = require("../models/orders/orderModels");
const Invoice = require("../models/invoiceModels");


exports.invoice = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    // Find existing invoices for the orderId
    const existingInvoices = await Invoice.find({ orderId });
    if (existingInvoices.length > 0) {
      console.log(
        `Found ${existingInvoices.length} existing invoices for orderId ${orderId}.`
      );
      // Return existing invoices if found
     return await processInvoices(existingInvoices)
    }
    const orderData = await Order.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(orderId) } },
      { $unwind: "$orderItems" },
      {
        $lookup: {
          from: "products",
          localField: "orderItems.product_id",
          foreignField: "_id",
          as: "productDetails",
        },
      },
      { $unwind: "$productDetails" },
      {
        $project: {
          "productDetails.dimensions": 0,
          "productDetails.images": 0,
        },
      },
      {
        $lookup: {
          from: "sellers",
          localField: "productDetails.seller_id",
          foreignField: "_id",
          as: "sellerInfo",
        },
      },
      {
        $project: {
          "sellerInfo._id": 0,
          "sellerInfo.password": 0,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "userInfo",
        },
      },
      {
        $project: {
          "userInfo._id": 0,
          "userInfo.password": 0,
        },
      },
      {
        $project: {
          "sellerData._id": 0,
          "sellerData.password": 0,
        },
      },
      {
        $lookup: {
          from: "addresses",
          localField: "address_id",
          foreignField: "_id",
          as: "address",
        },
      },
      { $unwind: "$address" },
    ]);

    // Counter for invoice numbers
    let invoiceCounter = 0;

    // Function to generate a 6-digit invoice number prefixed with "IN-"
    function generateInvoiceNumber() {
      return "IN-" + (invoiceCounter++).toString().padStart(6, "0");
    }

    // Function to calculate tax
    function calculateTax(subtotal) {
      const taxRate = 0.1; // Assuming 10% tax rate
      return subtotal * taxRate;
    }

    // Process order data and generate invoices
    const NewInvoices = await Promise.all(
      orderData.map(async (order) => {
        const subtotal =
          order.orderItems.price * parseInt(order.orderItems.quantity);
        const tax = calculateTax(subtotal);
        const total = subtotal + tax;

        const newInvoice = new Invoice({
          orderId: order._id,
          invoiceNumber: generateInvoiceNumber(),
          userName: order.userInfo[0].user_name,
          userPhone: order.userInfo[0].mobile_number,
          userEmail: order.userInfo[0].email_id,
          userAddress:
            order.address.street +
            ", " +
            order.address.city +
            ", " +
            order.address.state +
            ", " +
            order.address.country +
            ", " +
            order.address.postalCode,
          sellerName: order.sellerInfo[0].fullName,
          sellerPhone: order.sellerInfo[0].mobile_number,
          sellerEmail: order.sellerInfo[0].email_id,
          storeName: "Sample Store", // Change this to your store name
          storeAddress: "Sample Store Address", // Change this to your store address
          orderItems: [
            {
              Product:
                order.orderItems.product_name || order.orderItems.Product_name,
              Description:
                order.productDetails.description || "Description not available",
              Rate: order.orderItems.price,
              QTY: parseInt(order.orderItems.quantity),
              Amount: subtotal,
            },
          ],
          SubTotal: subtotal,
          Tax: tax,
          Total: total,
        });

        try {
          // Save the new invoice to the database
          const savedInvoice = await newInvoice.save();
          console.log("Invoice saved successfully:", savedInvoice);
          return savedInvoice;
        } catch (error) {
          console.error("Error saving invoice:", error);
          throw error;
        }

        return newInvoice;
      })
    );
    
    return await processInvoices(NewInvoices)
  } catch (error) {
    console.error("Error fetching order data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

async function processInvoices(invoiceData) {
  for (let i = 0; i < invoiceData.length; i++) {
    const invoice = invoiceData[i];
    const html = await renderInvoiceTemplate(invoice);
    await generatePDF(html, i);
  }
}

function renderInvoiceTemplate(invoice) {
  return new Promise((resolve, reject) => {
    ejs.renderFile(voice, (err, html) => {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  });
}
function generatePDF(html, pageIndex) {
  return new Promise((resolve, reject) => {
    let options = {
      format: "A4",
      orientation: "portrait",
      border: {
        top: "0.5in",
        right: "0.5in",
        bottom: "0.5in",
        left: "0.5in",
      },
    };
    pdf.create(html, options).toFile(`./newInvoice_${pageIndex}.pdf`, (err, result) => {
      if (err) {
        reject(err);
      } 
      if (fs.existsSync("./newInvoice.pdf")) {
        // Send the PDF file as a response
        res.download("./newInvoice.pdf", "invoice.pdf", (err) => {
            if (err) {
                console.log(err);
            }
            // Delete the PDF file after sending
            fs.unlinkSync("./newInvoice.pdf");
        });
    } else {
        console.log("PDF file does not exist.");
    }
    });
  });
}

