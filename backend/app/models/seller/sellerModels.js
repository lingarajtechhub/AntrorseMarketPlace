const mongoose = require("mongoose");
const sellerSchema = new mongoose.Schema({
    fullName:
    {
        type: String,
        required: true,
        trim: true
    },
    mobile_number: {
        type: String,
        required: true,
        trim: true,
        unquie: true
    },
    email_id: {
        type: String,
        unique: true,
        trim: true
    },
    GST: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    company_pan_number: {
        type: String
    },
    password: {
        type: String,
    },
    DOB: {
        type: String,
    },
    Security_questions: {
        type: String,
    },
    Secret_answers: {
        type: String,
    },
    Account_details: {
        type: String,
    },
    
},{timestamps: true,});
module.exports = mongoose.model("seller", sellerSchema);