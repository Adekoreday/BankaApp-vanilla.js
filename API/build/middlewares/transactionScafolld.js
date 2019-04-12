"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var transactionScafolld = function transactionScafolld(req, res, next) {
  var scafoldData = req.body;
  var currentDateTime = new Date();
  scafoldData.createdOn = currentDateTime.toString();
  scafoldData.Transactiontype = req.params.transactionType;
  scafoldData.accountNumber = req.params.accountNumber;
  scafoldData.newBalance = scafoldData.Transactiontype === 'credit' ? scafoldData.oldBalance - scafoldData.amount : scafoldData.oldBalance + scafoldData.amount;
  req.scafoldData = scafoldData;
  console.log('scafolld data :', scafoldData);
  next();
};

var _default = transactionScafolld;
exports["default"] = _default;
//# sourceMappingURL=transactionScafolld.js.map