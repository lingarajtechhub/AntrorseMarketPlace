const express= require("express")
const route= require("./router/userRouter")
const multer= require("multer")
const cors= require("cors")
const app= express()
app.use(multer().any());
app.use(express.json());
app.use(
  cors({
    allowedHeaders: ["Content-Type", "token", "authorization"],
    exposedHeaders: ["token", "authorization"],
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
    preflightContinue: false,
  })
);
require("./dbConnection/dbConnection")
app.use("/app/user/",route)

app.listen(process.env.port||3000, function(){
  console.log("server is running on port:",process.env.port||3000)
})
