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
        res.status(200).json({
            status: 200,
            data: createdAcc,
        });
    }

    patchAccount(req, res) {
        const accountNo = req.params.id;
        const patchedAccount = this.AccountServices.patchAccount(req.body, accountNo);
        console.log('active status', patchedAccount);
        res.status(200).json({
            status: 200,
            data: {
                accountNumber: patchedAccount.accountNumber,
                status: patchedAccount.status,
            },
        });
    }

    deleteAccount(req, res) {
        const accountNo = req.params.id;
        const remainingAcc = this.AccountServices.deleteAccount(accountNo);
        console.log('remainig after delete', remainingAcc);
        res.status(200).json({
            status: 200,
            data: {
                status: 200,
                msg: 'deleted sucessfully',
            }
        })

    }

}
export default AccountController;