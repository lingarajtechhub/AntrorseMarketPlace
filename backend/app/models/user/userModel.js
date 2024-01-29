const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: [true, 'Name is required'], // Name is required
    },
    email:{
        type: String,
      
     
    },
    mobile_number: {
        type: Number,
        unique: true,
        required: [true, 'Mobile number is required'],
        validate: {
            validator: function (value) {
                // Use a regular expression to validate a 10-digit mobile number
                return /^\d{10}$/.test(value);
            },
            message: 'Invalid mobile number format',
        },
    },
    password: {
        type: String,
       
    },
    user_image:{
        type:mongoose.Schema.Types.Mixed
    },
    Security_questions: {
        type: String,
    },
    Secret_answers: {
        type: String,
    },
    DOB:{
        type:String
    },
    GST:{
        type:String
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("user", userSchema);
