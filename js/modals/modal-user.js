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

document.getElementById('HISTORY').addEventListener('click', () => {
    m.html = `
 <table>
  <caption>TRANSACTION HISTORY</caption>
  
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Account</th>
      <th scope="col">AMOUNT</th>
      <th scope="col">OLD BALANCE</th>
      <th scope="col">NEW BALANCE</th>
      <th scope="col">DATE</th>

    </tr>
  </thead>
  <tbody>
   
     <tr>
      <td data-label="ID">1</td>
      <td data-label="Account">0121832011</td>
      <td data-label="AMOUNT">2500</td>
      <td data-label="OLD BAL">#2500</td>
      <td data-label="NEW BAL">#5000</td>
      <td data-label="DATE">04/29/2019</td>
    </tr>
     <tr>
      <td data-label="ID">2</td>
      <td data-label="Account">0121832011</td>
      <td data-label="AMOUNT">2500</td>
      <td data-label="OLD BAL">#2500</td>
      <td data-label="NEW BAL">#5000</td>
      <td data-label="DATE">04/29/2019</td>
    </tr>
     <tr>
      <td data-label="ID">3</td>
      <td data-label="Account">0121832011</td>
      <td data-label="AMOUNT">2500</td>
      <td data-label="OLD BAL">#2500</td>
      <td data-label="NEW BAL">#5000</td>
      <td data-label="DATE">04/29/2019</td>
    </tr>
  </tbody>
</table>
    ` ;
    m.open();
});

document.getElementById('newAccount').addEventListener('click', () => {
    m.html = ` <div class="col icon">
    
        <i class="fas fa-female fa-3x "></i>
      </div>
       <div class="col">
        <div class="hide-md-lg">
         
          <span id="indicators"></span>          
         <input type="text" id="Type" placeholder="ENTER ACCOUNT TYPE" required>
        <input type="text" id="Balance" placeholder="OPENING BALANCE" required>
        <input type="submit" id="submit" value="SUBMIT">
                <div class="Progress">
        <div class="Bar"></div>
      </div>
      `;
    m.open();

const userdatas = SessionStorage.getData('UserData');
const url = 'https://bankaandela.herokuapp.com/api/v1/account';
const Indicators = document.getElementById('indicators');
const CreateUser = document.getElementById('submit');
const Type = document.getElementById('Type');
const Balance = document.getElementById('Balance');
const bar = document.querySelector(".Progress");  
const mybar = document.querySelector(".Bar");  
bar.style.display='none';

//check validation if all pass then loads the appopriate page......
let i=0;
CreateUser.addEventListener('click', () => {
if(validators.ValidateTextInput(Type, Indicators) &&  validators.validatetNumberOnly(Balance, Indicators)) {
  
  CreateUser.disabled = true;
 console.log(bar);
  const UserData = {
   Type: Type.value,
   balance: Balance.value, 
  };
bar.style.display='block';
 const t = setInterval(()=>{width+= 10;
 if(width > 100) {
   width = 0;
   }
  mybar.style.width = `${width}%`;
 console.log('width values', width);},1000); 

  const postdata = new Fetch(userdatas.token);
  postdata.PostAuth(url, UserData)
   .then((response => response.json()))
  .then(result => {
    bar.style.display='none';
    clearTimeout(t);
    console.log('mydata', result);
if(result.status === 201){
  Indicators.style.color = "blue";
  Indicators.innerHTML = `account  ${result.Data.accountnumber}  created sucessfully`;
  CreateUser.value = 'close';
    CreateUser.disabled = false;
  CreateUser.addEventListener('click', () => {
m.close();
  });
}else{
  Indicators.style.color = "red";
  Indicators.innerHTML = result.statusText;
  CreateUser.disabled = false;
} })

} 

})



});




const allaccount =document.getElementById('allAccounts');
allaccount.addEventListener('click', () => {
  Indicator.innerHTML = ' ';
  allaccount.disabled = true;
  let mydata = ` `;
  bar.style.display='block';
  const userdata = SessionStorage.getData('UserData');
  const url = `https://bankaandela.herokuapp.com/api/v1/user/${userdata.email}/accounts`;
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
