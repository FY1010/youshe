console.log("ajax_simulate.js加载成功");
alert("向easy-mock发送请求中...");
const myAjax = new XMLHttpRequest();
console.log(`正在向easy-mock发送请求，当前readystate: ${myAjax.readyState},请稍等...`);

myAjax.open('get',"https://www.easy-mock.com/mock/5e3eb4b048b5982a429ed978/example/my",true);
myAjax.send(null);
myAjax.onreadystatechange=function () {
    console.log(`当前readystate: ${myAjax.readyState}`);

    if (myAjax.readyState == 4){
        if (myAjax.status == 200){
            let myJson = JSON.parse(myAjax.responseText),
                img = document.getElementsByClassName('img'),
                dR2_content = document.getElementsByClassName('dR2_content');
            for (let i = 0;i < img.length;i++){
                img[i].src = myJson.slide_src[i]
            }
            for (let i = 0;i < dR2_content.length;i++){
                dR2_content[i].innerHTML = myJson.read[i]
            }
            console.log(myJson.slide_src)
        }else{
            alert("easy-mock目前无响应，模拟接口获取数据失败，检查easy-mock官网是否能打开")
        }
    }
};