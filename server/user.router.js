const express = require('express');
const router = express.Router();
const User = require('./user.model');

router.get("/api/users", (req, res) => {
    User.find({}, function (err, users) {
        if(err) return handleError(err, res);
        res.send(users);
    });
});

router.delete("/api/users/", (req, res) =>{
    User.deleteMany( {}, (err, doc) => {
        if(err) return handleError(err, res);
        console.log("Deleted all");
    })
});



function handleError(err, res){
    console.log(err);
    res.status(500);
}

module.exports = router;