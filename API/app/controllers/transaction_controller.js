import TransactionService from '../services/TransactionService';

class Transaction {
    constructor() {
        this.transactionService = new TransactionService();
    }

    processTransaction(req, res) {
        const transactionData = req.scafoldData;
        const addedtransaction = this.transactionService.addNewTransaction(transactionData);
        res.status(200).json({
            status: 200,
            data: addedtransaction,
        })
    }
}
export default Transaction;
