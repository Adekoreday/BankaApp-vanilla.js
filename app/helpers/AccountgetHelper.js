
import AccountService from '../services/AccountService';

class AccountgetHelper {
   
        static async getAccounts(res) {  
      try {
   return await AccountService.checkAllAccounts();
       } catch (e) {
     return undefined;
    }
  }

  static async GetAccountstatus(status) {
      return await AccountService.checkAllAccountStatus(status);
      }
}


export default AccountgetHelper;