//Const button menu bar
const btnMenu = document.querySelector('.header-top .menu-bar');
const navbarHeader = document.querySelector('header .nav-bar');

btnMenu.addEventListener('click',function(){
    navbarHeader.style.display = 'block';
})