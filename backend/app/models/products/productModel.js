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
    sizes:{
        type:String,
        enum:["XS", "S", "M", "L", "XL"],
        // require:true
    },
    material:{
        type:String
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
        enum:["Male","Female","Kids","Shoes"]
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
        
    }

   
}, {timestamps:true})

module.exports= mongoose.model("product",productSchema)

