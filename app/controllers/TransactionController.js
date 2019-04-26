import TransactionService from '../services/TransactionService';


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

}
export default TransactionController;
