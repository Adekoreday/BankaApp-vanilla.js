import permissionObj from '../../../utils/permissionObj';

class Accountpermission {

    static createAccountpermission(req, res, next) {

        const signedIn = typeof req.userData.permission === 'object' && req.userData.permission instanceof Array && req.userData.permission.length > 0 ? 'true' : 'false';
        if (signedIn === 'true') {
            const { permission } = req.userData;
            const confirmPermission = permission.includes(permissionObj.CREATE_ACCOUNT);
            if (!confirmPermission) {
                return res.status(403).json({
                    msg: 'You are not authorized to create an account',
                });
            }
            next();
        } else {
            return res.status(403).json({
                msg: 'You are not signed in kindly sign in',
            });
        }
    }

    static activateAccountpermission(req, res, next) {
        const signedIn = typeof req.userData.permission === 'object' && req.userData.permission instanceof Array && req.userData.permission.length > 0 ? 'true' : 'false';
        if (signedIn === 'true') {
            const { permission } = req.userData;
            const confirmPermission = permission.includes(permissionObj.ACTIVATE_ACCOUNT);
            if (!confirmPermission) {
                return res.status(403).json({
                    msg: 'You are not authorized to activate/deactivate an account',
                });
            }
            next();
        } else {
            return res.status(403).json({
                msg: 'You are not signed in kindly sign in',
            });
        }
    }

    static deleteAccountpermission(req, res, next) {
        const signedIn = typeof req.userData.permission === 'object' && req.userData.permission instanceof Array && req.userData.permission.length > 0 ? 'true' : 'false';
        if (signedIn === 'true') {
            const { permission } = req.userData;
            const confirmPermission = permission.includes(permissionObj.DELETE_ACCOUNT);
            if (!confirmPermission) {
                return res.status(403).json({
                    msg: 'You are not authorized to delete an account',
                });
            }
            next();
        } else {
            return res.status(403).json({
                msg: 'You are not signed in kindly sign in',
            });
        }
    }

    static creditAccountpermission(req, res, next) {

        const signedIn = typeof req.userData.permission === 'object' && req.userData.permission instanceof Array && req.userData.permission.length > 0 ? 'true' : 'false';
        if (signedIn === 'true') {
            const { permission } = req.userData;
            const confirmPermission = permission.includes(permissionObj.CREDIT_ACCOUNT);
            if (!confirmPermission) {
                return res.status(403).json({
                    msg: 'You are not authorized to credit/debit an account',
                });
            }
            next();
        } else {
            return res.status(403).json({
                msg: 'You are not signed in kindly sign in',
            });
        }
    }
}
export default Accountpermission;

/*
const permissionObj = {

    CREATE_ACCOUNT: 'postAccount',
    ACTIVATE_ACCOUNT: 'activateAccount',
    DEACTIVATE_ACCOUNT: 'deactivateAccount',
    DELETE_ACCOUNT: 'deleteAccount',
    DEBIT_ACCOUNT: 'debitAccount',
    CREDIT_ACCOUNT: 'creditAccount',

};*/