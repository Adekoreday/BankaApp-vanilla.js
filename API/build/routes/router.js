"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HandleAllRoutes = exports.Router = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _validators = _interopRequireDefault(require("../middlewares/validators"));

var _user_controller = _interopRequireDefault(require("../controllers/user_controller"));

var _Account_controller = _interopRequireDefault(require("../controllers/Account_controller"));

var _transaction_controller = _interopRequireDefault(require("../controllers/transaction_controller"));

var _hashpassword = _interopRequireDefault(require("../middlewares/hashpassword"));

var _transactionScafolld = _interopRequireDefault(require("../middlewares/transactionScafolld"));

var _AccountScafold = _interopRequireDefault(require("../middlewares/AccountScafold"));

var _checkAuth = _interopRequireDefault(require("../middlewares/check-auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());

var Router =
/*#__PURE__*/
function () {
  function Router() {
    _classCallCheck(this, Router);

    this.app = app;
  }

  _createClass(Router, [{
    key: "init",
    value: function init() {
      var port = process.env.PORT || 3000;
      this.app.listen(port);
    }
  }]);

  return Router;
}();

exports.Router = Router;

var HandleAllRoutes =
/*#__PURE__*/
function (_Router) {
  _inherits(HandleAllRoutes, _Router);

  function HandleAllRoutes() {
    var _this;

    _classCallCheck(this, HandleAllRoutes);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HandleAllRoutes).call(this));
    _this.Validator = _validators["default"];
    _this.UserController = new _user_controller["default"]();
    _this.AccountController = new _Account_controller["default"]();
    _this.TransactionController = new _transaction_controller["default"]();
    return _this;
  }

  _createClass(HandleAllRoutes, [{
    key: "HandleAllRoute",
    value: function HandleAllRoute() {
      var _this2 = this;

      this.app.post('/api/v1/auth/sign-up', this.Validator.SignUpValidator, _hashpassword["default"], function (req, res) {
        _this2.UserController.SignUp(req, res);
      });
      this.app.post('/api/v1/auth/sign-In', this.Validator.SignInValidator, function (req, res) {
        _this2.UserController.SignIn(req, res);
      });
      this.app.post('/api/v1/auth/accounts', _checkAuth["default"], _AccountScafold["default"], this.Validator.CreateAccountValidator, function (req, res) {
        _this2.AccountController.createAccount(req, res);
      });
      this.app.patch('/api/v1/:id', this.Validator.patchAccountValidator, function (req, res) {
        _this2.AccountController.patchAccount(req, res);
      });
      this.app["delete"]('/api/v1/:id', function (req, res) {
        _this2.AccountController.deleteAccount(req, res);
      });
      this.app.post('/api/v1/transactions/:accountNumber/:transactionType', _transactionScafolld["default"], this.Validator.transactionValidator, function (req, res) {
        _this2.TransactionController.processTransaction(req, res);
      });
    }
  }]);

  return HandleAllRoutes;
}(Router);

exports.HandleAllRoutes = HandleAllRoutes;
//# sourceMappingURL=router.js.map