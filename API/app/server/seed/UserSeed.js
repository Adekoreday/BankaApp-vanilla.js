import db from '../db';
import User from '../models/User';
class UserSeed {

    static userSeed(data) {
        return new Promise((resolve, reject) => {
            const { firstName, lastName, email, password, photo, Type, isAdmin } = data;
            db.querydb(User.AddnewUser(firstName, lastName, email, password, photo, Type, isAdmin))
                .then((result) => {
                    console.log('seed user data sucessfully');
                    resolve(result);
                })
                .catch((err) => {
                    console.log('seed user data failed', err);
                    reject();
                });
        })
    };

    /* static async seedAll() {
         try {
             await this.userSeed(Userdata.user);
             await this.userSeed(Userdata.staff);
             await this.userSeed(Userdata.admin);
             console.log('seedAll Users');
         } catch (e) {
             console.log('seedAll user Error', e);
         }
     }*/
}

export default UserSeed;