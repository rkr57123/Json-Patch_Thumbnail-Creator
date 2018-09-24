const uuid = require('uuid')
const njwt =  require('njwt');
module.exports = {
	loginController: function(req, res, next){
		var attributes = req.controller.args;
        var secretKey = '1234'; //uuid.v4();
        var claims = {
			sub: attributes.username,
			iss: attributes.password,
			permissions: 'logged-in'
		}
		var jwtObj = njwt.create(claims,secretKey,'HS256');
		var token = jwtObj.compact();
		res.status(200).send({ auth: true, token: token });
	}
}