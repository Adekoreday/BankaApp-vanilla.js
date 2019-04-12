"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

var _router = require("./routes/router");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(0, _dotenv.config)();

var App =
/*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);

    this.Routerobj = new _router.Router();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      this.Routerobj.init();
      var handleAllRoutes = new _router.HandleAllRoutes();
      handleAllRoutes.HandleAllRoute();
    }
  }]);

  return App;
}();

var initialize = new App();
initialize.init();
var _default = initialize.Routerobj.app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map