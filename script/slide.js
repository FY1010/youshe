console.log("slide.js加载成功");

let _switch = document.getElementById('switch'),
    left = document.getElementById('left'),
    right = document.getElementById('right'),
    img = document.getElementsByClassName('img');
let index = 1;

setInterval(function () {
    _switch.style.left = _switch.offsetLeft - 970 + 'px';
    index++;
    if (index === 4){
        index = 1;
        _switch.style.left = '0px';
    }
},3000);
left.onclick = function () {
    if (index !== 1){
        index-=1;
        _switch.style.left = -(index - 1)*970 + 'px'
    }
};
right.onclick = function () {
    if (index !== 3){
        index+=1;
        _switch.style.left = -(index - 1)*970 + 'px'
    }
};

let m_img = document.getElementsByClassName('m_img'),
    prev = document.getElementsByClassName('prev'),
    next = document.getElementsByClassName('next'),
    j = 1;
setInterval(function () {
    if (j === 3){
        j = 0
    }
    j = j + 1;
    m_img[0].src = 'img/switch_img/s' + j + '.jpg';
},5000);
next[0].onclick = function () {
    if (j == 3){
        j = 0;
        j = j + 1;
        m_img[0].src = 'img/switch_img/s' + j + '.jpg';
    }else{
        j = j + 1;
        m_img[0].src = 'img/switch_img/s' + j + '.jpg';
    }
};
prev[0].onclick = function () {
    if (j === 1){
        j = 3;
        m_img[0].src = 'img/switch_img/s' + j + '.jpg';
    }else{
        j = j - 1 ;
        m_img[0].src = 'img/switch_img/s' + j + '.jpg';
    }
};

    

