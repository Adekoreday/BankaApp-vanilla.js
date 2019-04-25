class Account {

    static CreateAccountTable() {
        return `
        CREATE TABLE accounts(
            id BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
            accountNumber BIGINT UNIQUE NOT NULL,
            status VARCHAR(10) NOT NULL CONSTRAINT acc_status_match CHECK(status = 'draft' OR status = 'active' OR status = 'dormant' ),
            Type VARCHAR(10) NOT NULL CONSTRAINT acc_type_match CHECK(Type = 'savings' OR Type = 'current' OR Type = 'loan' ),
            balance FLOAT NOT NULL,
            user_id BIGINT NOT NULL REFERENCES users (id),
            createdOn DATE DEFAULT CURRENT_DATE);
        `;
    }

    static DropAccountTable() {
        return 'DROP TABLE accounts CASCADE';
    }

    static AddnewAccount(accountNumber, status, Type, balance, userId) {
        const queryString = {
            text: `INSERT INTO accounts (accountNumber, status, Type, balance, user_id)
                                     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            values: [accountNumber, status, Type, balance, userId],
        }
        return queryString;
    }

    static checkifAccountExist(accountNumber) {
        const queryString = {
            text: `SELECT * FROM accounts WHERE  accounts.accountnumber = $1`,
            values: [accountNumber],
        }
        return queryString;
    }

    static UpdateAccount(userput, accountNumber) {
        const queryString = {
            text: 'UPDATE accounts SET status = $1 WHERE accounts.accountnumber = $2 RETURNING *',
            values: [userput.status, accountNumber],
        }
        return queryString;
    }

    static UpdateAccountBalance(balance, accountNumber) {
        const queryString = {
            text: 'UPDATE accounts SET balance = $1 WHERE accounts.accountnumber = $2 RETURNING *',
            values: [balance, accountNumber],
        }
        return queryString;
    }

    static DeleteAccount(accountNumber) {
        const queryString = {
            text: 'DELETE FROM accounts where accounts.accountnumber = $1',
            values: [accountNumber],
        }
        return queryString;
    }
}
export default Account;