const express = require('express');
const fsPromises = require('fs/promises')
const app = express();
app.use(express.json());

app.get("/products", async(req, res) => {
    const text = await fsPromises.readFile('./data.json', {encoding:"utf-8"});
    let products = await getData();
    res.json({
        status: "Success",
        data:{
            products:products
        },
        
    });
});

const getData= async()=>{
    const text = await fsPromises.readFile('./data.json', {encoding:"utf-8"});
    let products;
    try {
        products = JSON.parse(text);
    } catch {
        products = [];
    }
    return products;
}

app.post("/products",async (req,res) =>{
    // console.log(typeof req);
    // console.log(Object.keys(req));
    // console.log(body);
    const body = req.body;
    const products = await getData();

    // const prlen = products.length();
    // const lastIndex = prlen - 1;
    // const lastData = products(lastIndex);
    // const lastId = lastItem.id;
    // Alter
    let lastId = 1;
    if(products.length != 0){
        const lastId = products[products.length-1].id;
    }
    body.Id=lastId + 1;
    products.push(body);
    // console.log(products);
    await fsPromises.writeFile("./data.json" , JSON.stringify(products));
    res.status(201);
    res.json({
        status:"success",
        data:{
            products: body,
        },
    })
}),

app.put("/products/:id", async (req, res)=>{
    const params = req.params;
    // console.log(params);
    const body = res.body;
    const products = await getData();
    const prIdx = products.findIndex((elem) =>{
       if (elem.id == params.id) return true;
       return false;
    });
    if(prIdx === -1){
        res.status(400);
        res.json({
            status: "fail",
            message: "Invalid product id",
        })
        return;
    }
    // console.log(body);
     body.id = products(prIdx).id;
     products(prIdx) = body;
     // save in file
    res.json({
        status:"Success",
        data:{
            products:products(prIdx),
        },

    })

})


app.delete("/products/:id", async(req, res)=>{
    const params = req.params;
    console.log(params);
    const body = res.body;
    const products = await getData();
    const prIdx = products.findIndex((elem) =>{
       if (elem.id == params.id) return true;
       return false;
    });
    if(prIdx === -1){
        res.status(400);
        res.json({
            status: "fail",
            message: "Invalid product id",
        });
        return;
    }

    products.splice(prIdx, 1);
    await fsPromises.writeFile("./data.json", JSON.stringify(products));
    
     res.status(204)
    res.json({
        status:"Success",
        data:{
            products:null,
        },
    });
});



app.patch("/products/:id", async (req, res) => {
    const params = req.params;
    const body = req.body;
    const products = await getData();
    const prIdx = products.findIndex((elem) =>{
       if (elem.id == params.id) return true;
       return false;
    });
    if (prIdx === -1) {
        res.status(400)
        res.json({
            status: "fail",
            message: "Invalid product id",
        });
        return;
    }

    const newOBJ = {
        ...products[prIdx],
        ...body,  
    };

    products[prIdx] = newOBJ;
    await fsPromises.writeFile("./data.json", JSON.stringify(products));

    res.send({
        status: "Success",
        data: {
            product: products[prIdx],
        },
    });
});

app.listen(3000);
