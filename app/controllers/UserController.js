import jwt from 'jsonwebtoken';
import UserService from '../services/UserService';
import validPassword from '../../utils/validPassword';

class UserController {
  static async SignUp(req, res) {
    try {
      const userdetails = req.body;
      const userExist = await UserService.CheckifUserExist(userdetails.email);
      let userList;
      if (userExist === undefined) {
        userdetails.permission = userdetails.isadmin === true ? 'admin' : 'user';
        const token = jwt.sign({ email: userdetails.email, permission: userdetails.permission }, process.env.SECRET_KEY, { expiresIn: '1h' });
        userdetails.token = token;
        userList = await UserService.Signup(userdetails, res);
        userList.token = token;
      }
      return res.status(userList === undefined ? 422 : 201).json({
        status: userList === undefined ? 422 : 201,
        Data: userList === undefined ? 'user already Exists' : userList,
      });
    } catch (e) {
      return res.status(500).json({
        error: 'a lot internal error signing up',
      });
    }
  }

  static async SignIn(req, res) {
    try {
      const userKey = req.body;
      const userExist = await UserService.CheckifUserExist(userKey.email);

      if (userExist !== undefined) {
        userKey.permission = userExist.isadmin === true ? 'admin' : 'user';
        userKey.permission = userKey.permission === 'admin' ? ['postAccount', 'activateAccount', 'deactivateAccount', 'deleteAccount'] : ['postAccount'];
        if (userExist.type === 'staff' && userExist.isadmin === false) {
          userKey.permission = ['debitAccount', 'creditAccount'];
        }

        const validatepass = validPassword(userKey.password, userExist.password);
        if (validatepass) {
          const tokens = jwt.sign({ email: userExist.email, permission: userKey.permission, id: userExist.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
          userExist.token = tokens;
          delete userExist.password;
          delete userExist.email;
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
    } catch (e) {
      console.log('error encountered', e);
      return res.status(500).json({
        error: 'internal error signing in',
      });
    }
  }
}
export default UserController;
