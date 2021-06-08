let list = document.querySelector('.list');
let btnIphone = document.querySelector('.Iphone');
let btnSams = document.querySelector('.Samsung');
let btnXiaomi = document.querySelector('.Xiaomi');

btnIphone.addEventListener('click', clicker);
btnSams.addEventListener('click', clicker);
btnXiaomi.addEventListener('click', clicker);

function clicker() {
    let value = this.getAttribute('data-position');
    list.style.left = value;
};
