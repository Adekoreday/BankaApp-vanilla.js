"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Accountdb = _interopRequireDefault(require("../../utils/Accountdb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AccountService =
/*#__PURE__*/
function () {
  function AccountService() {
    _classCallCheck(this, AccountService);

    this.data = _Accountdb["default"];
  }

  _createClass(AccountService, [{
    key: "addNewAccount",
    value: function addNewAccount(newAccount) {
      var myAccount = newAccount;
      var length = this.data.length;
      var id = this.data[length - 1].id;
      id += 1;
      myAccount.id = id;
      this.data.push(myAccount);
      return myAccount;
    }
  }, {
    key: "patchAccount",
    value: function patchAccount(userput, accountNumber) {
      var selectedAccount = this.data.find(function (user) {
        return parseInt(user.accountNumber, 10) === parseInt(accountNumber, 10);
      });
      console.log('my selected acc', selectedAccount);
      selectedAccount.status = userput.status;
      return selectedAccount;
    }
  }, {
    key: "deleteAccount",
    value: function deleteAccount(accountNumber) {
      var selectedAccount = this.data.find(function (user) {
        return parseInt(user.accountNumber, 10) === parseInt(accountNumber, 10);
      });
      this.data.splice(selectedAccount.id - 1, 1);
      return this.data;
    }
  }]);

  return AccountService;
}();

var _default = AccountService;
exports["default"] = _default;
//# sourceMappingURL=AccountService.js.map