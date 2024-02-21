const mongoose= require("mongoose")

const ObjectId= mongoose.Schema.Types.ObjectId

const productSchema= new mongoose.Schema({
    seller_id:{
        type:ObjectId,
        ref:"seller"
    },
    description:{
        type:String,
        require:true
    },
    brand:{
        type:String,
        require:true
    },
    color:{
        type:String,
        require:true
    },
   
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
    }
    ,

    material:{
        type:String
    },
    season: {
        type: String
    },
    pattern: {
        type: String
    },
    occasion: {
        type: String
    },
    fit: {
        type: String,
        enum: ["Slim fit", "Regular fit", "Loose fit"]
    },
    style:{
        type:String
    },
    price:{
        type:Number,
        require:true
    },
    oldPrice:{
        type:Number
    },
    currency:{
        type:String,
        require:true

    },
    category:{
        type:String,
        enum:["Male","Female","Kids","Footwear","electronics","mobile","laptop"]
    },
    subCategory:{
        type:String
    }

    ,
    stocks:{
        type:Number,
        require:true,
        default:1
    },
    product_name:{
        type:String,
        require:true,
        trim:true
    },   
    img1: {
            type: String,
            required: true
        },
        img2: {
            type: String,
            required: true
        },
        img3: {
            type: String,
            required: true
        },
        img4: {
            type: String,
            required: true
        }
        ,
        img5: {
            type: String,
            required: true
        
    },
    // this special for mobile
    model: {
        type: String,
     
    },
    RAM: {
        type: Number,
      
    },
    ROM: {
        type: Number,
    
    },
    screenSize: {
        type: Number,
       
    },
    operatingSystem: {
        type: String
    },
    cameraResolution: {
        type: Number
    },
    batteryCapacity: {
        type: Number
    },
    height:{
        type:Number
    },
    width:{
        type:Number
    },
    length:{
        type:Number
    },
    weight:{
        type:Number
    }

   
}, {timestamps:true})

module.exports= mongoose.model("product",productSchema)

