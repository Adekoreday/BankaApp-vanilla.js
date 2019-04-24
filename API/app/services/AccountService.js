import db from '../server/db';
import Account from '../server/models/Account';

class AccountService {

    static CheckifAccountExist(accountNumber) {
        return new Promise((resolve, reject) => {
            db.querydb(Account.checkifAccountExist(accountNumber))
                .then((data) => {
                    if (data.rows.length < 1) {
                        resolve(undefined);
                    } else {
                        const { id, accountnumber, status, type, balance, user_id, createdon } = data.rows[0];
                        const payload = {
                            id, accountnumber, status, type, balance, user_id, createdon,
                        };
                        resolve(payload);
                    }
                });
        });
    }

    static addNewAccount(newAccount, res) {
        return new Promise((resolve, reject) => {
            const { accountNumber, status, Type, balance } = newAccount;
            const userId = newAccount.owner;
            db.querydb(Account.AddnewAccount(accountNumber, status, Type, balance, userId))
                .then((result) => {
                    console.log(' account created sucessfully');
                    resolve(result.rows[0]);
                })
                .catch((err) => {
                    console.log('account create failed', err);
                    res.status(400).json({
                        status: 400,
                        Data: 'you may have entered wrong Type..',
                    });
                    reject();
                });
        })
    }
    /*
        addNewAccount(newAccount) {
            const myAccount = newAccount;
            const { length } = this.data;
            let { id } = this.data[length - 1];
            id += 1;
            myAccount.id = id;
            this.data.push(myAccount);
            return myAccount;
        }
    
        patchAccount(userput, accountNumber) {
            const selectedAccount = this.data.find(user => parseInt(user.accountNumber, 10) === parseInt(accountNumber, 10));
            selectedAccount.status = userput.status;
            return selectedAccount;
        }
    
        deleteAccount(accountNumber) {
            const selectedAccount = this.data.find(user => parseInt(user.accountNumber, 10) === parseInt(accountNumber, 10));
            this.data.splice(selectedAccount.id - 1, 1);
            return this.data;
        }
    
        Existbefore(accountNumber) {
            const check = this.data.find(account => parseInt(account.accountNumber, 10) === parseInt(accountNumber, 10));
            return check;
        } */
}
export default AccountService;