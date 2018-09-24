const jsonpatch = require('json-patch')
module.exports = {
	jsonPatchingController : function(req, res, next){
		var attributes = req.controller.args;
		var doc = attributes.doc;
		var patchObj = attributes.patchObj;
		var patch = jsonpatch.apply(doc, patchObj);
    	res.status(200).send({ patch: patch });
	}
}