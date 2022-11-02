const Product = require('../models/product');

const getAllProducts = (req, res) => {
    if(Object.keys(req.query).length === 0){
        req.query.keyword = '';
    }
    Product.find({product_name: {$regex: req.query.keyword}
    })
    .then(products => res.render('index', {products, pageName: "Home"}))
    .catch(err => console.log(err));
}

const getProductLikes = (req, res) => {
    Product.findById(req.params.id)
    .then(product => res.send(product))
    .catch(err => console.log(err))
}

const updateProductLikes = (req, res) => {
    Product.findById(req.params.id)
    .then(product => {
        product.likes = req.body.likes;
        product.save()
        .then(response => {
            console.log(response.likes);
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err));
}

const deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(result => console.log(result))
    .catch(err => console.log(err));
}

module.exports = {
    getAllProducts,
    getProductLikes,
    updateProductLikes,
    deleteProduct
}