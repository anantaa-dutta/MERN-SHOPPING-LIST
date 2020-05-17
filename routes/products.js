const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
require('mongoose-type-url');
//Products model
const Product = require('./product');
app.use(bodyParser.urlencoded({extended: true}));

//@route  GET products
//@desc   GET All products
//@access Public 

router.get('/', function(request, response) {
    
    Product.find({},function(err, products) {
        if (err) {
            response.status(500).send({error: "Could not fetch products"});
            console.log(err);
        } 
            else {
                response.send(products);
            }
    });
});

//@route  POST products
//@desc   Create a Post
//@access Public 

router.post('/', function(request, response) {
    const product = new Product();
    product.title = request.body.title;
    product.price = request.body.price;
    product.imgUrl = request.body.imgUrl;
    product.save(function(err, savedProduct) {
        if(err) {
            response.status(500).send({error:"Could not save product"});
            console.log(err);
        }
        else {
            response.send(savedProduct);
        }
    });
});

app.use(router);

module.exports = router;
