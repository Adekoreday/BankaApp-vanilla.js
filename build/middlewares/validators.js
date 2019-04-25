"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _users_model = _interopRequireDefault(require("../models/users_model"));

var _Account_model = _interopRequireDefault(require("../models/Account_model"));

var _transaction = _interopRequireDefault(require("../models/transaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validator =
/*#__PURE__*/
function () {
  function Validator() {
    _classCallCheck(this, Validator);
  }

  _createClass(Validator, null, [{
    key: "SignUpValidator",
    value: function SignUpValidator(req, res, next) {
      var Users = new _users_model["default"]();

      var result = _joi["default"].validate(req.body, Users.UserSchema);

      if (result.error) {
        return res.status(400).send(result.error.details.map(function (x) {
          return x.message;
        }));
      }

      next();
    }
  }, {
    key: "SignInValidator",
    value: function SignInValidator(req, res, next) {
      var Users = new _users_model["default"]();

      var result = _joi["default"].validate(req.body, Users.UserSignInSchema);

      if (result.error) {
        return res.status(401).send(result.error.details.map(function (x) {
          return x.message;
        }));
      }

      next();
    }
  }, {
    key: "CreateAccountValidator",
    value: function CreateAccountValidator(req, res, next) {
      var Accounts = new _Account_model["default"]();

      var result = _joi["default"].validate(req.AccountInput, Accounts.AccountSchema);

      if (result.error) {
        return res.status(400).send(result.error.details.map(function (x) {
          return x.message;
        }));
      }

      next();
    }
  }, {
    key: "patchAccountValidator",
    value: function patchAccountValidator(req, res, next) {
      var Accounts = new _Account_model["default"]();

      var result = _joi["default"].validate(req.body, Accounts.AccSignInSchema);

      if (result.error) {
        return res.status(400).send(result.error.details.map(function (x) {
          return x.message;
        }));
      }

      next();
    }
  }, {
    key: "transactionValidator",
    value: function transactionValidator(req, res, next) {
      var Transactions = new _transaction["default"]();

      var result = _joi["default"].validate(req.scafoldData, Transactions.TransactionSchema);

      if (result.error) {
        return res.status(400).send(result.error.details.map(function (x) {
          return x.message;
        }));
      }

      next();
    }
  }]);

  return Validator;
}();

var _default = Validator;
exports["default"] = _default;
//# sourceMappingURL=validators.js.map