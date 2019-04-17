import bcrypt from 'bcrypt';

class HashPassword {
    static hashPassword(req, res, next) {
        console.log(req.body);
        const salt = bcrypt.genSaltSync(15);
        const password = bcrypt.hashSync(req.body.password, salt);
        req.body.password = password;
        next();
    };
}
export default HashPassword;
