const helper = require('../../helper'),
	downloader = helper.downloader,
	thumb_create = require('node-thumbnail').thumb;

module.exports = {
	createThumbnailController : function(req, res, next){
		var url = req.body.url;
    	var filename = "original_image.png";    	
		downloader.downloader(url,filename,function(){
			thumb_create({
				source: './images/original_image.png', // could be a filename: dest/path/image.jpg
				destination: './images',
				width: 50,
				height: 50,
				overwrite: true,
				concurrency: 4
				}, function(files, err) {
					if(err) throw err;
					res.send({'status':'success'})
			});
		})		
	}
}