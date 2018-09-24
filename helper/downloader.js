const request = require('request')
const fs = require('fs')
module.exports = {
	downloader: function(url, filename,callback){
		request.head(url, function(err, res, body){
			if(err) throw err
			request(url).pipe(fs.createWriteStream('./images/'+filename)).on('close', callback);
		})				
	}
}
