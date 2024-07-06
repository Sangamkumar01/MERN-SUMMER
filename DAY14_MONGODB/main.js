require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { productsCollection } = require("./database/db.js");

const app = express();

app.use(bodyParser.json());

app.get("/products", async (req, res) => {
  const products = await productsCollection.find().toArray();
  res.send({
    status: "Success",
    data: {
      products: products,
    },
  });
});

app.post("/products", async (req, res) => {
  const body = req.body;
  if (!body.title || !body.price) {
    res.status(400);
    res.json({
      status: "Fail",
      message: "Title and price are required",
    });
    return;
  }
  const result = await productsCollection.insertOne(body);
  res.json({
    status: "Success",
    data: {
      product: result,
    },
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
