const helper = require('../../helper'),
	// reqParser = helper.reqParser,
	utils = helper.utils,
	validation= helper.validation;
	// crypto= helper.crypto;

module.exports = {
	loginResource: function(req, res, next){
	    var schema = {
			forbidden: [],
			username: {
				type: 'string',
				isRequired: true
			},
			password: {
				type: 'string',
				max: 255,
				isRequired: true
			}
	    }
	    var validationObj = validation.validate(req.body,schema)
	    if(validationObj.severity){
	      req.error = new Error(validationObj.message)
	      utils.errorFunctionNew(validationObj, validationObj.message, req, res);
	      next();
	    }

	    try{      
	      var attributes= {
	        username: req.body.username,
	        password: req.body.password
	      };
	      req.controller = {}
	      req.controller.args = attributes;
	      next();
	    }
	    catch(error){
	      var display = 'User Login Failed retry...loginResource';
	      req.error = error
	      utils.errorFunctionNew(error, display,req, res)
	      next();
	    }
	}
}