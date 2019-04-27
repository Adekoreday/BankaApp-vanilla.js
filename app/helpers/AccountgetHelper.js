
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
    try{
      return await AccountService.checkAllAccountStatus(status);
      }catch (e) {
      return undefined;
         }
}

}
export default AccountgetHelper;