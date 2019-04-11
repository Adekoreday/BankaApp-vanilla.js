import AccountData from '../../utils/Accountdb';

class AccountService {
    constructor() {
        this.data = AccountData;
    }

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
        console.log('my selected acc', selectedAccount);
        selectedAccount.status = userput.status;
        return selectedAccount;
    }

    deleteAccount(accountNumber) {
        const selectedAccount = this.data.find(user => parseInt(user.accountNumber, 10) === parseInt(accountNumber, 10));
        this.data.splice(selectedAccount.id - 1, 1);
        return this.data;
    }
}
export default AccountService;