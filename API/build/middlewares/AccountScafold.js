"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userService = _interopRequireDefault(require("../services/userService"));

var _generateAccountNumber = _interopRequireDefault(require("../../utils/generateAccountNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**The Account scaffold is reponsible for autogenerating required fields for an account 
 * after the user trys creating account by entering the type of account and password
 */
var AccountScafold = function AccountScafold(req, res, next) {
  var currentDateTime = new Date();
  var userServices = new _userService["default"]();
  var userdetails = req.userData;
  var userdata = userServices.userExistBefore(userdetails.email);

  if (userdata === undefined) {
    res.status(404).json({
      status: 404,
      msg: 'wrong email or password'
    });
  }

  req.passedUser = userdata;
  var AccountPayload = req.body;

  try {
    AccountPayload.accountNumber = (0, _generateAccountNumber["default"])();
  } catch (e) {
    return res.status(500).json({
      msg: 'failed to gen account'
    });
  }

  AccountPayload.status = 'active';
  AccountPayload.createdOn = currentDateTime.toString();
  AccountPayload.owner = userdata.id;
  console.log(AccountPayload);
  req.AccountInput = AccountPayload;
  next();
};

var _default = AccountScafold;
exports["default"] = _default;
//# sourceMappingURL=AccountScafold.js.map