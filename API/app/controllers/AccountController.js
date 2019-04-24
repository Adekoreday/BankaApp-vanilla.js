import AccountService from '../services/AccountService';

class AccountController {

    constructor() {
        this.AccountServices = new AccountService();
    }

    static async createAccount(req, res) {
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

    }
    /*  get account details...............
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