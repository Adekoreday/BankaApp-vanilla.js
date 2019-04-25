import UserMigration from './UserMigration';
import AccountMigration from './AccountMigration';
import TransactionMigration from './TransactionMigration';

const { UserUnMigrate } = UserMigration;
const { AccountUnMigrate } = AccountMigration;
const { TransactionUnMigrate } = TransactionMigration;

async function start() {
    try {
    
     await TransactionUnMigrate();
      await AccountUnMigrate();
      await UserUnMigrate();
       
        console.log('unmigration sucessfull');
    } catch (e) {
        console.log('error', e);
    }
}

start();