import '@babel/polyfill';
import UserSeed from './UserSeed';
import AccountSeed from './AccountSeed';
import Userdata from '../config/userdata';
import Accountdata from '../config/accountdata';

class SeedAll {
    static async seedAlldata() {
        try {
            await UserSeed.userSeed(Userdata.user);
            await UserSeed.userSeed(Userdata.staff);
            await UserSeed.userSeed(Userdata.admin);

            await AccountSeed.accountSeed(Accountdata.account1);
            await AccountSeed.accountSeed(Accountdata.account2);
            await AccountSeed.accountSeed(Accountdata.account3);
            console.log('seed All data');
        } catch (err) {
            console.log('error during seed', err);
        }
    }
}

SeedAll.seedAlldata();
