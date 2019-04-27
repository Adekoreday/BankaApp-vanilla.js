import express from 'express';
import TransactionController from '../controllers/TransactionController';
import TransactionScafolld from '../middlewares/TransactionScafolld';
import Validator from '../middlewares/Validator';
import VerifyToken from '../middlewares/VerifyToken';
import Accountpermission from '../middlewares/permissions/Accountpermission'

const TransactionRouter = express.Router();
TransactionRouter.post('/transactions/:accountNumber/:transactionType', VerifyToken.verifyToken, Accountpermission.creditAccountpermission, TransactionScafolld.transactionScafolld, Validator.transactionValidator, TransactionController.processTransaction);
TransactionRouter.get('/transactions/:id', VerifyToken.verifyToken, TransactionController.getTransaction);
TransactionRouter.get('/accounts/:accountNumber/transactions', VerifyToken.verifyToken, Accountpermission.createAccountpermission, TransactionController.getTransactionByaccount);
export default TransactionRouter;