function img_slider(anything){
    document.querySelector('.one').src = anything;
};

// SCROLL REVEAL

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1500,
    delay: 200,
    viewFactor: 0.15
});

ScrollReveal().reveal('.one,.heading,.newsletter h2,.home-text',{origin:'top'});
ScrollReveal().reveal('.description,.main-desc',{origin:'bottom'});
ScrollReveal().reveal('.desc-icons,.specification,.contact-form',{scale:'0.8',delay:'350'});
ScrollReveal().reveal('.social,.copy',{origin:'left'});
ScrollReveal().reveal('.main',{scale:'0.8',delay:'300'});

// Menu 

const menu_btn = document.querySelector('#menu-icon');
const mobile_menu = document.querySelector('.nav_list');

document.onclick=function(e){
    if(e.target !== menu_btn && e.target !== mobile_menu)
    {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    }
}
menu_btn.addEventListener("click",function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});