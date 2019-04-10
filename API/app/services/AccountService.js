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

    putAccount(userput, id) {
        const selectedAccount = this.data.find(user => parseInt(user.id, 10) === parseInt(id, 10));
        selectedAccount.Type = userput.Type;
        selectedAccount.status = userput.status;
        return selectedAccount;
    }

    deleteAccount(id) {
        const selectedAccount = this.data.find(user => parseInt(user.id, 10) === parseInt(id, 10));
        this.data.splice(selectedAccount.id - 1, 1);
        return this.data;
    }
}
export default AccountService;