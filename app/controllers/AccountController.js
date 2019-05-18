import AccountService from '../services/AccountService';
import UserService from '../services/UserService';
import AccountgetHelper from '../helpers/AccountgetHelper';

class AccountController {

  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @returns
   * @memberof AccountController
   */
  
  static async createAccount(req, res) {
    try {
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

  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @returns
   * @memberof AccountController
   */
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


  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @returns
   * @memberof AccountController
   */
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
      });
    } catch (e) {
      return res.status(500).json({
        error: `following server error occourred ${e}`,
      });
    }
  }

 /**
  *
  *
  * @static
  * @param {*} req
  * @param {*} res
  * @returns
  * @memberof AccountController
  */
 static async getAllUserAccounts(req, res) {
    try {
      let AlluserAcc;
      const userExist = await UserService.CheckifUserExist(req.params.mail);
      if (userExist !== undefined) {
        AlluserAcc = await AccountService.checkAccountsOwnedByUser(userExist.id);
      }

      res.status(userExist === undefined ? 404 : 200).json({
        status: userExist === undefined ? 404 : 200,
        data: userExist === undefined ? null : AlluserAcc,
      });
    } catch (e) {
      return res.status(500).json({
        error: `following server error occourred ${e}`,
      });
    }
  }
  
  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @memberof AccountController
   */
  static async getHelper(req, res) {
  let data;
  const { status } = req.query;
  try{
    if(status === undefined) {
    data = await AccountgetHelper.getAccounts();
    }
    if ((status === 'active') || (status === 'dormant')) {
    data = await AccountgetHelper.GetAccountstatus(status);
    }
    }catch(e) {
    console.log(`the following error ${e}`);
  }
        res.status(data === undefined ? 404 : 200).json({
        status: data === undefined ? 404 : 200,
        data: data === undefined ? null : data,
      });
  }

  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @memberof AccountController
   */
  static async Accountdetails(req, res) {
    let Accountdetails;
       Accountdetails = await AccountService.getAccountsbyAccountNo(req.params.accountNumber);
       if(Accountdetails === undefined || Accountdetails === null) {
         Accountdetails = undefined;
       }
        res.status(Accountdetails === undefined ? 404 : 200).json({
        status: Accountdetails === undefined ? 404 : 200,
        data: Accountdetails === undefined ? 'Accoount does not exist' : Accountdetails,
      });   
    
  }

}
export default AccountController;
