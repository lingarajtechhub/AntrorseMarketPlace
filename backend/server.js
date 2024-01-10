import express from "express";
import mongoose from "mongoose";

// const mongoose = require("mongoose");

const app = express();
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://upendra:wvUNUF1FjJ02PCPH@cluster0.b8yrh4n.mongodb.net/AntrorseMarketPlace",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error.message));

app.listen(3000, () => {
  console.log("express app is connected at port:" + 3000);
});
