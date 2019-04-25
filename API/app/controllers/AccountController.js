import AccountService from '../services/AccountService';

class AccountController {

    constructor() {
        this.AccountServices = new AccountService();
    }

    static async createAccount(req, res) {
        try {
            console.log("i got here while creating account");
            const AccountExist = await AccountService.CheckifAccountExist(req.AccountInput.accountNumber);
            let createdAcc;
            if (AccountExist === undefined) {

                createdAcc = await AccountService.addNewAccount(req.AccountInput, res);
                createdAcc.firstName = req.passedUser.firstName;
                createdAcc.lastName = req.passedUser.lastName;
                createdAcc.email = req.passedUser.email;
            }
            return res.status(createdAcc === undefined ? 422 : 201).json({
                status: createdAcc === undefined ? 422 : 201,
                Data: createdAcc === undefined ? 'account already Exists' : createdAcc,
            });
        } catch (e) {
            return res.status(500).json({
                error: `following server error occourred ${e}`,
            });
        }
    }

    static async patchAccount(req, res) {
        try {
            const myaccountNo = req.params.id;
            const accountNo = parseInt(myaccountNo, 10);
            const AccountExist = await AccountService.CheckifAccountExist(accountNo);
            let patchedAccount;
            if (AccountExist !== undefined) {
                AccountExist.status = req.body.status;
                patchedAccount = await AccountService.patchAccount(AccountExist, accountNo, res);
            }
            res.status(AccountExist === undefined ? 404 : 200).json({
                status: AccountExist === undefined ? 404 : 200,
                data: {
                    accountNumber: (AccountExist === undefined ? 'not exist' : patchedAccount.accountNumber),
                    status: AccountExist === undefined ? 'not exist' : patchedAccount.status,
                },
            });
        } catch (e) {
            return res.status(500).json({
                error: `following server error occourred ${e}`,
            });
        }
    }

    static async deleteAccount(req, res) {
        try {
            const accountNo = req.params.id;
            const AccountExist = await AccountService.CheckifAccountExist(accountNo);
            let deleteAcc;
            if (AccountExist !== undefined) {
                deleteAcc = AccountService.deleteAccount(accountNo);

            }

            res.status(deleteAcc === undefined ? 404 : 200).json({
                status: deleteAcc === undefined ? 404 : 200,
                msg: deleteAcc === undefined ? 'Account does not exist' : 'delete sucessfull',
            })
        } catch (e) {
            return res.status(500).json({
                error: `following server error occourred ${e}`,
            });
        }
    }
    /*  get account details...............
    */

}
export default AccountController;