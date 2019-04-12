import Transaction from '../../utils/Transactiondb';

class TransactionService {
    constructor() {
        this.data = Transaction;
    }

    addNewTransaction(Transact) {
        const myTransaction = Transact;
        const { length } = this.data;
        let { id } = this.data[length - 1];
        id += 1;
        myTransaction.id = id;
        this.data.push(myTransaction);
        return myTransaction;
    }
}
export default TransactionService;