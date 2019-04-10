import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.userData = decoded;
        next();
    } catch (err) {
        res.status(401).json({
            msg: 'Auth failed token couldn\'t be verified',
            data: `this was the error msg ${err}`,
        })
    }
}

export default verifyToken; 