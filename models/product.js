const mongoose = require('mongoose');
const { buffer } = require('stream/consumers');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    product_image: {
        data: Buffer, 
        contentType: String
    },
    likes:
        {
            type: Number,
            default: 0
        }
    }, {timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product; 