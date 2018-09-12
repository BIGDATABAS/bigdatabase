/*
* @Author: ZX
* @Date:   2018-09-08 10:55:37
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-11 09:37:57
*/
window.onload=function(){
	let ZX_add=document.querySelector(".ZX_add");
	let ZX_adding=document.querySelector(".ZX_adding");
	let ZX_error=document.querySelector(".ZX_error");
    let ZX_error1=document.querySelector(".ZX_error1");
	let pic1=document.querySelectorAll(".ZX_pic1");
	let list1=document.querySelectorAll(".ZX_list1");
	let lis1=document.querySelectorAll(".ZX_lis1");
	let word1=document.querySelector(".ZX_word1");
	lis1[0].classList.add("active");
//添加
	ZX_add.onclick=function(){
		ZX_adding.style.display="block";
	}
	ZX_error1.onclick=function(){
		ZX_adding.style.display="none";
	}
    ZX_error.onclick=function(){
        fxf_change.style.display="none";
    }
//弹出框下拉列表
	let fxf_flag=0;
	for(let i=0;i<pic1.length;i++){
		pic1[i].onclick=function(){
			if (fxf_flag==1){
                fxf_flag=0;
                list1[i].style.display="none";
                return;
			}
			list1[i].style.display="block";
            fxf_flag=1;
		}
	}

	for(let i=0;i<lis1.length;i++){
		lis1[i].onclick=function(){
			for(let j=0;j<lis1.length;j++){
                lis1[j].classList.remove("active");
            }
            lis1[i].classList.add("active");

            let data=lis1[i].innerText;
            word1.value=data;
            list1[0].style.display="none";
		}
	}


	let lis2=document.querySelectorAll(".ZX_lis2");
	let word2=document.querySelector(".ZX_word2");
	lis2[0].classList.add("active");

	for(let i=0;i<lis1.length;i++){
		lis2[i].onclick=function(){
			for(let j=0;j<lis2.length;j++){
                lis2[j].classList.remove("active");
            }
            lis2[i].classList.add("active");
            let data=lis2[i].innerText;
            word2.value=data;
		}
	}


	let lis3=document.querySelectorAll(".ZX_lis3");
	console.log(lis3);

	let word3=document.querySelector(".ZX_word3");
	lis3[0].classList.add("active");

	for(let i=0;i<lis3.length;i++){
		lis3[i].onclick=function(){
			for(let j=0;j<lis3.length;j++){
                lis3[j].classList.remove("active");
            }
            lis3[i].classList.add("active");
            let data=lis3[i].innerText;
            word3.value=data;

            // console.log(word1.value);

		}
	}
	//修改下拉
    let list2=document.querySelectorAll(".fxf_change .ZX_list1");
    let lis4=document.querySelectorAll(".fxf_change .ZX_lis1");
    let word4=document.querySelector(".fxf_change .ZX_word1");
    let fxf_flag1=0;
    for(let i=0;i<pic1.length;i++){
        pic1[i].onclick=function(){
            if (fxf_flag1==1){
                fxf_flag1=0;
                list1[i].style.display="none";
                return;
            }
            list1[i].style.display="block";
            fxf_flag1=1;
        }
    }

    for(let i=0;i<lis4.length;i++){
        lis4[i].onclick=function(){
            for(let j=0;j<lis4.length;j++){
                lis1[j].classList.remove("active");
            }
            lis1[i].classList.add("active");

            let data=lis4[i].innerText;
            word4.value=data;
            list2[0].style.display="none";
        }
    }


    let lis5=document.querySelectorAll(".fxf_change .ZX_lis2");
    let word5=document.querySelector(".fxf_change .ZX_word2");
    lis2[0].classList.add("active");

    for(let i=0;i<lis5.length;i++){
        lis5[i].onclick=function(){
            for(let j=0;j<lis5.length;j++){
                lis2[j].classList.remove("active");
            }
            lis2[i].classList.add("active");
            let data=lis5[i].innerText;
            word5.value=data;
        }
    }


    let lis6=document.querySelectorAll(".fxf_change .ZX_lis3");
    console.log(lis3);

    let word6=document.querySelector(".fxf_change .ZX_word3");
    lis3[0].classList.add("active");

    for(let i=0;i<lis6.length;i++){
        lis6[i].onclick=function(){
            for(let j=0;j<lis3.length;j++){
                lis6[j].classList.remove("active");
            }
            lis6[i].classList.add("active");
            let data=lis3[i].innerText;
            word6.value=data;

            // console.log(word1.value);

        }
    }
//分类添加
    let check=document.querySelectorAll(".fxf_check");
    let type=document.querySelectorAll(".fxf_type");
    console.log(type);
    let flag=[1,0,0];
    type.forEach(value=> value.style.display="none");
    type[0].style.display="flex";
    for (let i=0;i<check.length;i++){
        check[i].onclick=function () {
            if (flag[i]==1){
                type[i].style.display = "none";
                flag[i]=0;
                return;
            }
            type[i].style.display = "flex";
            flag[i]++;
        }
    }
    //分类添加
    let check1=document.querySelectorAll(".fxf_change .fxf_check");
    let type1=document.querySelectorAll(".fxf_change .fxf_type1");
    console.log(type1);
    let flag1=[1,0,0];
    type1.forEach(value=> value.style.display="none");
    type1[0].style.display="flex";
    for (let i=0;i<check1.length;i++){
        check1[i].onclick=function () {
            if (flag1[i]==1){
                type1[i].style.display = "none";
                flag1[i]=0;
                return;
            }
            type1[i].style.display = "flex";
            flag1[i]++;
        }
    }

//增删改查
    let fxf_change=document.querySelector(".fxf_change");
    let submit = document.querySelector(".fxf_change .ZX_increase");
    let table = document.querySelector("tbody");
    //删除
    table.onclick=function (e) {
        let element=e.target;
        if (element.nodeName=="BUTTON" &&!element.classList.contains("ZX_amend")){
            let trs=element.parentNode.parentNode.parentNode;
            table.removeChild(trs);
        }else if(element.classList.contains("ZX_amend")){
            fxf_change.style.display="block";
            let type=table.filter(element=>element.type);
			submit.onclick=function () {
				type=word1.value;
            }
		}
    }

    //渲染
    let main = [
            {id:1,name: "实验一  基本操作实验", contact:"熟悉大数据实验一体机并了解如何搭建集群熟悉大数据实验一体机并了解如何搭建集群熟悉大数据实验一体机并了解如何搭建集群", type: "实验手册"},
			{id:2,name: "实验一  基本操作实验", contact: "熟悉大数据实验一体机并了解如何搭建集群熟悉大数据实验一体机并了解如何搭建集群熟悉大数据实验一体机并了解如何搭建集群", type: "实验手册"},
			{id:3,name: "实验一  基本操作实验", contact: "熟悉大数据实验一体机并了解如何搭建集群熟悉大数据实验一体机并了解如何搭建集群熟悉大数据实验一体机并了解如何搭建集群", type: "实验手册"}
        ];
    main.forEach(element=>createtr(element));
    function createtr(obj) {
        let str=`<tr>
                    <td class="ZX_four">
                        ${obj.id}
                    </td>
                    <td class="ZX_one">${obj.name}</td>
                    <td class="ZX_two">
                        <span>${obj.contact}
                        </span>
                    </td>
                    <td class="ZX_three">${obj.type}</td>
                    <td class="ZX_five">
                        <div >
                            <button class="ZX_del">删除</button>
                        </div>  
                        <div class="ZX_amend">
                            <button class="ZX_amend">修改</button>
                        </div>
                            
                    </td>
                </tr>`;
        table.innerHTML+=str;
    }
}


