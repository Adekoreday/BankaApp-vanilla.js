"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _userService = _interopRequireDefault(require("../services/userService"));

var _validatepass = _interopRequireDefault(require("../../utils/validatepass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);

    this.UserService = new _userService["default"]();
  }

  _createClass(UserController, [{
    key: "SignUp",
    value: function SignUp(req, res) {
      var userdetails = req.body;
      var userExist = this.UserService.userExistBefore(userdetails.email);
      var userList;

      if (userExist === undefined) {
        userdetails.permission = userdetails.isAdmin === true ? 'admin' : 'user';

        var token = _jsonwebtoken["default"].sign({
          email: userdetails.email,
          permission: userdetails.permission
        }, process.env.SECRET_KEY, {
          expiresIn: '1h'
        });

        userdetails.token = token;
        userList = this.UserService.addNewUser(userdetails);
      }

      return res.status(userList === undefined ? 422 : 201).json({
        status: userList === undefined ? 422 : 201,
        Data: userList === undefined ? 'user already Exists' : userList
      });
    }
  }, {
    key: "SignIn",
    value: function SignIn(req, res) {
      var userKey = req.body;
      var userExist = this.UserService.userExistBefore(userKey.email);

      if (userExist !== undefined) {
        var validatepass = (0, _validatepass["default"])(userKey.password, userExist.password); // eslint-disable-next-line space-before-blocks

        if (validatepass) {
          var tokens = _jsonwebtoken["default"].sign({
            email: userExist.email,
            id: userExist.id
          }, process.env.SECRET_KEY, {
            expiresIn: '1h'
          });

          userExist.token = tokens;
          return res.status(200).json({
            status: 200,
            Data: userExist
          });
        }

        return res.status(401).json({
          status: 401,
          msg: 'wrong password.........'
        });
      }

      return res.status(404).json({
        status: 404,
        msg: 'user account not found'
      });
    }
  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;
//# sourceMappingURL=user_controller.js.map