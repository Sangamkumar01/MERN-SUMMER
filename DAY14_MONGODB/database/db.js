const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://<username>:<password>@gofoodmern.00npwb5.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=GoFoodMern";

let dbURL = uri;
dbURL = dbURL.replace("<username>", process.env.DB_USERNAME);
dbURL = dbURL.replace("<password>", process.env.DB_PASSWORD);
dbURL = dbURL.replace("<dbName>", process.env.DB_NAME);

const client = new MongoClient(dbURL);

const database = client.db(process.env.DB_NAME);
const productsCollection = database.collection("products");

module.exports = {
    database,
    productsCollection,
};
