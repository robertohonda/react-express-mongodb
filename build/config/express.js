"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _os = _interopRequireDefault(require("os"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');

var app = (0, _express.default)();

_dotenv.default.config();

app.use((0, _morgan.default)('dev'));
app.use(_bodyParser.default.json());
app.use(_express.default.static('dist'));
app.get('/api/getUsername', function (req, res) {
  return res.json({
    username: _os.default.userInfo().username
  });
}); //app.use('/api', routes)

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=express.js.map