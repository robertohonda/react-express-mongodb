"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _test = _interopRequireDefault(require("./test"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();
/** GET /health-check - Check service health */


router.get('/health-check', function (req, res) {
  return res.send('OK');
});
router.use('/test', _test.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map