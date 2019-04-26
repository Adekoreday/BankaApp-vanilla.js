import express from 'express';
import Validator from '../middlewares/Validator';
import AccountController from '../controllers/AccountController';
import AccountScafold from '../middlewares/AccountScafold';
import VerifyToken from '../middlewares/VerifyToken';
import Accountpermission from '../middlewares/permissions/Accountpermission';

const accountRouter = express.Router();
accountRouter.post('/account', VerifyToken.verifyToken, Accountpermission.createAccountpermission, AccountScafold.Scafold, Validator.CreateAccountValidator, (req, res) => {
    AccountController.createAccount(req, res);
});
accountRouter.patch('/account/:id', VerifyToken.verifyToken, Accountpermission.activateAccountpermission, Validator.patchAccountValidator, (req, res) => {
    AccountController.patchAccount(req, res);
});

accountRouter.get('/user/:mail/accounts', VerifyToken.verifyToken, Accountpermission.createAccountpermission, (req, res) => {
  AccountController.getAllUserAccounts(req, res);
});

accountRouter.get('/accounts', VerifyToken.verifyToken, Accountpermission.getAllAccountpermission, (req, res) => {
  AccountController.getAccounts(req, res);
});

accountRouter.delete('/accounts/:id', VerifyToken.verifyToken, Accountpermission.deleteAccountpermission, (req, res) => {
    AccountController.deleteAccount(req, res);
});

export default accountRouter;
