import express from 'express';
import UserController from '../controllers/user_controller';
import Validator from '../middlewares/validators';
import HashPassword from '../middlewares/Hashpassword';

const UserControllers = new UserController();
const userRouter = express.Router();
userRouter.post('/auth/signup', Validator.SignUpValidator, HashPassword.hashPassword, (req, res) => {
    UserControllers.SignUp(req, res);
});

userRouter.post('/auth/signin', Validator.SignInValidator, (req, res) => {
    UserControllers.SignIn(req, res);
});

export default userRouter;
