import Joi from 'joi';

class Transaction {
    constructor() {
        this.Joi = Joi;
        this.TransactionSchema = {
            createdOn: this.Joi.string().required(),
            Transactiontype: this.Joi.string().required().required(),
            accountNumber: Joi.number().integer().min(1000000000).required(),
            cashier: this.Joi.number().integer(),
            amount: this.Joi.number().integer(),
            oldBalance: this.Joi.number().integer(),
            newBalance: this.Joi.number().integer(),
        };
    }

}

export default Transaction;