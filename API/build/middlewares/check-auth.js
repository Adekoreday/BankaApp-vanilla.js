"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var verifyToken = function verifyToken(req, res, next) {
  try {
    var token = req.headers.authorization.split(' ')[1];

    var decoded = _jsonwebtoken["default"].verify(token, process.env.SECRET_KEY);

    req.userData = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      msg: 'Auth failed token couldn\'t be verified',
      data: "this was the error msg ".concat(err)
    });
  }
};

var _default = verifyToken;
exports["default"] = _default;
//# sourceMappingURL=check-auth.js.map