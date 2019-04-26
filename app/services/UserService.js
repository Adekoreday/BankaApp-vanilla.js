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
    /*
       
            addNewUser(newUser) {
                const myUser = newUser;
                const { length } = this.data;
                let { id } = this.data[length - 1];
                id += 1;
                myUser.id = id;
                this.data.push(myUser);
                return myUser;
            }
            */


    /*
        getUserbyId(id) {
            const selectedUser = this.data.find(user => parseInt(user.id, 10) === parseInt(id, 10));
            return selectedUser;
        } */
    /*
       
        
            putUser(userput, id) {
                const selectedUser = this.data.find(user => parseInt(user.id, 10) === parseInt(id, 10));
                selectedUser.firstName = userput.firstName;
                selectedUser.lastName = userput.lastName;
                selectedUser.email = userput.email;
                selectedUser.isAdmin = userput.isAdmin;
                return selectedUser;
            }
        
            deleteUser(id) {
                const selectedUser = this.data.find(user => parseInt(user.id, 10) === parseInt(id, 10));
                this.data.splice(selectedUser.id - 1, 1);
                return this.data;
        
            } */

}

export default UserService;
