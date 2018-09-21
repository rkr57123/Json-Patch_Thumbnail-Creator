var app  = require('express')();
app.use('/jsonpatch', require('./jsonpatch'));

module.exports = app;
