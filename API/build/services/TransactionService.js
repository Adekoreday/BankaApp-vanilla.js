"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Transactiondb = _interopRequireDefault(require("../../utils/Transactiondb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TransactionService =
/*#__PURE__*/
function () {
  function TransactionService() {
    _classCallCheck(this, TransactionService);

    this.data = _Transactiondb["default"];
  }

  _createClass(TransactionService, [{
    key: "addNewTransaction",
    value: function addNewTransaction(Transact) {
      var myTransaction = Transact;
      var length = this.data.length;
      var id = this.data[length - 1].id;
      id += 1;
      myTransaction.id = id;
      this.data.push(myTransaction);
      return myTransaction;
    }
  }]);

  return TransactionService;
}();

var _default = TransactionService;
exports["default"] = _default;
//# sourceMappingURL=TransactionService.js.map