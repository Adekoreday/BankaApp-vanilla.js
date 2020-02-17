import express from 'express';
import UserController from '../controllers/UserController';
import Validator from '../middlewares/Validator';
import VerifyToken from '../middlewares/VerifyToken';
import HashPassword from '../middlewares/hashpassword';
import Accountpermission from '../middlewares/permissions/Accountpermission';


const userRouter = express.Router();
userRouter.post('/auth/signup', Validator.SignUpValidator, HashPassword.hashPassword, UserController.SignUp);

userRouter.post('/auth/signin', Validator.SignInValidator, UserController.SignIn);

userRouter.get('/user', Validator.GetUserValidator, VerifyToken.verifyToken, UserController.Getuser);

userRouter.get('/users', VerifyToken.verifyToken, Accountpermission.getAllAccountpermission, UserController.GetAllUsers);

export default userRouter;
