const mongoose = require("mongoose")

const userShema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
       role: {
            type: String,
            enum: ['user', 'admin'],  // User roles: user or admin
            default: 'user',
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userShema)