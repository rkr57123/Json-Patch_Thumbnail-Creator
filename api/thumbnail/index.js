var app  = require('express')();
app.use('/thumbnail', require('./thumbnail'));

module.exports = app;
