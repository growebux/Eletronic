const Product = require('../models/product.model');

//Simple version, without validation 
exports.test = function (req, res) {
    res.send('Sistema funcionando');
};

// controllers/products.js
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Produto criado')
    })
};

// controllers/products.controller.js
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};