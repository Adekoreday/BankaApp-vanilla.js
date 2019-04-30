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
      <tr>
      <td data-label="ID">4</td>
      <td data-label="Account">0121832011</td>
      <td data-label="AMOUNT">2500</td>
      <td data-label="OLD BAL">#2500</td>
      <td data-label="NEW BAL">#5000</td>
      <td data-label="DATE">04/29/2019</td>
    </tr>
      <tr>
      <td data-label="ID">5</td>
      <td data-label="Account">0121832011</td>
      <td data-label="AMOUNT">2500</td>
      <td data-label="OLD BAL">#2500</td>
      <td data-label="NEW BAL">#5000</td>
      <td data-label="DATE">04/29/2019</td>
    </tr>
     <tr>
       <td data-label="ID">6</td>
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
document.getElementById('NEW').addEventListener('click', () => {
    m.html = ` <div class="col icon">
    
       <div><i class="fas fa-user-plus fa-3x"></i></div>
      </div>
       <div class="col">
        <div class="hide-md-lg">
          
         <input type="text" name="username" placeholder="ENTER ACCOUNT TYPE" required>
        <input type="text" name="username" placeholder="OPENING BALANCE" required>
        <input type="submit" value="SUBMIT">
      </div>
      ` ;
    m.open();
});
document.getElementById('ACCOUNT').addEventListener('click', () => {
    m.html = ` <div class="col">
        <i class="fas fa-piggy-bank fa-4x"></i>
        
      </div>
       <div class="col">
        <div class="hide-md-lg">
          <p>ENTER TRANSACTION ID</p>
        <input type="text" name="mail" placeholder="ID" required>
        <input type="submit" value="FIND">
      </div>
      ` ;
    m.open();
});
