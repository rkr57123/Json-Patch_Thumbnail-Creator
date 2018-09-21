const helper = require('../../helper'),
	downloader = helper.downloader
var fs = require('fs'),
    request = require('request');

module.exports = {
	createThumbnailResource: function(req, res, next){
    	// var url = req.body.url;
    	// console.log('---------', url)
    	// var filename = "google.png";
    	// downloader.downloader(url, filename, function(){
    	// 	console.log('downloading done');
    	// });
   		next();
    }
}