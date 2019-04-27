import express from 'express';
import UserController from '../controllers/UserController';
import Validator from '../middlewares/Validator';
import HashPassword from '../middlewares/hashpassword';


const userRouter = express.Router();
userRouter.post('/auth/signup', Validator.SignUpValidator, HashPassword.hashPassword, UserController.SignUp);

userRouter.post('/auth/signin', Validator.SignInValidator, UserController.SignIn);

export default userRouter;
