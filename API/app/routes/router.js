import express from 'express';
import bodyParser from 'body-parser';
import Validator from '../middlewares/validators';
import UserController from '../controllers/user_controller';
import hashPassword from '../middlewares/hashpassword';

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
    }

    HandleAllRoute() {
        this.app.post('/api/v1/sign-up', this.Validator.SignUpValidator, hashPassword, (req, res) => {
            this.UserController.SignUp(req, res);
        });
        this.app.get('/api/v1/sign-In', this.Validator.SignInValidator, (req, res) => {

        });
    }

}

export {
    Router,
    HandleAllRoutes,
}