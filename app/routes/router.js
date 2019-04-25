import express from 'express';
import accountRouter from './accountRouter';
import TransactionRouter from './TransactionRouter';
import userRouter from './userRouter';
import Pixrouter from './PixRouter';

const Router = express.Router();
Router.use(userRouter, accountRouter, TransactionRouter, Pixrouter);
export default Router;