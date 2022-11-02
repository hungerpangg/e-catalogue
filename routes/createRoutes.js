const express = require('express');
const router = express.Router();
const createController = require('../controllers/createController');

router.get('/create', createController.getCreatePage);

router.post('/createproduct', createController.uploadFile, createController.createProduct);

module.exports = router;