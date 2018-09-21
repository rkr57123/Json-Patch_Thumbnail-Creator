const request = require('request')
const fs = require('fs'),
	Path = require('path'),  
	Axios = require('axios')

module.exports = {
	downloader: function(url, filename, callback){
		request.head(url, function(err, res, body){
			request(url).pipe(fs.createWriteStream(filename)).on('close', callback);
		})
	}
	// downloader: function downloadImage (url, filename) {
	//   // const url = 'https://unsplash.com/photos/AaEQmoufHLk/download?force=true'
	// 	function getBase64(url) {
	//   		var base64Data = axios
	// 	    .get(url, {
	// 	      responseType: 'arraybuffer'
	// 	    })
	// 	    .then(response => new Buffer(response.data, 'binary').toString('base64'))
	// 	    Fs.writeFile("google.png", base64Data, 'base64', function(err) {
	// 		  console.log(err);
	// 		});
	// 	}
	// }
}
