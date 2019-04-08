import jwt from 'jsonwebtoken';
import UserService from '../services/userService';
import validPassword from '../../utils/validatepass';


class UserController {
    constructor() {
        this.UserService = new UserService();
    }

    SignUp(req, res) {
        const userdetails = req.body;
        const userExist = this.UserService.userExistBefore(userdetails.email);
        let userList;
        if (userExist === undefined) {
            userdetails.permission = userdetails.isAdmin === true ? 'admin' : 'user';
            const token = jwt.sign({ email: userdetails.email, permission: userdetails.permission }, process.env.SECRET_KEY, { expiresIn: '1h' });
            userdetails.token = token;
            userList = this.UserService.addNewUser(userdetails);
        }
        return res.status(userList === undefined ? 422 : 201).json({
            createUserStatus: userList === undefined ? 422 : 201,
            Data: userList,
        });

    }

    SignIn(req, res) {
        const userKey = req.body;
        const userExist = this.UserService.userExistBefore(req.email);
        if (userExist !== undefined) {
            const validatepass = validPassword(userKey.password, userExist.password);
            // eslint-disable-next-line space-before-blocks
            if (validatepass) {
                const tokens = jwt.sign({ email: userExist.email, id: userExist.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
                userExist.token = tokens;
                return res.status(200).json({
                    msg: 'Auth successful',
                    Data: userExist,
                });
            }
            return res.status(401).json({
                msg: 'Auth failed',
            });

        }
        return res.status(401).json({
            msg: 'user does not exist',
        });
    }

}
export default UserController;
