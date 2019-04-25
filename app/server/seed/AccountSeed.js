import db from '../db';
import Account from '../models/Account';


class AccountSeed {

    static accountSeed(data) {
        return new Promise((resolve, reject) => {
            const { accountNumber, status, Type, balance, userId } = data;
            db.querydb(Account.AddnewAccount(accountNumber, status, Type, balance, userId))
                .then((result) => {
                    console.log('seed account data sucessfully');
                    resolve(result);
                })
                .catch((err) => {
                    console.log('seed account data failed', err);
                    reject();
                });
        })
    };

    /* static async AccountseedAll() {
         try {
             await this.AccountSeed(Accountdata.account1);
             await this.AccountSeed(Accountdata.account2);
             await this.AccountSeed(Accountdata.account3);
             console.log('seedAll Account');
         } catch (e) {
             console.log('seedAll user Error', e);
         }
     }*/
}

export default AccountSeed;