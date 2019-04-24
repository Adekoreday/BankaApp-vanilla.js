import AccountService from '../services/AccountService';

class AccountController {

    constructor() {
        this.AccountServices = new AccountService();
    }
    /*
        createAccount(req, res) {
            const AccountExist = this.AccountServices.Existbefore(req.AccountInput.accountNumber);
            let createdAcc;
            if (AccountExist === undefined) {
                createdAcc = this.AccountServices.addNewAccount(req.AccountInput);
                createdAcc.firstName = req.passedUser.firstName;
                createdAcc.lastName = req.passedUser.lastName;
                createdAcc.email = req.passedUser.email;
            }
            return res.status(createdAcc === undefined ? 422 : 201).json({
                status: createdAcc === undefined ? 422 : 201,
                Data: createdAcc === undefined ? 'user already Exists' : createdAcc,
            });
    
        }
    
        patchAccount(req, res) {
            const accountNo = req.params.id;
            const AccountExist = this.AccountServices.Existbefore(accountNo);
            let patchedAccount;
            if (AccountExist !== undefined) {
                patchedAccount = this.AccountServices.patchAccount(req.body, accountNo);
            }
            res.status(AccountExist === undefined ? 404 : 200).json({
                status: AccountExist === undefined ? 404 : 200,
                data: {
                    accountNumber: (AccountExist === undefined ? 'not exist' : patchedAccount.accountNumber),
                    status: AccountExist === undefined ? 'not exist' : patchedAccount.status,
                },
            });
        }
    
        deleteAccount(req, res) {
            const accountNo = req.params.id;
            const AccountExist = this.AccountServices.Existbefore(accountNo);
    
            let deleteAcc;
            if (AccountExist !== undefined) {
                deleteAcc = this.AccountServices.deleteAccount(accountNo);
    
            }
    
            res.status(deleteAcc === undefined ? 404 : 200).json({
                status: deleteAcc === undefined ? 404 : 200,
                msg: deleteAcc === undefined ? 'Account does not exist' : 'delete sucessfull',
            })
    
        }
        */

}
export default AccountController;