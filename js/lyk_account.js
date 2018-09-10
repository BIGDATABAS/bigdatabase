
function fire(list) {
    for (let i = 0; i < list.length; i++) {
        list[i].onclick = function () {
            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove("wpc_fire");

            }
            list[i].classList.add("wpc_fire");
        }
    }
}



//弹窗
function _tc(pl,lis,del,student,xj,xj_del){
    pl.onclick=function(){
        lis.style.display="block";
    }
    del.onclick=function(){
        lis.style.display="none";
    }
    student.onclick=function(){
        xj.style.display="block";
    }
    xj_del.onclick=function(){
        xj.style.display="none"
    }
}


function _fp(bot,fptx,fp_del){
    bot.onclick=function(){
        fptx.style.display="block";
    }
    fp_del.onclick=function(){
        fptx.style.display="none";
    }
}