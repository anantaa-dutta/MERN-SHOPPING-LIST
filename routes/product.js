const mongoose = require('mongoose');
require('mongoose-type-url');
const Schema = mongoose.Schema;

const product = new Schema({
    title: String,
    price: Number,
    likes: {type: Number, default:0},
    imgUrl: {type: mongoose.SchemaTypes.Url, required: true}
    
});
module.exports = mongoose.model('Product',product);
