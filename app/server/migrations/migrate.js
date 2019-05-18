import '@babel/polyfill';
import UserMigration from './UserMigration';
import AccountMigration from './AccountMigration';
import TransactionMigration from './TransactionMigration';

const { UserMigrate } = UserMigration;
const { AccountMigrate } = AccountMigration;
const { TransactionMigrate } = TransactionMigration;

async function start() {
    try {
        await UserMigrate();
        await AccountMigrate();
        await TransactionMigrate();
        console.log('migration sucessfull');
    } catch (e) {
        console.log('error', e);
    }
}

start();
