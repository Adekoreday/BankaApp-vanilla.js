import AccountService from '../services/AccountService';

class AccountController {

    constructor() {
        this.AccountServices = new AccountService();
    }

    createAccount(req, res) {
        const createdAcc = this.AccountServices.addNewAccount(req.AccountInput);
        createdAcc.firstName = req.passedUser.firstName;
        createdAcc.lastName = req.passedUser.lastName;
        createdAcc.email = req.passedUser.email;
        console.log('acc created', createdAcc);
        res.status(200).json({
            staus: 200,
            data: createdAcc,
        });
    }

}
export default AccountController;