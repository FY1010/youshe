console.log("footer.js加载成功");

let container = document.getElementById('container'),
    change = document.getElementsByClassName('footer_color'),
    timer = null;
container.onmouseover = document.getElementById('footer_bottom').onmouseover = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        if (container.offsetLeft === 0){
            container.style.left = '-1500px'
        }else{
            container.style.left = container.offsetLeft + 1 + 'px';
        }
    },10)
};
container.onmouseout = document.getElementById('footer_bottom').onmouseout = function () {
    clearInterval(timer)
};