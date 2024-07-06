const { mongoose } = require("mongoose");

// const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    thumbnail: {
        type: String,
    },
    images: [],
    description: String,
    metaData: {},
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});

const productModel = mongoose.model("products", productSchema);

module.exports = productModel;


// const productSchema = new mongoose.Schema({
//     description: String,
//     title:{
//         type: String,
//         required: true,
//     }, 
//     price:{
//         type: Number,
//         require: true,
//     },
//     thumbnail:{
//         type: String,
//     },
//     images:[],
//     description:String,
//     metaData: {},
//     createdAt:{
//         type: Date,
//         default: Date.now(),
//     }, 
//     updatedAt:{
//         type: Date,
//         default: Date.now(),
//     }
// });

// const productSchema = new mongoose.Schema({
//     pizza_name: String,
//     pizza_category: String,
//     pizza_size: String,
//     pizza_price: Number,
// })

// // const productModel = mongoose.model("product", productSchema);
// const productModel = mongoose.model("pizzass", productSchema);

// module.exports = productModel;