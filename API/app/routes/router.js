import express from 'express';
import bodyParser from 'body-parser';
import Validator from '../middlewares/validators';
import UserController from '../controllers/user_controller';
import AccountController from '../controllers/Account_controller';
import hashPassword from '../middlewares/hashpassword';
import AccountScafold from '../middlewares/AccountScafold';
import verifyToken from '../middlewares/check-auth';

const app = express();
app.use(bodyParser.json());

class Router {
    constructor() {
        this.app = app;
    }

    init() {
        const port = process.env.PORT || 3000;
        this.app.listen(port);
    }
}
class HandleAllRoutes extends Router {

    constructor() {
        super();
        this.Validator = Validator;
        this.UserController = new UserController();
        this.AccountController = new AccountController();
    }

    HandleAllRoute() {
        this.app.post('/api/v1/auth/sign-up', this.Validator.SignUpValidator, hashPassword, (req, res) => {
            this.UserController.SignUp(req, res);
        });
        this.app.post('/api/v1/auth/sign-In', this.Validator.SignInValidator, (req, res) => {
            this.UserController.SignIn(req, res);
        });
        this.app.post('/api/v1/auth/accounts', verifyToken, AccountScafold, this.Validator.CreateAccountValidator, (req, res) => {
            this.AccountController.createAccount(req, res);
        });
        this.app.patch('/api/v1/:id', this.Validator.patchAccountValidator, (req, res) => {
            this.AccountController.patchAccount(req, res);
        });
        this.app.delete('/api/v1/:id', (req, res) => {
            this.AccountController.deleteAccount(req, res);
        })

    }

}

export {
    Router,
    HandleAllRoutes,
}