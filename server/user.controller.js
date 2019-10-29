const User = require('./user.model');
var jwt = require('jsonwebtoken');

var privateKey = "some-kind-of-token-that-is-very-safe-but-not-so-much-i-think";

exports.login = (req, res) =>{
    console.log("body", req.body);
    User.login(req.body)
        .then(user => {
            jwt.sign(user, privateKey, function(err, token) {
                if(err) return res.status(500);
                res.status(200).send({
                    user,
                    token,
                });
            });
        })
        .catch(err =>{
            res.send(401);
        });
};

exports.signup = (req, res) =>{
    User.signup(req.body)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err =>{
            res.send(500);
        });
};