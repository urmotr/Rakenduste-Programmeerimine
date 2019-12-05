const express = require('express');
const router = express.Router();
const User = require('./user.model');
const mongoose = require("mongoose");

router.get("/", (req, res) => {
    User.find({}, function (err, users) {
        if(err) return handleError(err, res);
        res.send(users);
    });
});

router.delete("/", (req, res) =>{
    User.deleteMany( {}, (err, doc) => {
        if(err) return handleError(err, res);
        console.log("Deleted all");
    })
});

router.put("/:userId/cart/:itemId", (req, res) => {
    const userId = new mongoose.mongo.ObjectId(req.params.userId);
    const itemId = req.params.itemId;
    User.findOne({_id: userId}, (err, doc) => {
        const cart = doc.cart;
        cart.push(itemId);
        User.findOneAndUpdate({_id: userId}, {cart}, {upsert: true}, function (err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('Succesfully saved.');
        });
    })
});
router.delete("/:userId/cart/:itemId", (req, res) => {
    const userId = new mongoose.mongo.ObjectId(req.params.userId);
    const itemId = req.params.itemId;
    User.findOne({_id: userId}, (err, doc) => {
        const cart = doc.cart;
        const copy = cart.slice();
        const key = copy.findIndex(cart => cart === itemId);
        copy.splice(key,1);
        User.findOneAndUpdate({_id: userId}, {cart: copy}, {upsert: true}, function (err, doc) {
            if (err) return res.send(500, {error: err});
            return res.send('Succesfully removed.');
        });
        console.log(doc.cart);
    })
});


function handleError(err, res){
    console.log(err);
    res.status(500);
}

module.exports = router;