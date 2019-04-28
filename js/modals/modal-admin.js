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
m = new CheckModal1();

document.getElementById('allAccounts').addEventListener('click', () => {
    m.html = `
 <table>
  <caption>Statement Summary</caption>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Account</th>
      <th scope="col">DETAILS</th>
      <th scope="col">BALANCE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Account">1</td>
      <td data-label="DETAILS">04/01/2016</td>
      <td data-label="TYPE">savings</td>
      <td data-label="BALANCE">#5000</td>
    </tr>
    <tr>
       <td data-label="Account">1</td>
      <td data-label="DETAILS">04/01/2016</td>
      <td data-label="TYPE">savings</td>
      <td data-label="BALANCE">#5000</td>
    </tr>
    <tr>
       <td data-label="Account">1</td>
      <td data-label="DETAILS">04/01/2016</td>
      <td data-label="TYPE">savings</td>
      <td data-label="BALANCE">#5000</td>
    </tr>
        <tr>
       <td data-label="Account">1</td>
      <td data-label="DETAILS">04/01/2016</td>
      <td data-label="TYPE">savings</td>
      <td data-label="BALANCE">#5000</td>
    </tr>
    <tr>
      <td data-label="Account">1</td>
      <td data-label="DETAILS">04/01/2016</td>
      <td data-label="TYPE">savings</td>
      <td data-label="BALANCE">#5000</td>
    </tr>
    <tr>
      <td data-label="Account">1</td>
      <td data-label="DETAILS">04/01/2016</td>
      <td data-label="TYPE">savings</td>
      <td data-label="BALANCE">#5000</td>
    </tr>

  </tbody>
</table>
    ` ;
    m.open();
});

document.getElementById('DEACTIVATE').addEventListener('click', () => {
    m.html = `
  
 <table>
  <caption>DEACTIVATE</caption>
  <thead>
    <tr>
      <th scope="col">ACCOUNT</th>
      <th scope="col">DETAILS</th>
      <th scope="col">TYPE</th>
      <th scope="col">ACTIVATE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>
   <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
  <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>
    <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>
 <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>
  <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>

  </tbody>
</table>
    ` ;
    m.open();
});

document.getElementById('ACTIVATE').addEventListener('click', () => {
    m.html = `
  
 <table>
  <caption>ACTIVATE</caption>
  <thead>
    <tr>
      <th scope="col">ACCOUNT</th>
      <th scope="col">DETAILS</th>
      <th scope="col">TYPE</th>
      <th scope="col">ACTIVATE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>
   <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
  <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>
    <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>
 <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>
  <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="ACTIVATE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>

  </tbody>
</table>
    ` ;
    m.open();
});

document.getElementById('DELETE').addEventListener('click', () => {
    m.html = `
  
 <table>
  <caption>DELETE</caption>
  <thead>
    <tr>
      <th scope="col">ACCOUNT</th>
      <th scope="col">DETAILS</th>
      <th scope="col">TYPE</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="DELETE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>
  <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="DELETE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>
     <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="DELETE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>
     <tr>
      <td data-label="Account">10121832011</td>
      <td data-label="DETAILS">ADEYEMI ADEKOREDE</td>
      <td data-label="TYPE">current</td>
        <td data-label="DELETE">
      <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
      </td>
    </tr>

  </tbody>
</table>
    ` ;
    m.open();
});

document.getElementById('CREDIT').addEventListener('click', () => {
    m.html = ` <div class="col icon">
    
        <i class="fas fa-piggy-bank fa-4x"></i>
      </div>
       <div class="col">
        <div class="hide-md-lg">
          
         <input type="text" name="username" placeholder="ACCOUNT NO" required>
        <input type="text" name="username" placeholder="AMOUNT" required>
        <input type="submit" value="CREDIT">
      </div>
      ` ;
    m.open();
});
document.getElementById('DEBIT').addEventListener('click', () => {
    m.html = ` <div class="col icon">
    
        <i class="fas fa-piggy-bank fa-4x"></i>
      </div>
       <div class="col">
        <div class="hide-md-lg">
        
         <input type="text" name="username" placeholder="ACCOUNT NO" required>
        <input type="text" name="username" placeholder="AMOUNT" required>
        <input type="submit" value="DEBIT">
      </div>
      ` ;
    m.open();
});

document.getElementById('signUp2').addEventListener('click', () => {
    m.html = ` <div class="col icon">
    
        <i class="fas fa-female fa-3x "></i>
      </div>
       <div class="col">
        <div class="hide-md-lg">
         
           <input type="text" name="username" placeholder="ENTER TYPE" required>
          <input type="text" name="username" placeholder="FirstName" required>
         <input type="text" name="username" placeholder="LastName" required>
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <input type="submit" value="Sign Up">
      </div>
      ` ;
    m.open();
});