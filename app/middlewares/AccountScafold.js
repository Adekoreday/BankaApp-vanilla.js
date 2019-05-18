import UserService from '../services/UserService';
import generateAccount from '../utils/GenAccountNumber';

/**The Account scaffold is reponsible for autogenerating required fields for an account 
 * after the user trys creating account by entering the type of account and password
 */

class AccountScafold {
    static async Scafold(req, res, next) {
        const currentDateTime = new Date();
        const userdetails = req.userData;
        const userdata = await UserService.CheckifUserExist(userdetails.email);
        if (userdata === undefined) {
          return res.status(404).json({
                status: 404,
                msg: 'user does not exist signup first',
            });
        }
        req.passedUser = userdata;
        const AccountPayload = req.body;
        try {
            AccountPayload.accountNumber = generateAccount();
        } catch (e) {
            return res.status(500).json({
                msg: 'failed to gen account',
            });
        }

        AccountPayload.status = 'active';
        AccountPayload.createdOn = currentDateTime.toString();
        AccountPayload.owner = userdata.id;
        req.AccountInput = AccountPayload;
        next();
    };
}

export default AccountScafold;
