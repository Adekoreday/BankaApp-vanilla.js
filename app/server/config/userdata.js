const bcrypt = require('bcryptjs');

const Userdata = {
    admin: {
        firstName: 'Adeyemi',
        lastName: 'Adekorede',
        email: 'adeyemi_adekorede@hotmail.com',
        password: bcrypt.hashSync('Kore@123', 10),
        photo: '',
        Type: 'staff',
        isAdmin: true,
    },
    user: {
        firstName: 'Adeseyi',
        lastName: 'Joseph',
        email: 'khord4eng@gmail.com',
        password: bcrypt.hashSync('Kore@123', 10),
        photo: '',
        Type: 'client',
        isAdmin: false,
    },
    staff: {
        firstName: 'Adekorede',
        lastName: 'Adeseyi',
        email: 'kaytronics@gmail.com',
        password: bcrypt.hashSync('Kore@123', 10),
        photo: '',
        Type: 'staff',
        isAdmin: false,
    },
};

export default Userdata;