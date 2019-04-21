import express from 'express';
import TransactionController from '../controllers/TransactionController';
import TransactionScafolld from '../middlewares/transactionScafolld';
import Validator from '../middlewares/Validator';

const TransactionControllers = new TransactionController();
const TransactionRouter = express.Router();
TransactionRouter.post('/transactions/:accountNumber/:transactionType', TransactionScafolld.transactionScafolld, Validator.transactionValidator, (req, res) => {
    TransactionControllers.processTransaction(req, res);
});

export default TransactionRouter;