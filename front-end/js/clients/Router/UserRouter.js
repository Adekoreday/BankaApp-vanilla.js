class UserRouter{
 static User(data) {
    let typeofUser = data.isadmin === true ? 'admin' : 'staff';
         if(data.type === 'client' && data.isadmin === false){
           typeofUser = 'user';
         }
         switch(typeofUser){
           case 'admin':
           window.location.href = './html/admin.html';
           break;
           case 'staff':
           window.location.href = './html/staff.html';
           break;
           case 'user':
           window.location.href = './html/user.html';
           break;
         }
  }
}
export default UserRouter;