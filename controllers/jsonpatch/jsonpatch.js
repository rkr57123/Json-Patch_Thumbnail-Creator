const jsonpatch = require('json-patch')
module.exports = {
	jsonPatchingController : function(req, res, next){
		var attributes = req.controller.args;
		var doc = attributes.doc;
        console.log('===============12control',doc)  
		var patchObj = attributes.patchObj;
		console.log('===============134444441',patchObj)
		var patch = jsonpatch.apply(doc, patchObj);
		console.log('===============134444441')
    	res.status(200).send({ patch: patch });
	}
}