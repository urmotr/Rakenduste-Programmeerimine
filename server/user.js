const express = require('express');
const router = express.Router();
const DB = require("./database.js");
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


router.post("/api/items", (req, res) => {
    const props = {
        imgSrc: "google.com",
        title: "phone red",
        price: 200,
        category: "phones",
    };
    const item1 = new Item(props);
    item1.save(err => {
        if (err) {
            console.log("Error", err);
            res.send(500);
            return;
        }
        console.log("Success created!");
    });
   res.send(201);
});

router.get("/api/items", (req, res) => {
    //res.json(DB.getItems());
    Item.find({}, function (err, items) {
        if (err) {
            console.log("Error", err);
            res.send(500).send(err);
            return;
        }
        res.send(items);
    });
});

router.get("/api/items/:itemId", (req, res ) => {
    //res.send(DB.getItem(req.params.itemId));
    Item.findById(req.params.itemId, function (err, item) {
        if (err) {
            console.log("Error", err);
            res.send(500).send(err);
            return;
        }
        res.send(item);
    });
});

module.exports = router;