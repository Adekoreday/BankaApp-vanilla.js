import validators from '../../js/clients/validator/validators';
import SessionStorage from '../clients/helpers/SessionStorage';
import Fetch from '../clients/helpers/fetch';
import DateTime from '../clients/helpers/dateFormater'; 


class CheckModal1 {
    constructor() {
        this.checkmodalContainers = document.createElement('div');
        this.checkmodalContainers.className = 'Modal';
        this.checkmodalContainers.id = "modalId";
        document.body.appendChild(this.checkmodalContainers);

        const contentContainer = document.createElement('div');
        contentContainer.className = 'adminmaincontainer'
        this.checkmodalContainers.appendChild(contentContainer);

        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.className = 'close-button';
        contentContainer.appendChild(closeButton);
        closeButton.addEventListener('click', this.close.bind(this));

        this.content = document.createElement('div');
        this.content.className = 'admincontainer'
        contentContainer.appendChild(this.content);

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
let id =1;
let width = 0;
width+=5;
if(width > 100) width = 0;

const bar = document.getElementById("myProgress");  
const mybar = document.getElementById("myBar");  
 const Indicator = document.getElementById('indicator');
bar.style.display='none';

window.addEventListener('load', () => {
const userdata = SessionStorage.getData('UserData');
const username =  document.getElementById('username');
username.innerHTML = userdata.firstname.toUpperCase();


});
const allaccount =document.getElementById('allAccounts');
allaccount.addEventListener('click', () => {
  Indicator.innerHTML = ' ';
  allaccount.disabled = true;
  let mydata = ` `;
  bar.style.display='block';
  const userdata = SessionStorage.getData('UserData');
  const url = 'https://bankaandela.herokuapp.com/api/v1/accounts';
   const t = setInterval(()=>{width+= 10;
 if(width > 100) {
   width = 0;
   }
  mybar.style.width = `${width}%`;},1000); 


const myfetch = new Fetch(userdata.token);
 myfetch.get(url)
.then(result => {
    clearTimeout(t);
     bar.style.display='none';
     allaccount.disabled = false;
  if(result.status === 200){
  let i=1;
  result.data.map((x) => {
    mydata += 
    ` <tr>
      <td data-label="S/N">${i++}</td>
      <td data-label="Account">${x.accountnumber}</td>
      <td data-label="DETAILS">${DateTime(x.createdon)}</td>
      <td data-label="TYPE">${x.type}</td>
      <td data-label="STATUS">${x.status}</td>
      <td data-label="BALANCE">${x.balance}</td>
    </tr>`
  })
      m.html = `
 <table>
  <caption>Statement Summary</caption>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Account</th>
      <th scope="col">DETAILS</th>
       <th scope="col">TYPE</th>
       <th scope="col">STATUS</th>
      <th scope="col">BALANCE(#)</th>
    </tr>
  </thead>
  <tbody>
    ${mydata}
  </tbody>
</table>
    ` ;
     m.open();
  }else{
    Indicator.innerHTML = result.msg;
  }
})
 .catch(err => {
     clearTimeout(t);
    bar.style.display='none';
    Indicator.innerHTML = err;
    allaccount.disabled = false;
  })   
});

document.getElementById('DEACTIVATE').addEventListener('click', () => {
    Indicator.innerHTML = ' ';
    let mydata = ` `;
  bar.style.display='block';
  const userdata = SessionStorage.getData('UserData');
  const url = 'https://bankaandela.herokuapp.com/api/v1/accounts?status=active';
   const t = setInterval(()=>{width+= 10;
 if(width > 100) {
   width = 0;
   }
  mybar.style.width = `${width}%`;},1000); 

  const myfetch = new Fetch(userdata.token);
 myfetch.get(url)
.then(result => {
      clearTimeout(t);
     bar.style.display='none';
  if(result.status === 200){
  mydata = ` `;
      let i=1;
  let b=0;
       result.data.map((x) => {
         b=i++;
    mydata += 
       `<tr> 
      <td data-label="S/N">${b}</td>
      <td data-label="Email"> <div class="big-content">${x.email}</div></td>
      <td data-label="TYPE">${x.type}</td>
         <td data-label="Account">${x.accountnumber}</td>
         <td data-label="STATUS">${x.status}</td>
         <td data-label="BALANCE">${x.balance}</td>
        <td data-label="DEACTIVATE">
      <label class="switch">
  <input  type="checkbox" id=${b} name="checkbox" value=${x.accountnumber}>
  <span class="slider round"></span>
</label>
      </td>
    </tr>`;
       });
      m.html = `
 <table id="deactivateTable">
  <caption>DEACTIVATE</caption>
  <thead>
    <tr>
      <th scope="col">S/N</th>
      <th scope="col">Email</th>
      <th scope="col">TYPE</th>
      <th scope="col">ACCOUNT</th>
      <th scope="col">STATUS</th>
      <th scope="col">BALANCE</th>
      <th scope="col">DEACTIVATE</th>
    </tr>
  </thead>
  <tbody>
  ${mydata}
     </tbody>
</table>
    ` ;
    m.open();
  }else{
    Indicator.innerHTML = result.msg;
  }
})
 .then(() => {
   let check = document.getElementsByName("checkbox");
      let i;
for (i = 0; i < check.length; i++) {
   check[i].addEventListener( 'change', (i) => {
         const deactivateaccount =  i.srcElement.value;
           const deactivateurl = `https://bankaandela.herokuapp.com/api/v1/account/${deactivateaccount}`;
           let Dormant;
  if(i.srcElement.checked === true) {
     Dormant = {
      status: 'dormant',
    };
     } else {
         Dormant = {
      status: 'active',
    };   
   }
   console.log(Dormant);
  myfetch.patch(deactivateurl, Dormant)
  .then((response => response.json()))
  .then(result => { 
    const element = document.getElementById('deactivateTable');
    const mydata = document.getElementById(`${i.srcElement.id}`);
    const row =  element.rows[mydata.id];
    row.style.display = 'none';
        console.log(`my data`, result);
        console.log(`row affected`, row);
  })
  .catch(err => {
    Indicator.innerHTML = err;   
 });
 });
}
 })
 .catch(err => {
     clearTimeout(t);
    bar.style.display='none';
    Indicator.innerHTML = err;
  }); 

  });

document.getElementById('ACTIVATE').addEventListener('click', () => {
   Indicator.innerHTML = ' ';
    let mydata = ` `;
  bar.style.display='block';
  const userdata = SessionStorage.getData('UserData');
  const url = 'https://bankaandela.herokuapp.com/api/v1/accounts?status=dormant';
   const t = setInterval(()=>{width+= 10;
 if(width > 100) {
   width = 0;
   }
  mybar.style.width = `${width}%`;},1000); 

  const myfetch = new Fetch(userdata.token);
 myfetch.get(url)
.then(result => {
      clearTimeout(t);
     bar.style.display='none';
  if(result.status === 200){
  mydata = ` `;
    let i=1;
  let b=0;
       result.data.map((x) => {
  b= i++;       
    mydata += 
       `<tr> 
       <td data-label="S/N">${b}</td>
      <td data-label="Email"> <div class="big-content">${x.email}</div></td>
      <td data-label="TYPE">${x.type}</td>
         <td data-label="Account">${x.accountnumber}</td>
         <td data-label="STATUS">${x.status}</td>
         <td data-label="BALANCE">${x.balance}</td>
        <td data-label="DEACTIVATE">
      <label class="switch">
  <input id=${b} type="checkbox" name="checkbox" value=${x.accountnumber}>
  <span class="slider round"></span>
</label>
      </td>
    </tr>`;
       });
      m.html = `
      
 <table id="activateTable">
  <caption>ACTIVATE</caption>
  <thead>
    <tr>
     <th scope="col">S/N</th>
      <th scope="col">Email</th>
      <th scope="col">TYPE</th>
      <th scope="col">ACCOUNT</th>
      <th scope="col">STATUS</th>
      <th scope="col">BALANCE</th>
      <th scope="col">ACTIVATE</th>
    </tr>
  </thead>
  <tbody>
  ${mydata}
     </tbody>
</table>
    ` ;
    m.open();
  }else{
    Indicator.innerHTML = result.msg;
  }
})
 .then(() => {
   let check = document.getElementsByName("checkbox");
      let i;
for (i = 0; i < check.length; i++) {
   check[i].addEventListener( 'change', (i) => {   
         const activateaccount =  i.srcElement.value;
           const activateurl = `https://bankaandela.herokuapp.com/api/v1/account/${activateaccount}`;
                const element = document.getElementById('activateTable');
           let Dormant;
  if(i.srcElement.checked === true) {
     Dormant = {
      status: 'active',
    };
     } else {
         Dormant = {
      status: 'dormant',
    };   
   }
  myfetch.patch(activateurl, Dormant)
  .then((response => response.json()))
  .then(result => { 
          const mydata = document.getElementById(`${i.srcElement.id}`);
          const row =  element.rows[mydata.id];
        console.log(`my data`, result);
        row.style.display = 'none';
  })
  .catch(err => {
    Indicator.innerHTML = err;   
 });
 });
}
 })
 .catch(err => {
     clearTimeout(t);
    bar.style.display='none';
    Indicator.innerHTML = err;
  }); 

});

document.getElementById('DELETE').addEventListener('click', () => {
Indicator.innerHTML = ' ';
    let mydata = ` `;
  bar.style.display='block';
    const userdata = SessionStorage.getData('UserData');
  const url = 'https://bankaandela.herokuapp.com/api/v1/accounts';
   const t = setInterval(()=>{width+= 10;
 if(width > 100) {
   width = 0;
   }
  mybar.style.width = `${width}%`;},1000); 


const myfetch = new Fetch(userdata.token);
 myfetch.get(url)
.then(result => {
    clearTimeout(t);
     bar.style.display='none';
     allaccount.disabled = false;
  if(result.status === 200){
  let i=1;
  let b=0;
  result.data.map((x) => {
    b= i++;
    mydata += 
    ` <tr>
      <td data-label="S/N">${b}</td>
      <td data-label="Account">${x.accountnumber}</td>
      <td data-label="DETAILS">${DateTime(x.createdon)}</td>
      <td data-label="TYPE">${x.type}</td>
      <td data-label="STATUS">${x.status}</td>
      <td data-label="BALANCE">${x.balance}</td>
      <td> <div class="btn" title=${b} id=${x.accountnumber}><i class="fa fa-trash"></i></div></td>
    </tr>`
  })
      m.html = `
 <table id="deleteTable">
  <caption>Statement Summary</caption>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Account</th>
      <th scope="col">DETAILS</th>
       <th scope="col">TYPE</th>
       <th scope="col">STATUS</th>
      <th scope="col">BALANCE(#)</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
    ${mydata}
  </tbody>
</table>
    ` ;
     m.open();
  }else{
    Indicator.innerHTML = result.msg;
  }  
})
.then(() => {
const deletes = document.getElementsByClassName('btn');
      let i;
for (i = 0; i < deletes.length; i++) {
   deletes[i].addEventListener( 'click', (i) => {
        const element = document.getElementById('deleteTable');
        const delurl = `https://bankaandela.herokuapp.com/api/v1/accounts/${i.srcElement.id}`;
        const mydata = document.getElementById(`${i.srcElement.id}`);
       myfetch.delete(delurl)
      .then((response => response.json()))
      .then(result => {
           console.log(result.msg);
         const row =  element.rows[i.srcElement.title];
         row.style.display= 'none';
          // element.style.display = 'none';
    })  
       .catch(err => {
          console.log(err);
        });
           
 });
}
});
});

document.getElementById('CREDIT').addEventListener('click', () => {
Indicator.innerHTML = ' ';
    m.html = ` <div class="col icon">
    
        <i class="fas fa-piggy-bank fa-4x"></i>
      </div>
       <div class="col">
        <div class="hide-md-lg">
          <span id="indicators"></span>
         <input id="accountNumber" type="text" name="accountNumber" placeholder="ACCOUNT NO" required>
        <input id="amount" type="text"  name="Amount" placeholder="AMOUNT" required>
        <input id="creditaccount" type="submit" value="CREDIT"></div>
                  <div id="myProgress" class="progress">
        <div id="myBar" class="bar"></div>
      </div>
      ` ;
    m.open();

const Indicators = document.getElementById('indicators');
const accountNo = document.getElementById('accountNumber');
const Amount = document.getElementById('amount');
const creditAccount = document.getElementById('creditaccount');
const bar = document.querySelector('.progress');  
const mybar = document.querySelector('.bar');  
bar.style.display = 'none';

console.log(bar);
creditAccount.addEventListener('click', () => {
  
if(validators.validateNumberOnly(accountNo, Indicators) && validators.validateAccountNumberOnly(Amount, Indicators)) {
  creditAccount.disabled = true;
     const t = setInterval(()=>{width+= 10;
 if(width > 100) {
   width = 0;
   }
  mybar.style.width = `${width}%`;},1000); 
  bar.style.display='block';

  const amountdata = {
    amount: Amount.value
  };
      const url = `https://bankaandela.herokuapp.com/api/v1/transactions/${accountNo.value}/credit`;
  const userdata = SessionStorage.getData('UserData');
  const myfetch = new Fetch(userdata.token);
  myfetch.PostAuth(url, amountdata)
  .then((response => response.json()))
  .then(result => {
        clearTimeout(t);
     bar.style.display='none';
     creditAccount.disabled = false;

      if(result.status === 200){
        console.log(result);
        Indicators.innerHTML = `${result.data.Transactiontype} sucessfull, balance is ${result.data.accountBalance}`;
      }else{
        Indicators.innerHTML = result.status;
      }
  })
  .catch(err => console.log(err));



}
});


});
document.getElementById('DEBIT').addEventListener('click', () => {

Indicator.innerHTML = ' ';
    m.html = ` <div class="col icon">
    
        <i class="fas fa-piggy-bank fa-4x"></i>
      </div>
       <div class="col">
        <div class="hide-md-lg">
          <span id="indicators"></span>
         <input id="accountNumber" type="text" name="accountNumber" placeholder="ACCOUNT NO" required>
        <input id="amount" type="text"  name="Amount" placeholder="AMOUNT" required>
        <input id="debitAccount" type="submit" value="DEBIT"></div>
                  <div id="myProgress" class="progress">
        <div id="myBar" class="bar"></div>
      </div>
      ` ;
    m.open();

const Indicators = document.getElementById('indicators');
const accountNo = document.getElementById('accountNumber');
const Amount = document.getElementById('amount');
const debitAccount = document.getElementById('debitAccount');
const bar = document.querySelector('.progress');  
const mybar = document.querySelector('.bar');  
bar.style.display = 'none';

debitAccount.addEventListener('click', () => {
if(validators.validateAccountNumberOnly(accountNo, Indicators) && validators.validatetNumberOnly(Amount, Indicators)) {
  debitAccount.disabled = true;
     const t = setInterval(()=>{width+= 10;
 if(width > 100) {
   width = 0;
   }
  mybar.style.width = `${width}%`;},1000); 
  bar.style.display='block';

  const amountdata = {
    amount: Amount.value
  };
      const url = `https://bankaandela.herokuapp.com/api/v1/transactions/${accountNo.value}/debit`;
  const userdata = SessionStorage.getData('UserData');
  const myfetch = new Fetch(userdata.token);
  myfetch.PostAuth(url, amountdata)
  .then((response => response.json()))
  .then(result => {
        clearTimeout(t);
     bar.style.display='none';
     debitAccount.disabled = false;

      if(result.status === 200){
        console.log(result);
        Indicators.innerHTML = `${result.data.Transactiontype} sucessfull, balance is ${result.data.accountBalance}`;
      }else{
        Indicators.innerHTML = result.status;
      }
  })
  .catch(err => console.log(err));
}
});

});


document.getElementById('signUp2').addEventListener('click', () => {
    m.html = ` <div class="col icon">
    
        <i class="fas fa-female fa-3x "></i>
      </div>
       <div class="col">
        <div class="hide-md-lg">
         
          <span id="indicators"></span>
          <select id="mySelect">
    <option value="admin">Admin</option>
    <option value="staff" selected>cashier</option>
  </select>
          <input type="text" id="firstName" name="firstName" placeholder="FirstName" required>
         <input type="text" id="lastName"  name="lastName" placeholder="LastName" required">
        <input type="email" id="email"  name="Email" placeholder="Email" required>
        <input type="password" id="password"   name="password" placeholder="Password" required>
        <input type="password" id="confirmPassword"  name="Confirm-password" placeholder="Confirm Password" required>
        <input id="createUser"  type="submit" value="Sign Up">
                <div class="Progress">
        <div class="Bar"></div>
      </div>
      `;
    m.open();


const url = 'https://bankaandela.herokuapp.com/api/v1/auth/signup';
const Type = document.getElementById('mySelect');
const Indicators = document.getElementById('indicators');
const CreateUser = document.getElementById('createUser');
const FirstName = document.getElementById('firstName');
const LastName = document.getElementById('lastName');
const Email = document.getElementById('email');
const Password = document.getElementById('password');
const ConfirmPassword = document.getElementById('confirmPassword');
const bar = document.querySelector(".Progress");  
const mybar = document.querySelector(".Bar");  
bar.style.display='none';

//check validation if all pass then loads the appopriate page......
let i=0;
createUser.addEventListener('click', () => {
  console.log(`click ${i++}...`);
if(validators.ValidateTextInput(FirstName, Indicators) && validators.ValidateTextInput(LastName, Indicators) && validators.validateEmail(Email, Indicators) &&  validators.validatePassword(Password, Indicators) &&  validators.validateConfirmPassword(Password, ConfirmPassword, Indicators)) {
  bar.style.display='block';
  createUser.disabled = true;
 console.log(bar);
  const UserData = {
   firstName: FirstName.value,
   lastName: LastName.value, 
   email: Email.value,
   password: Password.value,
   Type: 'staff',
   isAdmin: Type.value === 'admin' ? true : false,
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
  Indicators.style.color = "blue";
  Indicators.innerHTML = 'user created sucessfully';
  createUser.value = 'close';
    CreateUser.disabled = false;
  createUser.addEventListener('click', () => {
m.close();
  });
}else{
  Indicators.style.color = "red";
  Indicators.innerHTML = result.statusText;
  CreateUser.disabled = false;
} })
  .catch(err => {
     bar.style.display='none';
    clearTimeout(t);
    Indicators.innerHTML = err;
      CreateUser.disabled = false;
  })
} 

})



});