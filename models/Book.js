const mongoose = require('mongoose');

const bookShema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        isbn: {
            type: String,
            required: true
        },
        publishDate: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('books', bookShema);