import express from 'express';
import Validator from '../middlewares/validators';
import AccountController from '../controllers/Account_controller';
import AccountScafold from '../middlewares/AccountScafold';
import VerifyToken from '../middlewares/VerifyToken';

const AccountControllers = new AccountController();
const accountRouter = express.Router();
accountRouter.post('/auth/account', VerifyToken.verifyToken, AccountScafold.Scafold, Validator.CreateAccountValidator, (req, res) => {
    AccountControllers.createAccount(req, res);
});
accountRouter.patch('/account/:id', Validator.patchAccountValidator, (req, res) => {
    AccountControllers.patchAccount(req, res);
});

accountRouter.delete('/accounts/:id', (req, res) => {
    AccountControllers.deleteAccount(req, res);
});

export default accountRouter;
