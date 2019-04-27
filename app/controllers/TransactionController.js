import TransactionService from '../services/TransactionService';
import AccountService from '../services/AccountService';

class TransactionController {

  static async processTransaction(req, res) {
    let addedtransaction;
    let mydata;
    try {
      const transactionData = req.scafoldData;
      addedtransaction = await TransactionService.addNewTransaction(transactionData, res);
      mydata = {
        TransactionId: addedtransaction.id,
        accountNumber: req.params.accountNumber,
        accountBalance: addedtransaction.newbalance,
        amount: addedtransaction.amount,
        cashier: addedtransaction.cashier_id,
        Transactiontype: addedtransaction.type,
      };
    } catch (e) {
      addedtransaction = undefined;
    }
    res.status(addedtransaction === undefined ? 500 : 200).json({
      status: addedtransaction === undefined ? 500 : 200,
      data: addedtransaction === undefined ? undefined : mydata,
    });
  }

  static async getTransaction(req, res) {
    let addedtransaction;
    let mydata;
    try {
      addedtransaction = await TransactionService.getTransaction(req.params.id);
      if (addedtransaction !== undefined) {
        mydata = {
          TransactionId: addedtransaction.id,
          accountNumber: req.params.accountNumber,
          accountBalance: addedtransaction.newbalance,
          amount: addedtransaction.amount,
          cashier: addedtransaction.cashier_id,
          Transactiontype: addedtransaction.type,
        };
        addedtransaction = mydata;
      }
    } catch (e) {
      addedtransaction = undefined;
    }
    res.status(addedtransaction === undefined ? 500 : 200).json({
      status: addedtransaction === undefined ? 500 : 200,
      data: addedtransaction === undefined ? 'route doesnt exist' : mydata,
    });
  }

  static async getTransactionByaccount(req, res) {
    const AccountExist = await AccountService.CheckifAccountExist(req.params.accountNumber);
    let Allaccount;
    if (AccountExist != undefined) {
      Allaccount = await TransactionService.getTransactionbyAccount(AccountExist.id, res);
      Allaccount.map((x) => {
        x.accountNumber = req.params.accountNumber;
        delete x.cashier_id;
      });

    }
    return res.status(Allaccount === undefined ? 422 : 200).json({
      status: Allaccount === undefined ? 422 : 200,
      Data: Allaccount === undefined ? 'account does not Exists' : Allaccount,
    });
  }
}

export default TransactionController;
