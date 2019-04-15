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
        contentContainer.appendChild(this.content);
        //document.getElementById('modalId').addEventListener('click', this.close.bind(this));

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
if (window.location.href.indexOf("checkout-page") > -1) {
    myhtml = `<div class="sign-in-text header-bottom">Thanks for your order  <i class="fas fa-money-check-alt"></i></div>
<div class="item-container">
<div class="checkout-item item-small">
    <h3 >USER DETAILS</h3>
    <div><i class="fas fa-user"></i>
        <p>Name : ADEYEMI ADEKOREDE</p>
        <p>Address : Alagomeji Yaba,Lagos</p>
        <p>User ID : #2342</p>
    </div>
</div>
<div class="checkout-item item-small">
    <h3 >Proceeding</h3>
    <i class="fas fa-pen-alt fa-3x"></i>
       Kindly Fill the Form to Check-out
    </div>
</div>

</div>`;
}
if (window.location.href.indexOf("confirmation") > -1) {
    myhtml = `<div class="sign-in-text header-bottom">Thanks for your order  <i class="fas fa-money-check-alt"></i></div>
   <div class="item-container">
   <div class="checkout-item item-small">
   <i class="far fa-thumbs-up fa-5x"></i>
   </div>
   <div class="checkout-item item-small">
   <i class="fas fa-utensils fa-3x"></i> Always checkback tomorrow for meals that are not available today</i>
   </div>
   `;
}
m.html = myhtml;
m.open();


