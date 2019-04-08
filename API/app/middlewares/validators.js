import Joi from 'joi';
import User from '../models/users_model';

class Validator {

    static SignUpValidator(req, res, next) {
        const Users = new User();
        const result = Joi.validate(req.body, Users.UserSchema);
        if (result.error) {
            return res.status(400).send(result.error.details.map(x => x.message));
        }
        next();
    }

    static SignInValidator(req, res, next) {
        const Users = new User();
        const result = Joi.validate(req.body, Users.UserSignInSchema);
        if (result.error) {
            return res.status(401).send(result.error.details.map(x => x.message));
        }
        next();
    }

}

export default Validator;
