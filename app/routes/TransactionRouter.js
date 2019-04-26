import express from 'express';
import TransactionController from '../controllers/TransactionController';
import TransactionScafolld from '../middlewares/TransactionScafolld';
import Validator from '../middlewares/Validator';
import VerifyToken from '../middlewares/VerifyToken';
import Accountpermission from '../middlewares/permissions/Accountpermission'

const TransactionRouter = express.Router();
TransactionRouter.post('/transactions/:accountNumber/:transactionType', VerifyToken.verifyToken, Accountpermission.creditAccountpermission, TransactionScafolld.transactionScafolld, Validator.transactionValidator, (req, res) => {
    TransactionController.processTransaction(req, res);
});
TransactionRouter.get('/transactions/:id', VerifyToken.verifyToken, (req, res) => {
    TransactionController.getTransaction(req, res);
});

export default TransactionRouter;