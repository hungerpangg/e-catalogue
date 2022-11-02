const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product');
const indexRouter = require('./routes/indexRoutes');
const createRouter = require('./routes/createRoutes');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true, limit: '5mb'}));

app.use(express.json({limit: '5mb'}));

app.use(express.static('public'));

dbURI = 'mongodb+srv://pangkawai:%40singapore@cluster0.qgauscn.mongodb.net/e-catalogue?retryWrites=true&w=majority'

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result => console.log('connected to db'))
.catch(err => console.log(err));

app.use(createRouter); 
app.use(indexRouter);

app.listen(port, ()=> console.log('listening at port 3000'));

// reset app data 

app.get('/deleteall', (req, res) => {
    Product.deleteMany({})
    .then(result => console.log(result))
    .catch(err => console.log(err));
})