"use strict"

"use strict"

// DEBUT DARCK MODE

let bt=document.querySelector('button');
console.log(bt);

bt.addEventListener("click",backgroundC);

let interrupteur=0;
function backgroundC(){
    let body=document.querySelector('body');
    let header=document.querySelector('header')
    let footer=document.querySelector('footer')
    let h2=document.querySelector('h2')
    let form=document.querySelector('form')
    if(interrupteur==0){
        body.style.background='#647ea3';
        interrupteur=1;
        header.style.backgroundImage='url(GN1.gif)';
        footer.style.backgroundImage='url(GN1.gif)';
        h2.style.background='#0000007d';
        form.style.background='#0000007d';
    }else{
        body.style.background='#fbdab1';
        interrupteur=0;
        header.style.backgroundImage='url(GM2.gif)';
        footer.style.backgroundImage='url(GM2.gif)';
        h2.style.background='#d3a775';
        form.style.background='#d3a775';
    }
}

//FIN DARCK MODE

// DEBUT MENU BURGER

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}

// FIN MENU BURGER

// DEBUT CARROUSEL

const imageSlider = document.getElementById('imageSlider');
let currentIndex = 0;
function nextImage() {
    currentIndex = (currentIndex + 1) % imageSlider.children.length;
    updateSlider();
}
function updateSlider() {
    const transformValue = -currentIndex * 334; // Largeur de l'image ADAPTER POUR LE RESPONSIV FORMAT XR
    imageSlider.style.transform = `translateX(${transformValue}px)`;
}

setInterval(nextImage, 3000);

// FIN CARROUSEL