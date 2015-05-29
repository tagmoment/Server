var express = require('express');
var router = express.Router();
var fs = require('fs'),
    path = require('path');

/* GET users listing. */
router.get('/configuration', function(req, res, next) {
    var filePath = __dirname + "/../config/configuration.json";
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) throw err;
        var json = JSON.parse(data);
        res.json(json);
    });
});
module.exports = router;

