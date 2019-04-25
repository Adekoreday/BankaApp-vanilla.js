class User {

    static CreateUserTable() {
        return `DROP TABLE IF EXISTS users CASCADE;
        CREATE TABLE users(
            id BIGSERIAL UNIQUE NOT NULL PRIMARY KEY,
            firstName VARCHAR(100) NOT NULL,
            lastName VARCHAR(100) NOT NULL,
            email VARCHAR(150) NOT NULL UNIQUE,
            password VARCHAR(150),
            photo TEXT,
            Type VARCHAR(20) NOT NULL CONSTRAINT type_match CHECK(Type = 'staff' OR Type = 'client'),
            isAdmin BOOLEAN NOT NULL,
            createdOn DATE DEFAULT CURRENT_DATE);
        `;
    }

    static DropUserTable() {
        return 'DROP TABLE users CASCADE';
    }

    static AddnewUser(firstName, lastName, email, password, photo, Type, isAdmin) {
        const queryString = {
            text: `INSERT INTO users (firstName, lastName, email, password, photo, Type, isAdmin)
                                     VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            values: [firstName, lastName, email, password, photo, Type, isAdmin],
        }
        return queryString;
    }

    static GetALLUser() {
        const queryString = {
            text: 'SELECT * FROM users',
        }
        return queryString;
    }

    static UpdateExistingUser(userData, id) {

        const queryString = {
            text: `UPDATE users SET firstName = $1, lastName =$2, email= $3, password =$4, photo =$5, Type= $6, isAdmin=$7  WHERE id = $8`,
            values: [userData.firstName, userData.lastName, userData.email, userData.password, userData.photo, userData.Type, userData.isAdmin, id],
        }
        return queryString;
    }

    static checkifUserExist(email) {
        const queryString = {
            text: `SELECT * FROM users WHERE  users.email = $1`,
            values: [email],
        }
        return queryString;
    }

    static DeleteUser(id) {
        const queryString = {
            text: `DELETE FROM users WHERE users.id = $1`,
            values: [id],
        }
        return queryString;
    }

}
export default User;