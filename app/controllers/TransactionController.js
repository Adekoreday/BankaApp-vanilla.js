import TransactionService from '../services/TransactionService';


class TransactionController {

    static async processTransaction(req, res) {
        const transactionData = req.scafoldData;
        const addedtransaction = await TransactionService.addNewTransaction(transactionData, res)
        /*  res.status(addedtransaction === undefined ? 404 : 200).json({
              status: addedtransaction === undefined ? 404 : 200,
              data: addedtransaction === undefined ? 'account oooooooo' : addedtransaction,
          }); */
        res.status(200).json({
            status: 200,
            data: addedtransaction,
        });
    }

}
export default TransactionController;
