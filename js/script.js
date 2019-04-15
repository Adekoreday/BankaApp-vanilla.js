function render() {
    document.getElementById('sidebars').classList.toggle('active');
}

function ShowAccount() {
    document.getElementById("contain-profile").style.visibility = 'hidden';
    document.getElementById("account-profile").style.visibility = 'visible';
}
function showprofile() {
    document.getElementById("account-profile").style.visibility = "hidden";
    document.getElementById("contain-profile").style.visibility = "visible";
}