"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _generateAccountNumber = _interopRequireDefault(require("../../utils/generateAccountNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transaction = function Transaction() {
  _classCallCheck(this, Transaction);

  this.Joi = _joi["default"];
  this.TransactionSchema = {
    createdOn: this.Joi.string().required(),
    Transactiontype: this.Joi.string().required().required(),
    accountNumber: _joi["default"].number().integer().min(1000000000).required(),
    cashier: this.Joi.number().integer(),
    amount: this.Joi.number().integer(),
    oldBalance: this.Joi.number().integer(),
    newBalance: this.Joi.number().integer()
  };
};

var _default = Transaction;
exports["default"] = _default;
//# sourceMappingURL=transaction.js.map