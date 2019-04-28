import express from 'express';
import Validator from '../middlewares/Validator';
import AccountController from '../controllers/AccountController';
import AccountScafold from '../middlewares/AccountScafold';
import VerifyToken from '../middlewares/VerifyToken';
import Accountpermission from '../middlewares/permissions/Accountpermission';

const accountRouter = express.Router();
accountRouter.post('/account', VerifyToken.verifyToken, Accountpermission.createAccountpermission, AccountScafold.Scafold, Validator.CreateAccountValidator, AccountController.createAccount);
accountRouter.patch('/account/:id', VerifyToken.verifyToken, Accountpermission.activateAccountpermission, Validator.patchAccountValidator, AccountController.patchAccount);
accountRouter.get('/user/:mail/accounts', VerifyToken.verifyToken, Accountpermission.createAccountpermission, AccountController.getAllUserAccounts);
accountRouter.get('/accounts', VerifyToken.verifyToken, Accountpermission.getAllAccountpermission, AccountController.getHelper);
accountRouter.delete('/accounts/:id', VerifyToken.verifyToken, Accountpermission.deleteAccountpermission, AccountController.deleteAccount);
accountRouter.get('/accounts/:accountNumber', VerifyToken.verifyToken, Accountpermission.getAllAccountpermission, AccountController.Accountdetails);
export default accountRouter;
