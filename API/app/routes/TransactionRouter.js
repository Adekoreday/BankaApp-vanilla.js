import express from 'express';
import TransactionController from '../controllers/transaction_controller';
import TransactionScafolld from '../middlewares/TransactionScafolld';
import Validator from '../middlewares/validators';

const TransactionControllers = new TransactionController();
const TransactionRouter = express.Router();
TransactionRouter.post('/transactions/:accountNumber/:transactionType', TransactionScafolld.transactionScafolld, Validator.transactionValidator, (req, res) => {
    TransactionControllers.processTransaction(req, res);
});

export default TransactionRouter;