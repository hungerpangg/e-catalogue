const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get(['/','/:search'], indexController.getAllProducts);

router.get('/like/:id', indexController.getProductLikes);

router.put('/like/:id', indexController.updateProductLikes);

router.get('/delete/:id', indexController.deleteProduct);

module.exports = router;

