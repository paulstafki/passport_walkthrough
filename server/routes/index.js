var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.get("/", function(req,res,next){
    res.sendFile(path.resolve(__dirname, '../public/assets/views/index.html'));
});

router.post('/',
    passport.authenticate('local', {
        successRedirect: "/assets/views/routes/users.html",
        failureRedirect: '/'
    })
);

router.get('/*', function(req, res, next){
    var file = req.params[0] || "/assets/views/index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;