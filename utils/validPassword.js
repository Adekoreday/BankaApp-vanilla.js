import bcrypt from 'bcryptjs';

const validPassword = (password, userPassword) => {
    const isValid = bcrypt.compareSync(password, userPassword);
    return isValid;
};

export default validPassword;