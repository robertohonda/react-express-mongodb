"use strict";

var _express = _interopRequireDefault(require("./config/express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_express.default.listen(3001, function () {
  return console.log('Listening on port 3001!');
});
//# sourceMappingURL=index.js.map