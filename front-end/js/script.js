const menu = document.querySelector('ul'),
    menubar = document.querySelector('i'),
    aside = document.querySelector('main');

menubar.addEventListener('click', (e) => {
    menu.classList.toggle("active");
    menubar.classList.toggle("active-bar");
    e.preventDefault();
})

aside.addEventListener('click', (e) => {
    menu.classList.remove("active");
})
/*
    let check = document.getElementsByName("checkbox1");
    console.log(check[0]);
    let i;
for (i = 0; i < check.length; i++) {
   check[i].addEventListener( 'change', () => {
    if(check[i].checked) {
     console.log('account no', check[i].value);
    } else {
  console.log('nothing was checked')
    }
 });
}
  */