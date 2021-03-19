let menuClick = document.getElementById('menu-click');
let enlaces = document.querySelector('.enlaces-header');

menuClick.addEventListener('click', () =>{
    enlaces.classList.toggle('click');
    // enlaces.style.clipPath = 'circle(150% at 100% 0)';
    // enlaces.style.transition = 'clipPath 2s';
});

console.log(enlaces.style);