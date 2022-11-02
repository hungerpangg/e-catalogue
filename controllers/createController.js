const Product = require('../models/product');
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage });

const getCreatePage = (req, res) => {
    res.render('create', {pageName: 'Create'});
}

const uploadFile = upload.single('file');

const createProduct = (req, res) => {
    const body = req.body;
    const file = req.file;
    console.log(body, file);
    const product = new Product({
        product_name: body.product_name,
        product_price: body.product_price,
        product_image: {
            data: fs.readFileSync(file.path),
            contentType: file.mimetype
        }
    });
    product.save()
    .then(result => {
        fs.unlink(req.file.path, (err) => {
            if (err) console.log(err);
            console.log(req.file.path + ' was deleted');
        })
        res.redirect('/');
    })
    .catch(err => console.log(err))
}

module.exports = {
    getCreatePage,
    uploadFile,
    createProduct
}