"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Account = function Account() {
  _classCallCheck(this, Account);

  this.Joi = _joi["default"];
  this.AccountSchema = {
    accountNumber: _joi["default"].number().integer().min(1000000000).required(),
    createdOn: this.Joi.string().required(),
    password: this.Joi.string().min(5).required(),
    owner: _joi["default"].number().integer().min(1).required(),
    Type: this.Joi.string().required().required(),
    status: this.Joi.string().required(),
    balance: _joi["default"].number().integer()
  };
  this.AccSignInSchema = {
    status: this.Joi.string().required()
  };
};

var _default = Account;
exports["default"] = _default;
//# sourceMappingURL=Account_model.js.map