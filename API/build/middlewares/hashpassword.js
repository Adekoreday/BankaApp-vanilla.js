"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var hashPassword = function hashPassword(req, res, next) {
  var salt = _bcrypt["default"].genSaltSync(15);

  var password = _bcrypt["default"].hashSync(req.body.password, salt);

  req.body.password = password;
  next();
};

var _default = hashPassword;
exports["default"] = _default;
//# sourceMappingURL=hashpassword.js.map