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

m = new CheckModal1();
let myhtml;
document.getElementById('signUp').addEventListener('click', () => {
    m.html = ` <div class="col icon">
    
        <i class="fas fa-female fa-3x "></i>
      </div>
       <div class="col">
        <div class="hide-md-lg">
         
        
          <input type="text" name="username" placeholder="FirstName" required>
         <input type="text" name="username" placeholder="LastName" required>
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <input type="submit" value="Sign Up">
      </div>
      ` ;
    m.open();
});

document.getElementById('signIn').addEventListener('click', () => {
    m.html = ` <div class="col">
        <a href="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
        <a href="#" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="#" class="google btn"><i class="fa fa-google fa-fw">
          </i> Login with Google+
        </a>
      </div>
       <div class="col">
        <div class="hide-md-lg">
          <p>Or sign in manually:</p>
        <input type="text" name="mail" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <input type="submit" value="Login">
      </div>
      ` ;
    m.open();
});
document.getElementById('allAccounts').addEventListener('click', () => {
    m.html = ` ` ;
    m.open();
});




