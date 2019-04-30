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