import Joi from 'joi';

class Account {
    constructor() {
        this.Joi = Joi;
        this.AccountSchema = {
            accountNumber: Joi.number().integer().min(1000000000).required(),
            createdOn: this.Joi.string().required(),
            password: this.Joi.string().min(5).required(),
            owner: Joi.number().integer().min(1).required(),
            Type: this.Joi.string().required().required(),
            status: this.Joi.string().required(),
            balance: Joi.number().integer(),
        };
        this.AccSignInSchema = {
            status: this.Joi.string().required(),
        }
    }

}

export default Account;