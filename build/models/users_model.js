"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User() {
  _classCallCheck(this, User);

  this.Joi = _joi["default"];
  this.UserSchema = {
    firstName: this.Joi.string().min(2).max(15).required(),
    lastName: this.Joi.string().min(2).max(15).required(),
    email: _joi["default"].string().email({
      minDomainAtoms: 2
    }).required(),
    password: this.Joi.string().min(5).required(),
    Type: this.Joi.string().required(),
    isAdmin: this.Joi["boolean"]().required()
  };
  this.UserSignInSchema = {
    email: _joi["default"].string().email({
      minDomainAtoms: 2
    }),
    password: this.Joi.string().min(5)
  };
};

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=users_model.js.map