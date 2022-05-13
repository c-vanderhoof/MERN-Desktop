const Product = require ("../models/product.models.js");

module.exports = {
    createProduct: (req, res) => {
        Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => console.log(err));
    },

    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then((oneProduct) => res.json(oneProduct))
        .catch((err) => console.log(err));
    }, 

    createProduct: (req, res) => {
        Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => console.log(err));
    }, 
};

