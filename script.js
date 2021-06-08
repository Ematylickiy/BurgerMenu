const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn1.onclick = () => {
    btn1.classList.toggle('active')
    document.querySelector('.text1').classList.toggle('activeText');
};

btn2.onclick = () => {
    btn2.classList.toggle('active')
    document.querySelector('.text2').classList.toggle('activeText');
};

btn3.onclick = () => {
    btn3.classList.toggle('active')
    document.querySelector('.text3').classList.toggle('activeText');
};



