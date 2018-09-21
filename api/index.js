var express = require('express');
var app = module.exports = require('express')();

app.use('/user', require('./user'));
app.use('/jsonpatch', require('./jsonpatch'));
app.use('/thumbnail',require('./thumbnail'))
