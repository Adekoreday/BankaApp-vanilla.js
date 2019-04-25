import db from '../db';
import Transaction from '../models/Transaction';

class TransactionMigration {
    static TransactionMigrate() {
        const { CreatetransactionTable } = Transaction;
        return new Promise((resolve, reject) => {
            db.querydb(CreatetransactionTable())
                .then((result) => {
                    console.log('created new Transaction table ', result);
                    resolve();
                })
                .catch((err) => {
                    console.log('failed to created new Transaction table ', err);
                    reject(err);
                })
        });
    }

    static TransactionUnMigrate() {
        const { DropTransactionTable } = Transaction;
        return new Promise((resolve, reject) => {
            db.querydb(DropTransactionTable())
                .then((result) => {
                    console.log('drop Transaction table ', result);
                    resolve();
                })
                .catch((err) => {
                    console.log('failed to drop Transaction table ', err);
                    reject(err);
                })
        });
    }
}
export default TransactionMigration;
