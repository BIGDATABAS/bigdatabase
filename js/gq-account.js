window.onload=function () {
    var lis = document.getElementsByClassName("gq-lis");
    var son = document.getElementsByClassName("son");
    console.log(lis);
//遍历每个li
    for (let i = 0; i < lis.length; i++) {
//当鼠标移入每个li的操作
        lis[i].onmouseover = function () {
            //其余子元素消失
            for (let j = 0; j < son.length; j++) {
                son[j].style.display = "none";
            }
            //当前子元素出现
            son[i].style.display = "block";
        }
        lis[i].onmouseout = function () {
            son[i].style.display = "none";
        }
    }
}