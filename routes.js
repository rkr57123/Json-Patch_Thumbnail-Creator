var express = require('express');
var app = module.exports = require('express')();
// var router = express.Router();

app.use('/api', require('./api'));


// module.exports = router;