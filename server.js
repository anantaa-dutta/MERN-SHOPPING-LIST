const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('mongoose-type-url');

const app = express();

const Product = require('./routes/products');

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
.connect(db)
.then(() =>console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//Use Routesapp.use(bodyParser.urlencoded({extended: false}));
app.use('/product',Product);

app.listen(3005, function()
          {
    console.log("Server started on port 3005...");
});
