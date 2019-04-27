import Joi from 'joi';

class Account {
    constructor() {
        this.Joi = Joi;
        this.AccountSchema = {
            accountNumber: Joi.number().integer().min(1000000000).required(),
            createdOn: this.Joi.string().required(),
            owner: this.Joi.number().integer().min(1).required(),
            Type: this.Joi.string().required().required(),
            status: this.Joi.string().required(),
            balance: Joi.number().integer().required(),
        };
        this.AccSignInSchema = {
            status: this.Joi.string().required(),
        }
    }

}

export default Account;