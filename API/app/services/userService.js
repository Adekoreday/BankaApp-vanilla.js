import userData from '../../utils/userdb';

class UserService {
    constructor() {
        this.data = userData;
    }
    /*
        fetchAllUsers() {
            return this.data.map(users => users);
        } */

    addNewUser(newUser) {
        const myUser = newUser;
        const { length } = this.data;
        let { id } = this.data[length - 1];
        id += 1;
        myUser.id = id;
        this.data.push(myUser);
        return myUser;
    }
    /*
        getUserbyId(id) {
            const selectedUser = this.data.find(user => parseInt(user.id, 10) === parseInt(id, 10));
            return selectedUser;
        } */

    userExistBefore(mail) {
        const check = this.data.find(user => user.email === mail);
        return check;
    }
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
