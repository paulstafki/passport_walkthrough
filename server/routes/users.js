var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    //console.log("Log in!");
    res.json(req.isAuthenticated());
    //res.sendFile(path.resolve(__dirname, '../views/users.html'));
});

module.exports = router;