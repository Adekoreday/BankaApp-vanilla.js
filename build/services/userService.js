"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userdb = _interopRequireDefault(require("../../utils/userdb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserService =
/*#__PURE__*/
function () {
  function UserService() {
    _classCallCheck(this, UserService);

    this.data = _userdb["default"];
  }
  /*
      fetchAllUsers() {
          return this.data.map(users => users);
      } */


  _createClass(UserService, [{
    key: "addNewUser",
    value: function addNewUser(newUser) {
      var myUser = newUser;
      var length = this.data.length;
      var id = this.data[length - 1].id;
      id += 1;
      myUser.id = id;
      this.data.push(myUser);
      return myUser;
    }
    /*
        getUserbyId(id) {
            const selectedUser = this.data.find(user => parseInt(user.id, 10) === parseInt(id, 10));
            return selectedUser;
        } */

  }, {
    key: "userExistBefore",
    value: function userExistBefore(mail) {
      var check = this.data.find(function (user) {
        return user.email === mail;
      });
      return check;
    }
    /*
        putUser(userput, id) {
            const selectedUser = this.data.find(user => parseInt(user.id, 10) === parseInt(id, 10));
            selectedUser.firstName = userput.firstName;
            selectedUser.lastName = userput.lastName;
            selectedUser.email = userput.email;
            selectedUser.isAdmin = userput.isAdmin;
            return selectedUser;
        }
    
        deleteUser(id) {
            const selectedUser = this.data.find(user => parseInt(user.id, 10) === parseInt(id, 10));
            this.data.splice(selectedUser.id - 1, 1);
            return this.data;
    
        } */

  }]);

  return UserService;
}();

var _default = UserService;
exports["default"] = _default;
//# sourceMappingURL=userService.js.map