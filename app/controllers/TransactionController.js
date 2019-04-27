import TransactionService from '../services/TransactionService';
import AccountService from '../services/AccountService';

class TransactionController {

  static async processTransaction(req, res) {
    const transactionData = req.scafoldData;
    const addedtransaction = await TransactionService.addNewTransaction(transactionData, res);
    /*  res.status(addedtransaction === undefined ? 404 : 200).json({
              status: addedtransaction === undefined ? 404 : 200,
              data: addedtransaction === undefined ? 'account oooooooo' : addedtransaction,
          }); */
    const mydata = {
      TransactionId: addedtransaction.id,
      accountNumber: req.params.accountNumber,
      accountBalance: addedtransaction.newbalance,
      amount: addedtransaction.amount,
      cashier: addedtransaction.cashier_id,
      Transactiontype: addedtransaction.type,
    };
    res.status(200).json({
      status: 200,
      data: mydata,
    });
  }

    static async getTransaction(req, res) {

    const addedtransaction = await TransactionService.getTransaction(req.params.id);
    /*  res.status(addedtransaction === undefined ? 404 : 200).json({
              status: addedtransaction === undefined ? 404 : 200,
              data: addedtransaction === undefined ? 'account oooooooo' : addedtransaction,
          }); */
    const mydata = {
      TransactionId: addedtransaction.id,
      accountNumber: req.params.accountNumber,
      accountBalance: addedtransaction.newbalance,
      amount: addedtransaction.amount,
      cashier: addedtransaction.cashier_id,
      Transactiontype: addedtransaction.type,
    };
    res.status(200).json({
      status: 200,
      data: mydata,
    });
  }

  static async getTransactionByaccount(req, res) {
 const AccountExist = await AccountService.CheckifAccountExist(req.params.accountNumber);
 let Allaccount;
 if(AccountExist != undefined) {
 Allaccount = await TransactionService.getTransactionbyAccount(AccountExist.id, res);
 Allaccount.map((x) => {
   x.accountNumber = req.params.accountNumber
   delete x.cashier_id;
   });

 }
  return res.status(Allaccount === undefined ? 422 : 200).json({
        status: Allaccount === undefined ? 422 : 200,
        Data: Allaccount === undefined ? 'account does not Exists': Allaccount,
      });



  }
  


}
export default TransactionController;
