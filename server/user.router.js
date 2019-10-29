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


router.post("/api/users/login", (req, res) =>{
    console.log("body", req.body);
    User.login(req.body)
        .then(user => {
            res.json(user);
        })
        .catch(err =>{
            return handleError(err, res);
        });
});

router.post("/api/users/signup", (req, res) =>{
    User.signup(req.body)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err =>{
           return handleError(err, res);
        });
});


function handleError(err, res){
    console.log(err);
    res.status(500);
}

module.exports = router;