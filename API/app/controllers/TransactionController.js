import TransactionService from '../services/TransactionService';
import AccountService from '../services/AccountService';

class TransactionController {
    constructor() {
        this.transactionService = new TransactionService();
        this.AccountService = new AccountService();
    }

    processTransaction(req, res) {
        const transactionData = req.scafoldData;
        const Existbefore = this.AccountService.Existbefore(transactionData.accountNumber);
        let addedtransaction;
        if (Existbefore !== undefined) {
            addedtransaction = this.transactionService.addNewTransaction(transactionData);
        }
        res.status(addedtransaction === undefined ? 404 : 200).json({
            status: addedtransaction === undefined ? 404 : 200,
            data: addedtransaction === undefined ? 'account does not exist' : addedtransaction,
        });
    }
}
export default TransactionController;
