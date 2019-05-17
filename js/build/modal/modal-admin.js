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
var id = 1;
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
var allaccount = document.getElementById('allAccounts');
allaccount.addEventListener('click', function () {
  Indicator.innerHTML = ' ';
  allaccount.disabled = true;
  var mydata = " ";
  bar.style.display = 'block';

  var userdata = _SessionStorage["default"].getData('UserData');

  var url = 'https://bankaandela.herokuapp.com/api/v1/accounts';
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
document.getElementById('DEACTIVATE').addEventListener('click', function () {
  Indicator.innerHTML = ' ';
  var mydata = " ";
  bar.style.display = 'block';

  var userdata = _SessionStorage["default"].getData('UserData');

  var url = 'https://bankaandela.herokuapp.com/api/v1/accounts?status=active';
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

    if (result.status === 200) {
      mydata = " ";
      var i = 1;
      var b = 0;
      result.data.map(function (x) {
        b = i++;
        mydata += "<tr> \n      <td data-label=\"S/N\">".concat(b, "</td>\n      <td data-label=\"Email\"> <div class=\"big-content\">").concat(x.email, "</div></td>\n      <td data-label=\"TYPE\">").concat(x.type, "</td>\n         <td data-label=\"Account\">").concat(x.accountnumber, "</td>\n         <td data-label=\"STATUS\">").concat(x.status, "</td>\n         <td data-label=\"BALANCE\">").concat(x.balance, "</td>\n        <td data-label=\"DEACTIVATE\">\n      <label class=\"switch\">\n  <input  type=\"checkbox\" id=").concat(b, " name=\"checkbox\" value=").concat(x.accountnumber, ">\n  <span class=\"slider round\"></span>\n</label>\n      </td>\n    </tr>");
      });
      m.html = "\n <table id=\"deactivateTable\">\n  <caption>DEACTIVATE</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">S/N</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">TYPE</th>\n      <th scope=\"col\">ACCOUNT</th>\n      <th scope=\"col\">STATUS</th>\n      <th scope=\"col\">BALANCE</th>\n      <th scope=\"col\">DEACTIVATE</th>\n    </tr>\n  </thead>\n  <tbody>\n  ".concat(mydata, "\n     </tbody>\n</table>\n    ");
      m.open();
    } else {
      Indicator.innerHTML = result.msg;
    }
  }).then(function () {
    var check = document.getElementsByName("checkbox");
    var i;

    for (i = 0; i < check.length; i++) {
      check[i].addEventListener('change', function (i) {
        var deactivateaccount = i.srcElement.value;
        var deactivateurl = "https://bankaandela.herokuapp.com/api/v1/account/".concat(deactivateaccount);
        var Dormant;

        if (i.srcElement.checked === true) {
          Dormant = {
            status: 'dormant'
          };
        } else {
          Dormant = {
            status: 'active'
          };
        }

        console.log(Dormant);
        myfetch.patch(deactivateurl, Dormant).then(function (response) {
          return response.json();
        }).then(function (result) {
          var element = document.getElementById('deactivateTable');
          var mydata = document.getElementById("".concat(i.srcElement.id));
          var row = element.rows[mydata.id];
          row.style.display = 'none';
          console.log("my data", result);
          console.log("row affected", row);
        })["catch"](function (err) {
          Indicator.innerHTML = err;
        });
      });
    }
  })["catch"](function (err) {
    clearTimeout(t);
    bar.style.display = 'none';
    Indicator.innerHTML = err;
  });
});
document.getElementById('ACTIVATE').addEventListener('click', function () {
  Indicator.innerHTML = ' ';
  var mydata = " ";
  bar.style.display = 'block';

  var userdata = _SessionStorage["default"].getData('UserData');

  var url = 'https://bankaandela.herokuapp.com/api/v1/accounts?status=dormant';
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

    if (result.status === 200) {
      mydata = " ";
      var i = 1;
      var b = 0;
      result.data.map(function (x) {
        b = i++;
        mydata += "<tr> \n       <td data-label=\"S/N\">".concat(b, "</td>\n      <td data-label=\"Email\"> <div class=\"big-content\">").concat(x.email, "</div></td>\n      <td data-label=\"TYPE\">").concat(x.type, "</td>\n         <td data-label=\"Account\">").concat(x.accountnumber, "</td>\n         <td data-label=\"STATUS\">").concat(x.status, "</td>\n         <td data-label=\"BALANCE\">").concat(x.balance, "</td>\n        <td data-label=\"DEACTIVATE\">\n      <label class=\"switch\">\n  <input id=").concat(b, " type=\"checkbox\" name=\"checkbox\" value=").concat(x.accountnumber, ">\n  <span class=\"slider round\"></span>\n</label>\n      </td>\n    </tr>");
      });
      m.html = "\n      \n <table id=\"activateTable\">\n  <caption>ACTIVATE</caption>\n  <thead>\n    <tr>\n     <th scope=\"col\">S/N</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">TYPE</th>\n      <th scope=\"col\">ACCOUNT</th>\n      <th scope=\"col\">STATUS</th>\n      <th scope=\"col\">BALANCE</th>\n      <th scope=\"col\">ACTIVATE</th>\n    </tr>\n  </thead>\n  <tbody>\n  ".concat(mydata, "\n     </tbody>\n</table>\n    ");
      m.open();
    } else {
      Indicator.innerHTML = result.msg;
    }
  }).then(function () {
    var check = document.getElementsByName("checkbox");
    var i;

    for (i = 0; i < check.length; i++) {
      check[i].addEventListener('change', function (i) {
        var activateaccount = i.srcElement.value;
        var activateurl = "https://bankaandela.herokuapp.com/api/v1/account/".concat(activateaccount);
        var element = document.getElementById('activateTable');
        var Dormant;

        if (i.srcElement.checked === true) {
          Dormant = {
            status: 'active'
          };
        } else {
          Dormant = {
            status: 'dormant'
          };
        }

        myfetch.patch(activateurl, Dormant).then(function (response) {
          return response.json();
        }).then(function (result) {
          var mydata = document.getElementById("".concat(i.srcElement.id));
          var row = element.rows[mydata.id];
          console.log("my data", result);
          row.style.display = 'none';
        })["catch"](function (err) {
          Indicator.innerHTML = err;
        });
      });
    }
  })["catch"](function (err) {
    clearTimeout(t);
    bar.style.display = 'none';
    Indicator.innerHTML = err;
  });
});
document.getElementById('DELETE').addEventListener('click', function () {
  Indicator.innerHTML = ' ';
  var mydata = " ";
  bar.style.display = 'block';

  var userdata = _SessionStorage["default"].getData('UserData');

  var url = 'https://bankaandela.herokuapp.com/api/v1/accounts';
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
      var b = 0;
      result.data.map(function (x) {
        b = i++;
        mydata += " <tr>\n      <td data-label=\"S/N\">".concat(b, "</td>\n      <td data-label=\"Account\">").concat(x.accountnumber, "</td>\n      <td data-label=\"DETAILS\">").concat((0, _dateFormater["default"])(x.createdon), "</td>\n      <td data-label=\"TYPE\">").concat(x.type, "</td>\n      <td data-label=\"STATUS\">").concat(x.status, "</td>\n      <td data-label=\"BALANCE\">").concat(x.balance, "</td>\n      <td> <div class=\"btn\" title=").concat(b, " id=").concat(x.accountnumber, "><i class=\"fa fa-trash\"></i></div></td>\n    </tr>");
      });
      m.html = "\n <table id=\"deleteTable\">\n  <caption>Statement Summary</caption>\n  <thead>\n    <tr>\n      <th scope=\"col\">id</th>\n      <th scope=\"col\">Account</th>\n      <th scope=\"col\">DETAILS</th>\n       <th scope=\"col\">TYPE</th>\n       <th scope=\"col\">STATUS</th>\n      <th scope=\"col\">BALANCE(#)</th>\n      <th scope=\"col\">DELETE</th>\n    </tr>\n  </thead>\n  <tbody>\n    ".concat(mydata, "\n  </tbody>\n</table>\n    ");
      m.open();
    } else {
      Indicator.innerHTML = result.msg;
    }
  }).then(function () {
    var deletes = document.getElementsByClassName('btn');
    var i;

    for (i = 0; i < deletes.length; i++) {
      deletes[i].addEventListener('click', function (i) {
        var element = document.getElementById('deleteTable');
        var delurl = "https://bankaandela.herokuapp.com/api/v1/accounts/".concat(i.srcElement.id);
        var mydata = document.getElementById("".concat(i.srcElement.id));
        myfetch["delete"](delurl).then(function (response) {
          return response.json();
        }).then(function (result) {
          console.log(result.msg);
          var row = element.rows[i.srcElement.title];
          row.style.display = 'none'; // element.style.display = 'none';
        })["catch"](function (err) {
          console.log(err);
        });
      });
    }
  });
});
document.getElementById('CREDIT').addEventListener('click', function () {
  Indicator.innerHTML = ' ';
  m.html = " <div class=\"col icon\">\n    \n        <i class=\"fas fa-piggy-bank fa-4x\"></i>\n      </div>\n       <div class=\"col\">\n        <div class=\"hide-md-lg\">\n          <span id=\"indicators\"></span>\n         <input id=\"accountNumber\" type=\"text\" name=\"accountNumber\" placeholder=\"ACCOUNT NO\" required>\n        <input id=\"amount\" type=\"text\"  name=\"Amount\" placeholder=\"AMOUNT\" required>\n        <input id=\"creditaccount\" type=\"submit\" value=\"CREDIT\"></div>\n                  <div id=\"myProgress\" class=\"progress\">\n        <div id=\"myBar\" class=\"bar\"></div>\n      </div>\n      ";
  m.open();
  var Indicators = document.getElementById('indicators');
  var accountNo = document.getElementById('accountNumber');
  var Amount = document.getElementById('amount');
  var creditAccount = document.getElementById('creditaccount');
  var bar = document.querySelector('.progress');
  var mybar = document.querySelector('.bar');
  bar.style.display = 'none';
  console.log(bar);
  creditAccount.addEventListener('click', function () {
    if (_validators["default"].validateNumberOnly(accountNo, Indicators) && _validators["default"].validateAccountNumberOnly(Amount, Indicators)) {
      creditAccount.disabled = true;
      var t = setInterval(function () {
        width += 10;

        if (width > 100) {
          width = 0;
        }

        mybar.style.width = "".concat(width, "%");
      }, 1000);
      bar.style.display = 'block';
      var amountdata = {
        amount: Amount.value
      };
      var url = "https://bankaandela.herokuapp.com/api/v1/transactions/".concat(accountNo.value, "/credit");

      var userdata = _SessionStorage["default"].getData('UserData');

      var myfetch = new _fetch["default"](userdata.token);
      myfetch.PostAuth(url, amountdata).then(function (response) {
        return response.json();
      }).then(function (result) {
        clearTimeout(t);
        bar.style.display = 'none';
        creditAccount.disabled = false;

        if (result.status === 200) {
          console.log(result);
          Indicators.innerHTML = "".concat(result.data.Transactiontype, " sucessfull, balance is ").concat(result.data.accountBalance);
        } else {
          Indicators.innerHTML = result.status;
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  });
});
document.getElementById('DEBIT').addEventListener('click', function () {
  Indicator.innerHTML = ' ';
  m.html = " <div class=\"col icon\">\n    \n        <i class=\"fas fa-piggy-bank fa-4x\"></i>\n      </div>\n       <div class=\"col\">\n        <div class=\"hide-md-lg\">\n          <span id=\"indicators\"></span>\n         <input id=\"accountNumber\" type=\"text\" name=\"accountNumber\" placeholder=\"ACCOUNT NO\" required>\n        <input id=\"amount\" type=\"text\"  name=\"Amount\" placeholder=\"AMOUNT\" required>\n        <input id=\"debitAccount\" type=\"submit\" value=\"DEBIT\"></div>\n                  <div id=\"myProgress\" class=\"progress\">\n        <div id=\"myBar\" class=\"bar\"></div>\n      </div>\n      ";
  m.open();
  var Indicators = document.getElementById('indicators');
  var accountNo = document.getElementById('accountNumber');
  var Amount = document.getElementById('amount');
  var debitAccount = document.getElementById('debitAccount');
  var bar = document.querySelector('.progress');
  var mybar = document.querySelector('.bar');
  bar.style.display = 'none';
  debitAccount.addEventListener('click', function () {
    if (_validators["default"].validateAccountNumberOnly(accountNo, Indicators) && _validators["default"].validatetNumberOnly(Amount, Indicators)) {
      debitAccount.disabled = true;
      var t = setInterval(function () {
        width += 10;

        if (width > 100) {
          width = 0;
        }

        mybar.style.width = "".concat(width, "%");
      }, 1000);
      bar.style.display = 'block';
      var amountdata = {
        amount: Amount.value
      };
      var url = "https://bankaandela.herokuapp.com/api/v1/transactions/".concat(accountNo.value, "/debit");

      var userdata = _SessionStorage["default"].getData('UserData');

      var myfetch = new _fetch["default"](userdata.token);
      myfetch.PostAuth(url, amountdata).then(function (response) {
        return response.json();
      }).then(function (result) {
        clearTimeout(t);
        bar.style.display = 'none';
        debitAccount.disabled = false;

        if (result.status === 200) {
          console.log(result);
          Indicators.innerHTML = "".concat(result.data.Transactiontype, " sucessfull, balance is ").concat(result.data.accountBalance);
        } else {
          Indicators.innerHTML = result.status;
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  });
});
document.getElementById('signUp2').addEventListener('click', function () {
  m.html = " <div class=\"col icon\">\n    \n        <i class=\"fas fa-female fa-3x \"></i>\n      </div>\n       <div class=\"col\">\n        <div class=\"hide-md-lg\">\n         \n          <span id=\"indicators\"></span>\n          <select id=\"mySelect\">\n    <option value=\"admin\">Admin</option>\n    <option value=\"staff\" selected>cashier</option>\n  </select>\n          <input type=\"text\" id=\"firstName\" name=\"firstName\" placeholder=\"FirstName\" required>\n         <input type=\"text\" id=\"lastName\"  name=\"lastName\" placeholder=\"LastName\" required\">\n        <input type=\"email\" id=\"email\"  name=\"Email\" placeholder=\"Email\" required>\n        <input type=\"password\" id=\"password\"   name=\"password\" placeholder=\"Password\" required>\n        <input type=\"password\" id=\"confirmPassword\"  name=\"Confirm-password\" placeholder=\"Confirm Password\" required>\n        <input id=\"createUser\"  type=\"submit\" value=\"Sign Up\">\n                <div class=\"Progress\">\n        <div class=\"Bar\"></div>\n      </div>\n      ";
  m.open();
  var url = 'https://bankaandela.herokuapp.com/api/v1/auth/signup';
  var Type = document.getElementById('mySelect');
  var Indicators = document.getElementById('indicators');
  var CreateUser = document.getElementById('createUser');
  var FirstName = document.getElementById('firstName');
  var LastName = document.getElementById('lastName');
  var Email = document.getElementById('email');
  var Password = document.getElementById('password');
  var ConfirmPassword = document.getElementById('confirmPassword');
  var bar = document.querySelector(".Progress");
  var mybar = document.querySelector(".Bar");
  bar.style.display = 'none'; //check validation if all pass then loads the appopriate page......

  var i = 0;
  createUser.addEventListener('click', function () {
    console.log("click ".concat(i++, "..."));

    if (_validators["default"].ValidateTextInput(FirstName, Indicators) && _validators["default"].ValidateTextInput(LastName, Indicators) && _validators["default"].validateEmail(Email, Indicators) && _validators["default"].validatePassword(Password, Indicators) && _validators["default"].validateConfirmPassword(Password, ConfirmPassword, Indicators)) {
      bar.style.display = 'block';
      createUser.disabled = true;
      console.log(bar);
      var UserData = {
        firstName: FirstName.value,
        lastName: LastName.value,
        email: Email.value,
        password: Password.value,
        Type: 'staff',
        isAdmin: Type.value === 'admin' ? true : false
      };
      var t = setInterval(function () {
        width += 10;

        if (width > 100) {
          width = 0;
        }

        mybar.style.width = "".concat(width, "%");
        console.log('width values', width);
      }, 1000);
      var postdata = new _fetch["default"](null);
      postdata.post(url, UserData).then(function (result) {
        bar.style.display = 'none';
        clearTimeout(t);
        console.log('mydata', result);

        if (result.status === 201) {
          Indicators.style.color = "blue";
          Indicators.innerHTML = 'user created sucessfully';
          createUser.value = 'close';
          CreateUser.disabled = false;
          createUser.addEventListener('click', function () {
            m.close();
          });
        } else {
          Indicators.style.color = "red";
          Indicators.innerHTML = result.statusText;
          CreateUser.disabled = false;
        }
      })["catch"](function (err) {
        bar.style.display = 'none';
        clearTimeout(t);
        Indicators.innerHTML = err;
        CreateUser.disabled = false;
      });
    }
  });
});

},{"../../js/clients/validator/validators":5,"../clients/helpers/SessionStorage":1,"../clients/helpers/dateFormater":2,"../clients/helpers/fetch":3}]},{},[6]);
