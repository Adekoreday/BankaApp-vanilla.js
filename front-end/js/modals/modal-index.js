    import validators from '../../js/clients/validator/validators';
    import Fetch from '../clients/helpers/fetch';
    import Helpers from '../clients/helpers/helpers';
    import SessionStorage from '../clients/helpers/SessionStorage';
    import UserRouter from '../clients/Router/UserRouter';


class CheckModal1 {
    constructor() {
        this.checkmodalContainers = document.createElement('div');
        this.checkmodalContainers.className = 'Modal';
        this.checkmodalContainers.id = "modalId";
        document.body.appendChild(this.checkmodalContainers);

        const contentContainer = document.createElement('div');
        contentContainer.className = 'container'
        this.checkmodalContainers.appendChild(contentContainer);

        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.className = 'close-button';
        contentContainer.appendChild(closeButton);
        closeButton.addEventListener('click', this.close.bind(this));

        this.content = document.createElement('div');
        this.content.className = 'mycontainer'
        contentContainer.appendChild(this.content);
        //  document.getElementById('modalId').addEventListener('click', this.close.bind(this));

    }

    set html(value) {
        this.content.innerHTML = value;
    }

    open() {
        this.checkmodalContainers.classList.add('open');
    }

    close() {
        this.checkmodalContainers.classList.remove('open');
    }
}

const m = new CheckModal1();
let myhtml;
document.getElementById('signUp').addEventListener('click', () => {
    m.html = ` <div class="col icon">
    
        <i class="fas fa-female fa-3x "></i>
      </div>
       <div class="col">
        <div class="hide-md-lg">
         
          <span id="indicator"></span>
          <input type="text" id="firstName" name="firstName" placeholder="FirstName" required>
         <input type="text" id="lastName"  name="lastName" placeholder="LastName" required">
        <input type="email" id="email"  name="Email" placeholder="Email" required>
        <input type="password" id="password"   name="password" placeholder="Password" required>
        <input type="password" id="confirmPassword"  name="Confirm-password" placeholder="Confirm Password" required>
        <input id="createUser"  type="submit" value="Sign Up">
                <div id="myProgress">
        <div id="myBar"></div>
      </div>
      `;
    m.open();

const url = 'https://bankaandela.herokuapp.com/api/v1/auth/signup';
const Indicator = document.getElementById('indicator');
const CreateUser = document.getElementById('createUser');
const FirstName = document.getElementById('firstName');
const LastName = document.getElementById('lastName');
const Email = document.getElementById('email');
const Password = document.getElementById('password');
const ConfirmPassword = document.getElementById('confirmPassword');
const bar = document.getElementById("myProgress");  
const mybar = document.getElementById("myBar");  
bar.style.display='none';
//check validation if all pass then loads the appopriate page......
let i=0;
createUser.addEventListener('click', () => {
  console.log(`click ${i++}...`);
if(validators.ValidateTextInput(FirstName, Indicator) && validators.ValidateTextInput(LastName, Indicator) && validators.validateEmail(Email, Indicator) &&  validators.validatePassword(Password, Indicator) &&  validators.validateConfirmPassword(Password, ConfirmPassword, Indicator)) {
  bar.style.display='block';
  createUser.disabled = true;
 
  const UserData = {
   firstName: FirstName.value,
   lastName: LastName.value, 
   email: Email.value,
   password: Password.value,
   Type: 'client',
   isAdmin: false
  }

 const t = setInterval(()=>{width+= 10;
 if(width > 100) {
   width = 0;
   }
  mybar.style.width = `${width}%`;
 console.log('width values', width);},1000); 

  const postdata = new Fetch(null);
  postdata.post(url, UserData)
  .then(result => {
    bar.style.display='none';
    clearTimeout(t);
    console.log('mydata', result);
if(result.status === 201){
  Indicator.style.color = "blue";
  Indicator.innerHTML = 'user created sucessfully';
  createUser.value = 'close';
    CreateUser.disabled = false;
  createUser.addEventListener('click', () => {
m.close();
  });
}else{
  Indicator.style.color = "red";
  Indicator.innerHTML = result.statusText;
  CreateUser.disabled = false;
} })
  .catch(err => {
     bar.style.display='none';
    clearTimeout(t);
    Indicator.innerHTML = err;
      CreateUser.disabled = false;
  })
} 

})

});
let width = 0;
width+=5;
if(width === 100) width = 0;
console.log('mywidth', width);

document.getElementById('signIn').addEventListener('click', () => {
    m.html = ` 
       <div>
          <p>sign to banka</p>
         <span id= "indicator"> </span>
        <input id="email" type="email" name="mail" placeholder="Email" required>
        <input id= "password" type="password" name="password" placeholder="Password" required>
        <input id="Login" type="submit" value="Login">
        <div id="myProgress">
        <div id="myBar"></div>
</div>
      </div>
      ` ;
    m.open();
    const myhelper = new Helpers();
    
    const Indicator = document.getElementById('indicator');
const Email = document.getElementById('email');
const Password = document.getElementById('password');
const Login = document.getElementById('Login');
const bar = document.getElementById("myProgress");  
const mybar = document.getElementById("myBar");  
bar.style.display='none';
 

Login.addEventListener('click', () => {
const url = 'https://bankaandela.herokuapp.com/api/v1/auth/signin';
bar.style.display='block';
if( validators.validateEmail(Email, Indicator) &&  validators.validatePassword(Password, Indicator) ) {
   bar.style.display='block';
   Login.disabled = true;
const UserData = {
  email: Email.value,
  password: Password.value
}

 const postdata = new Fetch(null);

 const t = setInterval(()=>{width+= 10;
 Login.value = `sending..`;
 if(width > 99) {
   width = 0;
   }
  mybar.style.width = `${width}%`;
 console.log('width values', width);},1000); 

 postdata.post(url, UserData)
 .then(result => {   
    clearTimeout(t);
    bar.style.display='none';
   console.log(`result is`, result);
   if(result.status === 200){
        result.Data.email = Email.value;
        SessionStorage.storeData('UserData', result.Data);
        console.log(`my result is ${result.Data}`);
        UserRouter.User(result.Data);
         
 //  window.location.href = './html/user.html';
   }else{
 Indicator.innerHTML = result.msg;
  Login.value = 'Login';
   Login.disabled = false;
   }
      })
 .catch(err => {
    Login.value = 'Login';
    Login.disabled = false;
     clearTimeout(t);
    bar.style.display='none';
    Indicator.innerHTML = err;
  })

Login.value = 'Login';
}
});
    
});
document.getElementById('signUp')




 