const btnBurger = document.querySelector('.burger-line');
const a = Array.from(document.querySelector('.burger-line').children);
btnBurger.addEventListener('click', burgerMenu);

function burgerMenu() {
    this.classList.toggle('active-btn');
    for (let i = 0; i < a.length; i++){
        a[i].classList.toggle('active-btn');
    };
    document.querySelector('#nav-menu').classList.toggle('active-btn');
    document.querySelector('#image').classList.toggle('active-btn');
};
