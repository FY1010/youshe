console.log("content.js加载成功");

let rightWechat = document.getElementById('rightWechat'),
    divRight1_show = document.getElementById('divRight1_show');
rightWechat.onmouseover = function () {
    divRight1_show.style.opacity = '1';
    divRight1_show.style.transform = 'translateX(-320px)'
};
rightWechat.onmouseout = function () {
    divRight1_show.style.opacity = '0';
    divRight1_show.style.transform = 'translateX(0)'
};
divRight1_show.onmouseover = function () {
    divRight1_show.style.opacity = '1';
    divRight1_show.style.transform = 'translateX(-320px)'
};
divRight1_show.onmouseout = function () {
    divRight1_show.style.opacity = '0';
    divRight1_show.style.transform = 'translateX(0)'
};
console.log('content.js');

let c1hidden = document.getElementsByClassName('c1divBottom2');
function c1_left() {
    c1hidden[0].style.transform = 'translateX(-100%)'
}
function c1_right() {
    c1hidden[0].style.transform = 'translateX(0)'
}
function c1_left2() {
    c1hidden[1].style.transform = 'translateX(-100%)'
}
function c1_right2() {
    c1hidden[1].style.transform = 'translateX(0)'
}
let topImg = document.getElementById('topImg'),
    topShow = document.getElementById('topShow'),
    trContainer = document.getElementsByClassName('trContainer'),
    t = 0;
topShow.onmouseover = function () {
    topImg.src = 'img/header/topArrow2.png';
};
topShow.onmouseout = function () {
    topImg.src = 'img/header/topArrow1.png';
};
topShow.onclick = function () {
    if (t === 0){
        trContainer[0].style.transform = 'translateX(-70%)';
        topImg.style.transform = 'rotate(90deg)';
        t = 1;
    }else {
        trContainer[0].style.transform = 'translateX(0)';
        t = 0;
        topImg.style.transform = 'rotate(-90deg)';

    }
};