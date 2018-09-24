module.exports = {
	jsonPatchingResource: function(req, res, next){
    	try{     
	      var attributes= {
	        doc: req.body.doc,
	        patchObj: req.body.patchObj
	      };
	      req.controller = {}
	      req.controller.args = attributes;
	      next();
	    }
	    catch(error){
	      var display = 'Json patching Failed retry...jsonPatchingResource';
	      req.error = error
	      utils.errorFunctionNew(error, display,req, res)
	      next();
	    }
    }
}