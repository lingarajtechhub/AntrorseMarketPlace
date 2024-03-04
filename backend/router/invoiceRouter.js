const fs = require('fs');
const ejs = require("ejs");
const express = require("express");
const router = express.Router();
const {  invoice } = require("../app/controlllers/invoiceController");

router.get("/download/:orderId", invoice);



module.exports = router;

