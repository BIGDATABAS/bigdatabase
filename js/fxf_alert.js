window.onload=function () {
    let check=document.querySelectorAll(".fxf_main .fxf_select .fxf_check");
    let type=document.querySelectorAll(".fxf_main .fxf_type");
    let close=document.querySelector(".fxf_head .fxf_close");
    let alerts=document.querySelector(".fxf_box")
    let flag=[1,0,0];
    type[0].style.display="block";
    for (let i=0;i<check.length;i++){
        check[i].onclick=function () {
            if (flag[i]==1){
                type[i].style.display = "none";
                flag[i]=0;
                return;
            }
            type[i].style.display = "block";
            flag[i]++;
        }
    }
    close.onclick=function () {
        alerts.style.display="none";
    }
}