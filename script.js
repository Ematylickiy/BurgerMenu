const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', clicker);
btn2.addEventListener('click', clicker);
btn3.addEventListener('click', clicker);

function clicker() {
    this.classList.toggle('active');
    let dataValue = this.getAttribute('data-active');
    document.querySelector('p[data-active="'+ dataValue + '"]').classList.toggle('activeText');
};


