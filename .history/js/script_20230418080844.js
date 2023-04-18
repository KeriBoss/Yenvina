//Const button menu bar
const btnMenu = document.querySelector('.header-top .menu-bar');
const navbarHeader = document.querySelector('header .nav-bar');

btnMenu.addEventListener('click',function(){
    navbarHeader.classList.toggle('active');
})
navbarHeader.addEventListener('mouseleave',function(event){
    event.addEventListener('click',()=>{
        alert('sad')
    })
})