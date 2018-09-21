var _ = require('lodash'),
  Promise = require('bluebird'),
  exceptions = require('./exception')
  //redisClient = require('./redis').redisClient,
const uuid = require('uuid');
const nJwt =  require('njwt');
console.log('---------------')

var tokenMissingMessage = 'unauthorised request';


function authAPI (token) {

    return new Promise(function (resolve, reject) {
      try{
          var secretKey = '1234'//uuid.v4();
          nJwt.verify(token,secretKey,function(err,verifiedJwt){
            if(err){
              console.log(err); // Token has expired, has been tampered with, etc
              reject(tokenMissingMessage);
              return;
            } else {
              resolve(verifiedJwt);
              return;
            }
          });
      } catch(e) {
        reject(e);
        return;
      }
    })  

  }


module.exports = {
  notLoggedInFilterAdmin: function(req, res, next){
    req.user = {};
    next();
  },

  authFilter: function (req, res, next) {
    if (_.has(req.headers, 'token')) {
      authAPI(req.headers.token).then((data) => {
        // console.log('------------1',data);
        req.user = data;
        next();
      }).catch((err) => {
        req.error =  new Error(tokenMissingMessage);
        exceptions.customException(req, res, tokenMissingMessage, 403);
      })
    } else {
      req.error =  new Error(tokenMissingMessage);
      exceptions.customException(req, res, tokenMissingMessage, 403);
    }
  }
}