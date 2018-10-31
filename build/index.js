"use strict";

var _express = _interopRequireDefault(require("./config/express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_express.default.listen(8080, function () {
  return console.log('Listening on port 8080!');
});
//# sourceMappingURL=index.js.map