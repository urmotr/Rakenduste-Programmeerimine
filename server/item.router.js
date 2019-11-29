const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const Item = require('./item.model');


router.delete("/items/:itemId", (req, res) =>{
    Item.deleteOne({"_id" : mongoose.Types.ObjectId(req.params.itemId)}, (err) => {
            if(err){
                return res.send(500);
            }
            console.log("delete success");
            return res.send(204);
        }
    )
});

router.post("/items", (req, res) => {
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

router.get("/items", (req, res) => {
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

router.get("/items/:itemId", (req, res ) => {
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