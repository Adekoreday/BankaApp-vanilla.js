(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SessionStorage =
/*#__PURE__*/
function () {
  function SessionStorage() {
    _classCallCheck(this, SessionStorage);
  }

  _createClass(SessionStorage, null, [{
    key: "storeData",
    value: function storeData(name, data) {
      var Data = JSON.stringify(data);
      sessionStorage.setItem(name, Data);
    }
  }, {
    key: "RemoveData",
    value: function RemoveData(name) {
      sessionStorage.removeItem(name);
    }
  }, {
    key: "getData",
    value: function getData(name) {
      var data = JSON.parse(sessionStorage.getItem(name));
      return data;
    }
  }]);

  return SessionStorage;
}();

var _default = SessionStorage;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var dateTime = function dateTime(date) {
  var d = new Date(date);
  return d.toString().slice(0, 15);
};

var _default = dateTime;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Fetch =
/*#__PURE__*/
function () {
  function Fetch(token) {
    _classCallCheck(this, Fetch);

    this.authToken = token;
  }

  _createClass(Fetch, [{
    key: "get",
    value: function get(url) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        console.log("Bearer ".concat(_this.authToken));
        fetch(url, {
          method: "GET",
          headers: {
            'Content-type': 'application/json',
            'authorization': 'Bearer ' + _this.authToken
          },
          mode: 'cors'
        }).then(function (response) {
          return response.json();
        }).then(function (result) {
          return resolve(result);
        })["catch"](function (err) {
          reject("Oops!! NETWORK FAILED...");
        });
      });
    }
  }, {
    key: "post",
    value: function post(url, data) {
      return new Promise(function (resolve, reject) {
        fetch(url, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          mode: 'cors',
          body: JSON.stringify(data)
        }).then(function (response) {
          return response.json();
        }).then(function (result) {
          return resolve(result);
        })["catch"](function (err) {
          reject("Oops!! NETWORK FAILED...");
        });
      });
    }
  }, {
    key: "patch",
    value: function patch(url, data) {
      return fetch(url, {
        method: "PATCH",
        headers: {
          'Content-type': 'application/json',
          'authorization': 'Bearer ' + this.authToken
        },
        mode: 'cors',
        body: JSON.stringify(data)
      });
    }
  }, {
    key: "delete",
    value: function _delete(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json',
          'authorization': 'Bearer ' + this.authToken
        },
        mode: 'cors'
      });
    }
    /*  handleResponse(response) {
          if(response.ok){
            console.log('response',response);
                return response.json();}
                else{
                throw new Error(`Request rejected with status ${response.status}`);
              }
              }*/

  }, {
    key: "PostAuth",
    value: function PostAuth(url, mdata) {
      return fetch(url, {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
          'authorization': 'Bearer ' + this.authToken
        },
        mode: 'cors',
        body: JSON.stringify(mdata)
      });
    }
  }]);

  return Fetch;
}();

var _default = Fetch;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helpers =
/*#__PURE__*/
function () {
  function Helpers(indicator) {
    _classCallCheck(this, Helpers);

    this.indicator = indicator;
  }

  _createClass(Helpers, [{
    key: "meetLength",
    value: function meetLength(field, minLength, maxLength) {
      if (field.value.length >= minLength && field.value.length <= maxLength) {
        this.setValid(field);
        return true;
      } else if (field.value.length < minLength) {
        this.setInvalid(field, "".concat(field.name, " must be  ").concat(minLength, " in length"));
        return false;
      } else {
        this.setInvalid(field, "".concat(field.name, " must be less than ").concat(maxLength, " in length "));
        return false;
      }
    }
  }, {
    key: "checkIfEmpty",
    value: function checkIfEmpty(field) {
      if (this.isEmpty(field.value.trim())) {
        // set field invalid
        this.setInvalid(field, "".concat(field.name, " is required"));
        return true;
      } else {
        // set field valid
        this.setValid(field);
        return false;
      }
    }
  }, {
    key: "checkIfOnlyLetters",
    value: function checkIfOnlyLetters(field) {
      if (/^[a-zA-Z ]+$/.test(field.value)) {
        this.setValid(field);
        return true;
      } else {
        this.setInvalid(field, "".concat(field.name, " must be letters"));
        return false;
      }
    }
  }, {
    key: "checkIfonlyNumbers",
    value: function checkIfonlyNumbers(field) {
      if (/^\d+$/.test(field.value)) {
        this.setValid(field);
        return true;
      } else {
        this.setInvalid(field, "".concat(field.name, " must be numbers only"));
        return false;
      }
    }
  }, {
    key: "checkifEmail",
    value: function checkifEmail(field) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value)) {
        this.setValid(field);
        return true;
      } else {
        this.setInvalid(field, "".concat(field.name, " must be a valid email"));
        return false;
      }
    } //password must contain upper case lower case and a password..........

  }, {
    key: "containsCharacter",
    value: function containsCharacter(field) {
      if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(field.value)) {
        return true;
      } else {
        this.setInvalid(field, "".concat(field.name, " must contain upper lower case letter and a number"));
        return false;
      }
    }
  }, {
    key: "isEmpty",
    value: function isEmpty(value) {
      if (value === '') return true;
      return false;
    }
  }, {
    key: "setInvalid",
    value: function setInvalid(field, message) {
      field.classList.add('invalid');
      this.indicator.innerHTML = message;
    }
  }, {
    key: "setValid",
    value: function setValid(field) {
      field.classList.remove('invalid');
      this.indicator.innerHTML = '';
    }
  }], [{
    key: "createElement",
    value: function createElement(element) {
      return document.createElement(element);
    }
  }, {
    key: "appendElement",
    value: function appendElement(parent, element) {
      return parent.appendChild(element);
    }
  }]);

  return Helpers;
}();

