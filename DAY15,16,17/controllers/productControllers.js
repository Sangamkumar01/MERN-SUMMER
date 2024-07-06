// const {productsCollection} = require('../config/db.js');

const productModel = require("../models/productModels");

const checkId = async (req, res, next) =>{
    try {
        const {id} = req.params;
    // const product =  await productModel.find(_id: id);
    const product =  await productModel.findById(id);
    if(!product){
        response.status(404);
        res.json({
            status:"fail",
            message: "Product ID not found"
        });
        return;
    }
    next();
    } catch (err) {
        if(err.name === "CastError"){
            res.status(400);
            res.json({
                status:"Fail",
                message: "Invalid Product ID !",
            });
            return;
        }
        res.status(500)
        res.json({
            status:"Fail",
            err: "Internal Server Error",
        })
    }
};

const getProducts = async (req, res)=>{
    const products = await  productModel.find({}).limit(10);
    res.send({
        status: "Success",
        data:{
             products,
        },
    });
    // const products = await productsCollection.find().toArray();

//    res.send({
//       status: "Success",
//       data:{
//         // products: products,
//         products,
//       },
//    });

};

const createProduct = async (req, res) => {
    try{
        const body = req.body;
        const newProduct = await productModel.create(body);
        res.json({
           status: "Success",
           data:{
               product: newProduct,
           },
        });
    }catch(err){
        console.log(err);

        res.status(500)
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        })
    }
     
};

const replaceProduct = async (req, res) =>{
    try {
        const { id } = req.params;
        const body = req.body;
    
        const newProduct = await productModel.findOneAndReplace({_id: id}, body,{new: true});
        res.json({
            status: "Success",
            data:{
                produc: newProduct,
            },
        });
    } catch(err){
        console.log(err);

        res.status(500)
        res.json({
            status: "fail",
            message: "Internal Server Error",
            info: err,
        })
    }
}

const updateProduct = async (req, res) =>{
    try{

        const {id} = req.params;
        const body = req.body;
        body.updatesAt = Date.now();
        const newProduct = await  productModel.findByIdAndUpdate({_id: id},body, {
           new: true,
        });
        res.status(200);
        res.json({
            status: "Success",
            data: {
                product: newProduct,
            },
        });
    }catch(err){
        res.status(500);
        res.json({
            status: "Fail",
            message:"Internal Server Error",
            info: err,
        })
    }
};

const deleteProduct = async (req, res) =>{
    try{
        const {id} = req.params;
        await productModel.findByIdAndUpdate(id);
        res.status(204);
        res.json({
            status: "Success",
            data: {
                product: null,
            },
        });
    }catch(err){
        res.status(500);
        res.json({
            status: "Fail",
            message:"Internal Server Error",
            info: err,
        })
    }
}

const listProduct = async (req, res) =>{
    const {limit = 10, q = "", fields = "", sort="", page = 1, ...filters } = req.query;
    const selectionFields = fields.split("_").join(" ");
    const sortFields = sort.split("_").join(" ");

     

    // console.log(query);
    // res.send("hi")

    // const pizzasQuery = productModel.find({
    //     title: {
    //         $regex: q,
    //         filters,
    //     },
    // });
    
    let pizzasQuery = productModel.find(filters);
    // Searching Functionality
    pizzasQuery = pizzasQuery.where("title").regex(q);
    // reduce response size and select specific fields
    pizzasQuery = pizzasQuery.select(selectionFields);
    // sorting
    pizzasQuery = pizzasQuery.sort(sortFields);
    const limitedPizzas = await pizzasQuery.limit(limit);

    // count the total of result documents
    const countQuery = pizza.clone();
    const totalData = await countQuery.countDocuments();

    // PAGINATION
    pizzasQuery = pizzasQuery.skip((page-1)*limit);
    pizzasQuery = await pizzasQuery.limit(limit);

    res.json({
        status:"Success",
        results:limitedPizzas.length,
        data:{
            pizzas: limitedPizzas,
        },
    });
};

module.exports = {
    getProducts,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct,
    listProduct,
    checkId,
    
}