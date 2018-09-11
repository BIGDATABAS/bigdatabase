window.onload=function () {
    let ti=document.querySelector(".ti");
    let lis=document.querySelector(".wzj_tankuang");
    let yes=document.querySelector(".yes");
    let no=document.querySelector(".no");
    let close=document.querySelector(".wzj_tan_top_r");
    ti.onclick=function () {
        lis.style.display="block";
    }
        yes.onclick=function () {
            window.open("wzj_zhujiedian1.html");
            lis.style.display="none";
        }
        no.onclick=function () {
            lis.style.display="none";
        }
        close.onclick=function () {
            lis.style.display="none";
        }
}