"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.route('/').get(function (req, res) {
  return res.json({
    message: 'hahaha'
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=test.js.map