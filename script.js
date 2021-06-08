let list = document.querySelector('.list')
let btnIphone = document.querySelector('.Iphone')
let btnSams = document.querySelector('.Samsung')
let btnXiaomi = document.querySelector('.Xiaomi')

let stocValue = 0;
btnIphone.onclick = () => {
    stocValue = 0;
    list.style.left = stocValue + 'px';
}
    
btnSams.onclick = () => {
    stocValue = -665
    list.style.left = stocValue + 'px';
}

btnXiaomi.onclick = () => {
    if (stocValue == 0|| stocValue==-665) {
        stocValue = -1330;
        list.style.left = stocValue + 'px';
    }
}
