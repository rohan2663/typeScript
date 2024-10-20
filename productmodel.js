const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number
});

const Product = new mongoose.model("Product",ProductSchema);

module.exports = Product;