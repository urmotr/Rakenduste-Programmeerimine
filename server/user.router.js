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
    User.findOne({email: req.body.email}, (err, doc) => {
        if(err) return handleError(err, res);
        res.send(doc);
    });
});

router.post("/api/users/signup", (req, res) =>{
    console.log("body", req.body);
   const user = new User(req.body);
   user.save((err) => {
       if(err) return handleError(err, res);
       console.log("saved");
       res.send("Sucess");
   });
});


function handleError(err, res){
    console.log(err);
    res.status(500);
    res.send("Email already exists!")
}

module.exports = router;