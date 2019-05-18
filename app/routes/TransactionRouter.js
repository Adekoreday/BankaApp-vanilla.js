import express from 'express';
import TransactionController from '../controllers/TransactionController';
import TransactionScafolld from '../middlewares/TransactionScafolld';
import Validator from '../middlewares/Validator';
import VerifyToken from '../middlewares/VerifyToken';
import Accountpermission from '../middlewares/permissions/Accountpermission'

const TransactionRouter = express.Router();
TransactionRouter.post('/transactions/:accountNumber/:transactionType', VerifyToken.verifyToken, Accountpermission.creditAccountpermission, Validator.amounTvalidator, TransactionScafolld.transactionScafolld, Validator.transactionValidator, TransactionController.processTransaction);
TransactionRouter.get('/transactions/:id', VerifyToken.verifyToken, Accountpermission.getSpecificAccountTransactionHistorypermission, TransactionController.getTransaction);
TransactionRouter.get('/accounts/:accountNumber/transactions', VerifyToken.verifyToken, Accountpermission.getSpecificAccountTransactionHistorypermission, Accountpermission.createAccountpermission, TransactionController.getTransactionByaccount);
TransactionRouter.get('/transactions/', VerifyToken.verifyToken, Accountpermission.getSpecificAccountTransactionHistorypermission, TransactionController.getAllTransactionbyUser);
export default TransactionRouter;