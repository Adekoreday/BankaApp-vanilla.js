import Joi from 'joi';

class Transaction {
    constructor() {
        this.Joi = Joi;
        this.TransactionSchema = {
            createdOn: this.Joi.string(),
            Type: this.Joi.string().required().required(),
            accountNumber: this.Joi.number().integer().min(1000000000),
            accountId: this.Joi.number().integer().min(1).required(),
            cashier: this.Joi.number().integer().min(1).required(),
            amount: this.Joi.number().integer(),
            oldbalance: this.Joi.number().integer(),
            newbalance: this.Joi.number().integer(),
        };
    }
}

export default Transaction;