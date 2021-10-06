// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://eddie:1N8utt7IrFZyNy9P@cluster0.fhsts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/products', product);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});