var _default = Helpers;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helpers = _interopRequireDefault(require("../helpers/helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validators =
/*#__PURE__*/
function () {
  function Validators() {
    _classCallCheck(this, Validators);
  }

  _createClass(Validators, null, [{
    key: "ValidateTextInput",
    value: function ValidateTextInput(field, indicator) {
      //check if its not empty
      var myhelpers = new _helpers["default"](indicator);
      if (myhelpers.checkIfEmpty(field)) return; // is if it has only letters

      if (!myhelpers.checkIfOnlyLetters(field)) return;
      return true;
    }
  }, {
    key: "validatePassword",
    value: function validatePassword(password, indicator) {
      // Empty check
      var myhelpers = new _helpers["default"](indicator);
      if (myhelpers.checkIfEmpty(password)) return; // Must of in certain length

      if (!myhelpers.meetLength(password, 5, 100)) return;
      if (!myhelpers.containsCharacter(password)) return;
      return true;
    }
  }, {
    key: "validateAccountNumberOnly",
    value: function validateAccountNumberOnly(field, indicator) {
      var myhelpers = new _helpers["default"](indicator);
      if (!myhelpers.checkIfonlyNumbers(field)) return;
      if (!myhelpers.meetLength(field, 10, 10)) return;
      return true;
    }
  }, {
    key: "validatetNumberOnly",
    value: function validatetNumberOnly(field, indicator) {
      var myhelpers = new _helpers["default"](indicator);
      if (!myhelpers.checkIfonlyNumbers(field)) return;
      if (!myhelpers.meetLength(field, 1, 20)) return;
      return true;
    }
  }, {
    key: "validateEmail",
    value: function validateEmail(field, indicator) {
      var myhelpers = new _helpers["default"](indicator);
      if (myhelpers.checkIfEmpty(field)) return;
      if (!myhelpers.checkifEmail(field)) return;
      return true;
    }
  }, {
    key: "validateConfirmPassword",
    value: function validateConfirmPassword(password, confirmPassword, indicator) {
      var myhelpers = new _helpers["default"](indicator);

      if (password.className === 'invalid') {
        myhelpers.setInvalid(confirmPassword, 'Password must be valid');
        return;
      } // If they match


      if (password.value !== confirmPassword.value) {
        myhelpers.setInvalid(confirmPassword, 'Passwords must match');
        return;
      } else {
        myhelpers.setValid(confirmPassword);
      }

      return true;
    }
  }]);

  return Validators;
}();

var _default = Validators;
exports["default"] = _default;

},{"../helpers/helpers":4}],6:[function(require,module,exports){
"use strict";

var _validators = _interopRequireDefault(require("../../js/clients/validator/validators"));

var _SessionStorage = _interopRequireDefault(require("../clients/helpers/SessionStorage"));

var _fetch = _interopRequireDefault(require("../clients/helpers/fetch"));

var _dateFormater = _interopRequireDefault(require("../clients/helpers/dateFormater"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CheckModal1 =
/*#__PURE__*/
function () {
  function CheckModal1() {
    _classCallCheck(this, CheckModal1);

    this.checkmodalContainers = document.createElement('div');
    this.checkmodalContainers.className = 'Modal';
    this.checkmodalContainers.id = "modalId";
    document.body.appendChild(this.checkmodalContainers);
    var contentContainer = document.createElement('div');
    contentContainer.className = 'adminmaincontainer';
    this.checkmodalContainers.appendChild(contentContainer);
    var closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.className = 'close-button';
    contentContainer.appendChild(closeButton);
    closeButton.addEventListener('click', this.close.bind(this));
    this.content = document.createElement('div');
    this.content.className = 'admincontainer';
    contentContainer.appendChild(this.content);
  }

  _createClass(CheckModal1, [{
    key: "open",
    value: function open() {
      this.checkmodalContainers.classList.add('open');
    }
  }, {
    key: "close",
    value: function close() {
      this.checkmodalContainers.classList.remove('open');
    }
  }, {
    key: "html",
    set: function set(value) {
      this.content.innerHTML = value;
    }
  }]);

  return CheckModal1;
}();

var m = new CheckModal1();
var width = 0;
width += 5;
if (width > 100) width = 0;
var bar = document.getElementById("myProgress");
var mybar = document.getElementById("myBar");
var Indicator = document.getElementById('indicator');
bar.style.display = 'none';
window.addEventListener('load', function () {
  var userdata = _SessionStorage["default"].getData('UserData');

  var username = document.getElementById('username');
  username.innerHTML = userdata.firstname.toUpperCase();
});
document.getElementById('HISTORY').addEventListener('click', function () {
  m.html = "\n    <table>\n    <tr>\n    <input type=\"text\" placeholder=\"ENTER ACCOUNT\" required>\n    </tr>\n  <tr>\n      <td data-label=\"\"><input type=\"submit\" id=\"submit\" value=\"Search\"></td>\n    </tr>\n    </table>\n\n <table>\n  <caption>TRANSACTION HISTORY</caption>\n  \n  <thead>\n    <tr>\n      <th scope=\"col\">ID</th>\n      <th scope=\"col\">Account</th>\n      <th scope=\"col\">AMOUNT</th>\n      <th scope=\"col\">OLD BALANCE</th>\n      <th scope=\"col\">NEW BALANCE</th>\n      <th scope=\"col\">DATE</th>\n\n    </tr>\n  </thead>\n  <tbody>\n   \n     <tr>\n      <td data-label=\"ID\">1</td>\n      <td data-label=\"Account\">0121832011</td>\n      <td data-label=\"AMOUNT\">2500</td>\n      <td data-label=\"OLD BAL\">#2500</td>\n      <td data-label=\"NEW BAL\">#5000</td>\n      <td data-label=\"DATE\">04/29/2019</td>\n    </tr>\n     <tr>\n      <td data-label=\"ID\">2</td>\n      <td data-label=\"Account\">0121832011</td>\n      <td data-label=\"AMOUNT\">2500</td>\n      <td data-label=\"OLD BAL\">#2500</td>\n      <td data-label=\"NEW BAL\">#5000</td>\n      <td data-label=\"DATE\">04/29/2019</td>\n    </tr>\n     <tr>\n      <td data-label=\"ID\">3</td>\n      <td data-label=\"Account\">0121832011</td>\n      <td data-label=\"AMOUNT\">2500</td>\n      <td data-label=\"OLD BAL\">#2500</td>\n      <td data-label=\"NEW BAL\">#5000</td>\n      <td data-label=\"DATE\">04/29/2019</td>\n    </tr>\n  </tbody>\n</table>\n    ";
  m.open();
});
document.getElementById('newAccount').addEventListener('click', function () {
  m.html = " <div class=\"col icon\">\n    \n        <i class=\"fas fa-female fa-3x \"></i>\n      </div>\n       <div class=\"col\">       \n          <span id=\"indicators\"></span>          \n         <input type=\"text\" id=\"Type\" placeholder=\"ENTER ACCOUNT TYPE\" required>\n        <input type=\"text\" id=\"Balance\" placeholder=\"OPENING BALANCE\" required>\n        <input type=\"submit\" id=\"submit\" value=\"SUBMIT\">\n                      <div id=\"myProgress\" class=\"progress\">\n        <div id=\"myBar\" class=\"bar\"></div>\n      </div>\n      ";
  m.open();

  var userdatas = _SessionStorage["default"].getData('UserData');

  var url = 'https://bankaandela.herokuapp.com/api/v1/account';
  var Indicators = document.getElementById('indicators');
  var CreateUser = document.getElementById('submit');
  var Type = document.getElementById('Type');
  var Balance = document.getElementById('Balance');
  var bar = document.querySelector(".progress");
  var mybar = document.querySelector(".bar");
  bar.style.display = 'none'; //check validation if all pass then loads the appopriate page......

  var i = 0;
  CreateUser.addEventListener('click', function () {
    if (_validators["default"].ValidateTextInput(Type, Indicators) && _validators["default"].validatetNumberOnly(Balance, Indicators)) {
      CreateUser.disabled = true;
      console.log(bar);
      var UserData = {
        Type: Type.value,
        balance: Balance.value
      };
      bar.style.display = 'block';
      var t = setInterval(function () {
        width += 10;

        if (width > 100) {
          width = 0;
        }

        mybar.style.width = "".concat(width, "%");
        console.log('width values', width);
      }, 1000);
      var postdata = new _fetch["default"](userdatas.token);
      postdata.PostAuth(url, UserData).then(function (response) {
        response.json();
        var obj = {
          result: response.json(),
          status: response.status
        };
        return obj;
      }).then(function (obj) {
        var result = obj.result;
        bar.style.display = 'none';
        clearTimeout(t);
        var results = result.status;
        console.log('results equals', results);
        console.log('mydata', result);

        switch (obj.status) {
          case 401:
            console.log("sign out");
            window.location.href = '../index.html';
            break;

          case 201:
            Indicators.style.color = "blue";
            Indicators.innerHTML = "account  ".concat(result.Data.accountnumber, "  created sucessfully");
            CreateUser.value = 'close';
            CreateUser.disabled = false;
            CreateUser.addEventListener('click', function () {
              m.close();
            });
            break;
        }
      });
    }
  });
});
var allaccount = document.getElementById('allAccounts');
allaccount.addEventListener('click', function () {
  Indicator.innerHTML = ' ';
  allaccount.disabled = true;
  var mydata = " ";
  bar.style.display = 'block';

  var userdata = _SessionStorage["default"].getData('UserData');

  var url = "https://bankaandela.herokuapp.com/api/v1/user/".concat(userdata.email, "/accounts");
  var t = setInterval(function () {
    width += 10;

    if (width > 100) {
      width = 0;
    }

    mybar.style.width = "".concat(width, "%");
  }, 1000);
  var myfetch = new _fetch["default"](userdata.token);
  myfetch.get(url).then(function (result) {
    clearTimeout(t);
    bar.style.display = 'none';
    allaccount.disabled = false;

    if (result.status === 200) {
      var i = 1;
      result.data.map(function (x) {
        mydata += " <tr>\n      <td data-label=\"S/N\">".concat(i++, "</td>\n      <td data-label=\"Account\">").concat(x.accountnumber, "</td>\n      <td data-label=\"DETAILS\">").concat((0, _dateFormater["default"])(x.createdon), "</td>\n      <td data-label=\"TYPE\">").concat(x.type, "</td>\n      <td data-label=\"STATUS\">").concat(x.status, "</td>\n      <td data-label=\"BALANCE\">").concat(x.balance, "</td>\n    </tr>");
      });
      m.html = "\n <table>\n  <caption>Statement Summary</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">id</th>\n      <th scope=\"col\">Account</th>\n      <th scope=\"col\">DETAILS</th>\n       <th scope=\"col\">TYPE</th>\n       <th scope=\"col\">STATUS</th>\n      <th scope=\"col\">BALANCE(#)</th>\n    </tr>\n  </thead>\n  <tbody>\n    ".concat(mydata, "\n  </tbody>\n</table>\n    ");
      m.open();
    } else {
      Indicator.innerHTML = result.msg;
    }
  })["catch"](function (err) {
    clearTimeout(t);
    bar.style.display = 'none';
    Indicator.innerHTML = err;
    allaccount.disabled = false;
  });
});

},{"../../js/clients/validator/validators":5,"../clients/helpers/SessionStorage":1,"../clients/helpers/dateFormater":2,"../clients/helpers/fetch":3}]},{},[6]);
