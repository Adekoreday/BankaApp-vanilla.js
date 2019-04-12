import Joi from 'joi';
import User from '../models/users_model';
import Account from '../models/Account_model';
import Transaction from '../models/transaction';

class Validator {


    static SignUpValidator(req, res, next) {
        const Users = new User();
        const result = Joi.validate(req.body, Users.UserSchema);
        if (result.error) {
            return res.status(400).send(result.error.details.map(x => x.message));
        }
        next();
    }

    static SignInValidator(req, res, next) {
        const Users = new User();
        const result = Joi.validate(req.body, Users.UserSignInSchema);
        if (result.error) {
            return res.status(401).send(result.error.details.map(x => x.message));
        }
        next();
    }

    static CreateAccountValidator(req, res, next) {
        const Accounts = new Account();
        const result = Joi.validate(req.AccountInput, Accounts.AccountSchema);
        if (result.error) {
            return res.status(400).send(result.error.details.map(x => x.message));
        }
        next();
    }

    static patchAccountValidator(req, res, next) {
        const Accounts = new Account();
        const result = Joi.validate(req.body, Accounts.AccSignInSchema);
        if (result.error) {
            return res.status(400).send(result.error.details.map(x => x.message));
        }
        next();
    }

    static transactionValidator(req, res, next) {
        const Transactions = new Transaction();
        const result = Joi.validate(req.scafoldData, Transactions.TransactionSchema);
        if (result.error) {
            return res.status(400).send(result.error.details.map(x => x.message));
        }
        next();
    }


}

export default Validator;
