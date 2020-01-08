import UserService from '../services/UserService';
import generateAccount from '../utils/GenAccountNumber';

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
