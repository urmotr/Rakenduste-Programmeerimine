var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    imgSrc: {type: String, required: true},
    title: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},

});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;