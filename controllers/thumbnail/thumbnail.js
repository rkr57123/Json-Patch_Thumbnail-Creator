// var easyimage = require('easyimage');
// import {thumbnail} from "easyimage";
var Jimp = require('jimp');
var Promise = require('promise');
const helper = require('../../helper'),
	downloader = helper.downloader
var fs = require('fs'),
    request = require('request');


module.exports = {
	createThumbnailController : function(req, res, next){
		var url = req.body.url;
    	var filename = "google.png";
    	var promise = new Promise(function(resolve,reject){
    		try{
    			downloader.downloader(url, filename, function(){
    				console.log('downloading done');
    			})
    		}
    		catch(ex){
    			reject(ex)
    		}
    	}).then(function(){
    		console.log('----------------1')
    		Jimp.read('./google.png', (err, img) => {
    			console.log('----------------12')
		  	if (err){ throw err;}
		  	img
		    .resize(50,50) // resize
		    .write('google-small.png'); // save
			});
			console.log('----------------123')
    	})
    	// console.log(img);
    	// res.send({'status': 'successfully downloaded'});
		
		res.send({'status':'success'})
	}
}