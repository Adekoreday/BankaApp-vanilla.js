"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _AccountService = _interopRequireDefault(require("../services/AccountService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AccountController =
/*#__PURE__*/
function () {
  function AccountController() {
    _classCallCheck(this, AccountController);

    this.AccountServices = new _AccountService["default"]();
  }

  _createClass(AccountController, [{
    key: "createAccount",
    value: function createAccount(req, res) {
      var createdAcc = this.AccountServices.addNewAccount(req.AccountInput);
      createdAcc.firstName = req.passedUser.firstName;
      createdAcc.lastName = req.passedUser.lastName;
      createdAcc.email = req.passedUser.email;
      res.status(200).json({
        status: 200,
        data: createdAcc
      });
    }
  }, {
    key: "patchAccount",
    value: function patchAccount(req, res) {
      var accountNo = req.params.id;
      var patchedAccount = this.AccountServices.patchAccount(req.body, accountNo);
      console.log('active status', patchedAccount);
      res.status(200).json({
        status: 200,
        data: {
          accountNumber: patchedAccount.accountNumber,
          status: patchedAccount.status
        }
      });
    }
  }, {
    key: "deleteAccount",
    value: function deleteAccount(req, res) {
      var accountNo = req.params.id;
      var remainingAcc = this.AccountServices.deleteAccount(accountNo);
      console.log('remainig after delete', remainingAcc);
      res.status(200).json({
        status: 200,
        data: {
          status: 200,
          msg: 'deleted sucessfully'
        }
      });
    }
  }]);

  return AccountController;
}();

var _default = AccountController;
exports["default"] = _default;
//# sourceMappingURL=Account_controller.js.map