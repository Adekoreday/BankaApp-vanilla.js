import User from '../server/models/User';
import db from '../server/db';


class UserService {

    static CheckifUserExist(mail) {
        return new Promise((resolve, reject) => {
            db.querydb(User.checkifUserExist(mail))
                .then((data) => {
                    if (data.rows.length < 1) {
                        resolve(undefined);
                    } else {
                        const { id, firstname, lastname, email, password, photo, type, isadmin, createdon } = data.rows[0];
                        const payload = {
                            id, firstname, lastname, email, password, photo, type, isadmin, createdon,
                        };
                        resolve(payload);
                    }
                });
        });
    }

    static Signup(newUser, res) {
        return new Promise((resolve, reject) => {
            const { firstName, lastName, email, password, photo, Type, isAdmin } = newUser;

            db.querydb(User.AddnewUser(firstName, lastName, email, password, photo, Type, isAdmin))
                .then((data) => {
                    resolve(data.rows[0]);
                })
                .catch((err) => {

                    res.status(400).json({
                        status: 400,
                        Data: 'you entered wrong Type..',
                    });
                    reject(err);

                });
        });
    }

     
     static CheckifUserExistbyId(myid) {
         console.log('myid', myid);
        return new Promise((resolve, reject) => {
            db.querydb(User.checkifUserExistbyId(myid))
                .then((data) => {
                    if (data.rows.length < 1) {
                        resolve(undefined);
                    } else {
                        resolve(data.rows);
                    }
                });
        });
    }

}

export default UserService;
