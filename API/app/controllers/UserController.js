import jwt from 'jsonwebtoken';
import UserService from '../services/UserService';
import validPassword from '../../utils/validPassword';


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
            status: userList === undefined ? 422 : 201,
            Data: userList === undefined ? 'user already Exists' : userList,
        });

    }

    SignIn(req, res) {
        const userKey = req.body;
        const userExist = this.UserService.userExistBefore(userKey.email);
        if (userExist !== undefined) {
            const validatepass = validPassword(userKey.password, userExist.password);
            if (validatepass) {
                const tokens = jwt.sign({ email: userExist.email, id: userExist.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
                userExist.token = tokens;
                return res.status(200).json({
                    status: 200,
                    Data: userExist,
                });
            }
            return res.status(401).json({
                status: 401,
                msg: 'wrong password.........',
            });

        }
        return res.status(404).json({
            status: 404,
            msg: 'user account not found',
        });
    }

}
export default UserController;
