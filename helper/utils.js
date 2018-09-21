const exception = require('./exception');
module.exports = {
errorFunctionNew: function (error, display, req, res) {
    var obj = {
      statusMessage: "n",
      statusCode: "400",
      status: false,
      error: req.error.message
    };
    // var options = utils.loggingApi(_.cloneDeep(req), obj);
    // httpRequestor(options.method, options.uri, options);
    exception.customException(req, res, error, 200);
  }
}