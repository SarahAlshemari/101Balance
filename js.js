
// // SHOW MENU 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')




// DARK LIGHT THEME  

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-theme");
  
 }



// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
             .menu__content,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
});


