import UserService from '../services/UserService';
import generateAccount from '../../utils/GenAccountNumber';

/**The Account scaffold is reponsible for autogenerating required fields for an account 
 * after the user trys creating account by entering the type of account and password
 */

class AccountScafold {
    static Scafold(req, res, next) {
        const currentDateTime = new Date();
        const userServices = new UserService();
        const userdetails = req.userData;
        const userdata = userServices.userExistBefore(userdetails.email);
        if (userdata === undefined) {
            res.status(404).json({
                status: 404,
                msg: 'wrong email or password',
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
