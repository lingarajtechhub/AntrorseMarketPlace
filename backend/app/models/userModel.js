const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'], // Name is required
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // Ensure email is unique
        trim: true, // Remove leading/trailing whitespaces from email
        lowercase: true, // Convert email to lowercase
        validate: {
            validator: function (value) {
                // Use a regular expression to validate email format
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email format',
        },
    },
    mobile_number: {
        type: Number,
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
        required: [true, 'Password is required'],
    },
    OTP: {
        type: Number,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("user", userSchema);
