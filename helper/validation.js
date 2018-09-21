var _ = require('lodash')
module.exports = {
  validate: function (object, schema, callback) {
    var error = {};
    // argument validation
    if (_.isUndefined(arguments[0]) || _.isUndefined(arguments[1])) {
      error = {        
        message: "validate function called with wrong arguments",
        severity: "error"
      }
    }
    if (!_.isObject(arguments[0]) || !_.isObject(arguments[1])) {
      error = {        
        message: "validate function called with wrong argument data types",
        severity: "error"
      }
    }
    // error = _.isEmpty(error) ? _.assign(error, functions.schemaValidation(arguments[1])) : error;

    // error = _.isEmpty(error) ? _.assign(error, functions.objectValidation(object, schema)) : error;
    return error;
  }
}