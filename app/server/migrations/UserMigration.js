import db from '../db';
import User from '../models/User';

class UserMigration {
    static UserMigrate() {
        const { CreateUserTable } = User;
        return new Promise((resolve, reject) => {
            db.querydb(CreateUserTable())
                .then((result) => {
                    console.log('created new user table ', result);
                    resolve();
                })
                .catch((err) => {
                    console.log('failed to created new user table ', err);
                    reject(err);
                })
        });
    }

    static UserUnMigrate() {
        const { DropUserTable } = User;
        return new Promise((resolve, reject) => {
            db.querydb(DropUserTable())
                .then((result) => {
                    console.log('drop user table ', result);
                    resolve();
                })
                .catch((err) => {
                    console.log('failed to drop user table ', err);
                    reject(err);
                })
        });
    }
}
export default UserMigration;
