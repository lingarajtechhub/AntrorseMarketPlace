
const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
 
  seller_id: {
    type: Schema.Types.ObjectId,
    ref: "seller",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  stocks: {
    type: Number,
    required: true,
  },
  dimensions: {
    length: {
      type: Number,
    },
    breath: {
      type: Number,
    },
    height: {
      type: Number,
    },
    weight: {
      type: Number,
    },
  },
  tags: {
    type: [String],
    default: [],
  },
  category: {
    type: String,
    enum: ["Male", "Female", "Kids", "Footwear", "electronics", "mobile", "laptop"],
  },
  subCategory: {
    type: String,
  },
  images: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  variations: {
    category_selection: {
      type: String,
    },
    brand_name: {
      type: String,
    },
    mater: {
      type: [String],
      default: [],
    },
    sizes: [
      {}
    ],
    color: {
      type: [String],
      default: [],
    },
  },
});

module.exports = mongoose.model("product", productSchema);





































// ========================



// const mongoose= require("mongoose")

// const ObjectId= mongoose.Schema.Types.ObjectId

// const productSchema= new mongoose.Schema({
//     seller_id:{
//         type:ObjectId,
//         ref:"seller"
//     },
//     description:{
//         type:String,
//         require:true
//     },
//     brand:{
//         type:String,
//         require:true
//     },
//     color:{
//         type:String,
//         require:true
//     },
   
//     sizes: {
//         XS: {
//             type: Number
//         },
//         S: {
//             type: Number
//         },
//         M: {
//             type: Number
//         },
//         L: {
//             type: Number
//         },
//         XL: {
//             type: Number
//         }
//     }
//     ,

//     material:{
//         type:String
//     },
//     season: {
//         type: String
//     },
//     pattern: {
//         type: String
//     },
//     occasion: {
//         type: String
//     },
//     fit: {
//         type: String,
//         enum: ["Slim fit", "Regular fit", "Loose fit"]
//     },
//     style:{
//         type:String
//     },
//     price:{
//         type:Number,
//         require:true
//     },
//     oldPrice:{
//         type:Number
//     },
//     currency:{
//         type:String,
//         require:true

//     },
//     category:{
//         type:String,
//         enum:["Male","Female","Kids","Footwear","electronics","mobile","laptop"]
//     },
//     subCategory:{
//         type:String
//     }

//     ,
//     stocks:{
//         type:Number,
//         require:true,
//         default:1
//     },
//     product_name:{
//         type:String,
//         require:true,
//         trim:true
//     },   
//     image: [],
//     // this special for mobile
//     model: {
//         type: String,
     
//     },
//     RAM: {
//         type: Number,
      
//     },
//     ROM: {
//         type: Number,
    
//     },
//     screenSize: {
//         type: Number,
       
//     },
//     operatingSystem: {
//         type: String
//     },
//     cameraResolution: {
//         type: Number
//     },
//     batteryCapacity: {
//         type: Number
//     },
//     height:{
//         type:Number
//     },
//     width:{
//         type:Number
//     },
//     length:{
//         type:Number
//     },
//     weight:{
//         type:Number
//     }

   
// }, {timestamps:true})

// module.exports= mongoose.model("product",productSchema)




