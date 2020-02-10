console.log("header.js加载成功");

let header1 = document.getElementById('header_li_02'),
    header2 = document.getElementById('header_li_03'),
    header3 = document.getElementById('header_li_04'),
    header4 = document.getElementById('header_li_05'),
    header5 = document.getElementById('header_li_06'),
    header6 = document.getElementById('header_li_08'),
    xl1 = document.getElementById('xl1'),
    xl2 = document.getElementById('xl2'),
    xl3 = document.getElementById('xl3'),
    xl4 = document.getElementById('xl4'),
    xl5 = document.getElementById('xl5'),
    xl6 = document.getElementById('xl6');

header1.onmouseover = function () {
    xl1.style.display = 'flex';
};
xl1.onmouseover = function(){
    xl1.style.display = 'flex';
};
header1.onmouseout = function () {
    xl1.style.display = 'none';
};
xl1.onmouseout = function () {
    xl1.style.display = 'none';
};
header2.onmouseover = function () {
    xl2.style.display = 'flex'
};
xl2.onmouseover = function () {
    xl2.style.display = 'flex'
};
header2.onmouseout = function () {
    xl2.style.display = 'none';
};
xl2.onmouseout = function () {
    xl2.style.display = 'none';
};
header3.onmouseover = function () {
    xl3.style.display = 'flex'
};
xl3.onmouseover = function () {
    xl3.style.display = 'flex'
};
header3.onmouseout = function () {
    xl3.style.display = 'none';
};
xl3.onmouseout = function () {
    xl3.style.display = 'none';
};
header4.onmouseover = function () {
    xl4.style.display = 'flex'
};
xl4.onmouseover = function () {
    xl4.style.display = 'flex'
};
header4.onmouseout = function () {
    xl4.style.display = 'none';
};
xl4.onmouseout = function () {
    xl4.style.display = 'none';
};
header5.onmouseover = function () {
    xl5.style.display = 'flex'
};
xl5.onmouseover = function () {
    xl5.style.display = 'flex'
};
header5.onmouseout = function () {
    xl5.style.display = 'none';
};
xl5.onmouseout = function () {
    xl5.style.display = 'none';
};
header6.onmouseover = function () {
    xl6.style.display = 'block'
};
xl6.onmouseover = function () {
    xl6.style.display = 'block'
};
header6.onmouseout = function () {
    xl6.style.display = 'none';
};
xl6.onmouseout = function () {
    xl6.style.display = 'none';
};

let xlImg = document.getElementsByClassName('xlImg'),
    xldiv = document.getElementsByClassName('xldiv');

for (let i = 0;i<xlImg.length;i++){
    xldiv[i].onmouseover = function(){
        xldiv[i].style.backgroundColor = '#FF5C00';
        xldiv[i].style.color = '#ffffff';
        console.log(xlImg[i].src);
        let xl = xlImg[i].src.substr(0,xlImg[i].src.length-5);
        console.log(xl);
        xlImg[i].src = xl + '2.png';
    };
    xldiv[i].onmouseout = function () {
        xldiv[i].style.backgroundColor = 'transparent';
        xldiv[i].style.color = '#000000';
        let xl = xlImg[i].src.substr(0,xlImg[i].src.length-5);
        xlImg[i].src = xl + '1.png';
    }
}
let main = document.getElementsByClassName('main'),
    menuArrow = document.getElementsByClassName('menuArrow'),
    clickMenu= document.getElementsByClassName('mobile_menu'),
    liShow = document.getElementsByClassName('li_show'),
    k = 0;
clickMenu[0].onclick = function () {
    (k===0)?menuShow():menuHide();
};
function menuShow(){
    k = 1;
    main[0].style.display = 'flex';
}
function menuHide(){
    k = 0;
    main[0].style.display = 'none';
}
let li = document.getElementsByClassName('li'),
    g = [0,0,0,0,0,0];
for (let i = 0 ; i < li.length ; i++){
    function m_show(){
        g[i] = 1;
        liShow[i].style.display = 'flex';
        menuArrow[i].style.transform = 'rotate(180deg)';
    }
    function m_hide(){
        g[i] = 0;
        liShow[i].style.display = 'none';
        menuArrow[i].style.transform = 'rotate(0deg)';
    }
    li[i].onclick = function () {
        (g[i] === 0)?m_show():m_hide();
        for (let k = 0;k < li.length;k++){
            if (g[k] === 1&& k !== i){
                g[k] = 0;
                liShow[k].style.display = 'none';
                menuArrow[k].style.transform = 'rotate(0deg)';
            }
        }
    }
}


