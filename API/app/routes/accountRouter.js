import express from 'express';
import Validator from '../middlewares/Validator';
import AccountController from '../controllers/AccountController';
import AccountScafold from '../middlewares/AccountScafold';
import VerifyToken from '../middlewares/VerifyToken';

const accountRouter = express.Router();
accountRouter.post('/account', VerifyToken.verifyToken, AccountScafold.Scafold, Validator.CreateAccountValidator, (req, res) => {
    AccountController.createAccount(req, res);
});
accountRouter.patch('/account/:id', VerifyToken.verifyToken, Validator.patchAccountValidator, (req, res) => {
    AccountController.patchAccount(req, res);
});


accountRouter.delete('/accounts/:id', VerifyToken.verifyToken, (req, res) => {
    AccountController.deleteAccount(req, res);
});

export default accountRouter;
