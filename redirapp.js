var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();
var config = require('./config');

module.exports = api;

api.get('/', function (request) {
  var userAgent = request.context.userAgent;
  var location = config.default;

  if (/android/i.test(userAgent)) {
      location = config.android || config.default;
  } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      location = config.ios || config.default;
  } else if (/windows phone/i.test(userAgent)) {
      location = config.windows || config.default;
  }

  return new api.ApiResponse("", { "Location": location }, 301);
});
