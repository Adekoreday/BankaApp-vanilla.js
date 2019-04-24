import express from 'express';
import UserController from '../controllers/UserController';
import Validator from '../middlewares/Validator';
import HashPassword from '../middlewares/hashpassword';


const userRouter = express.Router();
userRouter.post('/auth/signup', Validator.SignUpValidator, HashPassword.hashPassword, (req, res) => {
    UserController.SignUp(req, res);
});

userRouter.post('/auth/signin', Validator.SignInValidator, (req, res) => {
    UserController.SignIn(req, res);
});

export default userRouter;
