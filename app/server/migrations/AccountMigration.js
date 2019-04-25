import db from '../db';
import Account from '../models/Account';

class AccountMigration {
    static AccountMigrate() {
        const { CreateAccountTable } = Account;
        return new Promise((resolve, reject) => {
            db.querydb(CreateAccountTable())
                .then((result) => {
                    console.log('created new Account table ', result);
                    resolve();
                })
                .catch((err) => {
                    console.log('failed to created new Account table ', err);
                    reject(err);
                })
        });
    }

    static AccountUnMigrate() {
        const { DropAccountTable } = Account;
        return new Promise((resolve, reject) => {
            db.querydb(DropAccountTable())
                .then((result) => {
                    console.log('drop Account table ', result);
                    resolve();
                })
                .catch((err) => {
                    console.log('failed to drop Account table ', err);
                    reject(err);
                })
        });
    }
}
export default AccountMigration;
