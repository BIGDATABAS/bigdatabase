/*
* @Author: ZX
* @Date:   2018-09-08 10:55:37
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-12 18:30:56
*/
window.onload=function(){
	let ZX_add=document.querySelector(".ZX_add");
	let ZX_adding=document.querySelector(".ZX_adding");
	let ZX_error1=document.querySelector(".ZX_error1");
	
	// console.log(ZX_add,ZX_adding,ZX_error1,ZX_change,ZX_amend);
	let pic1=document.querySelectorAll(".ZX_pic1");
	let list1=document.querySelectorAll(".ZX_list1");
	let lis1=document.querySelectorAll(".ZX_lis1");
	let word1=document.querySelector(".ZX_word1");
	lis1[0].classList.add("active");

	// console.log(pic1,list1,lis1,word1);

	ZX_add.onclick=function(){
		ZX_adding.style.display="block";
	}
	ZX_error1.onclick=function(){
		ZX_adding.style.display="none";
	}


	for(let i=0;i<pic1.length;i++){
		pic1[i].onclick=function(){
			list1[i].style.display="block";
			// console.log(list1);
		}
		list1[i].onmouseleave=function(){
			list1[i].style.display="none";
			// console.log(list1);
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
            // console.log(word1.value);
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
            // console.log(word1.value);
            
		}
	}
	

	let lis3=document.querySelectorAll(".ZX_lis3");
	// console.log(lis3);

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
            console.log(word1.value);
            
		}
	}
	

	let name1=document.querySelector(".name1");
	let intro1=document.querySelector(".intro1");
	let ZX_word1=document.querySelector(".ZX_word1");
	let ZX_increase1=document.querySelector(".ZX_increase1");
	let tr=document.querySelector("tr");
	let table=document.querySelector("tbody");
	console.log(name1,intro1,ZX_word1,ZX_increase1,tr,table);


	//动态创建tr
    let student=[
        {id:0,one:"实验一  基本操作实验",two:"熟悉大数据实验一体机并了解如何搭建集群",three:"教材配套PPT"},
        {id:1,one:"实验一  基本操作实验",two:"熟悉大数据实验一体机并了解如何搭建集群",three:"教材配套PPT"},
        {id:2,one:"实验一  基本操作实验",two:"熟悉大数据实验一体机并了解如何搭建集群",three:"教材配套PPT"}
   
    ];
     student.forEach((element)=>{
        createTr(element);
    })

   function createTr(obj) {
        //动态获取
        let str=` <tr>
                    <td class="ZX_one" type="one">${obj.one}</td>
                    <td class="ZX_two" type="two">${obj.two}</td>
                    <td class="ZX_three" type="three">${obj.three}</td>
                    <td class="ZX_four">
                        <button>下载</button>
                    </td>
                    <td class="ZX_five">
                        <div class="ZX_del">
                            <button class="ZX_Del">删除</button>
                        </div>  
                        <div class="ZX_amend">
                            <button>修改</button>
                        </div>      
                    </td>
                </tr> `;
        //将数据传入表格中
        table.innerHTML+=str;
    }

    //添加
    ZX_increase1.onclick=function () {
    	let nameone=name1.value;
        let introone=intro1.value;
        let ZX_wordone=ZX_word1.value;


        //判断名称和内容是否为空
        if(!nameone && !introone && !ZX_wordone){
            alert("请输入信息");
        }else{

            let tr =` <tr>
                    <td class="ZX_one">${nameone} </td>
                    <td class="ZX_two">
                        <span>${introone}
                        </span>
                    </td>
                    <td class="ZX_three">${ZX_wordone}</td>
                    <td class="ZX_four">
                        <button>下载</button>
                    </td>
                    <td class="ZX_five">
                        <div class="ZX_del">
                            <button class="ZX_Del">删除</button>
                        </div>  
                        <div class="ZX_amend">
                            <button>修改</button>
                        </div>      
                    </td>
                </tr>`;
            table.innerHTML+=tr;
    	}
        name1.value="";
        intro1.value="";
        ZX_word1.value="";
        ZX_adding.style.display="none";



    }
    let ZX_Del=document.querySelectorAll(".ZX_Del");
    console.log(ZX_Del);

    	table.onclick=function(e){
		let element=e.target;
		if(element.nodeName=="BUTTON" && element.className=="ZX_Del"){
			let trs=element.parentNode.parentNode.parentNode;
			console.log(trs);
			table.removeChild(trs);
		}
	}

	















	let ZX_change=document.querySelector(".ZX_change");
	let ZX_amend=document.querySelectorAll(".ZX_amend");
	let ZX_error2=document.querySelector(".ZX_error2");
	let picone=document.querySelectorAll(".ZX_picone");
	let listone=document.querySelectorAll(".ZX_listone");
	let lisone=document.querySelectorAll(".ZX_lisone");
	let wordone=document.querySelector(".ZX_wordone");
	lisone[0].classList.add("active");



	// console.log(ZX_amend,ZX_change,ZX_error2);
	// console.log(picone,listone,lisone,wordone);

	for(let i=0;i<ZX_amend.length;i++){

	ZX_amend[i].onclick=function(){
		ZX_change.style.display="block";
		}
	ZX_error2.onclick=function(){
		ZX_change.style.display="none";
	}


	for(let i=0;i<picone.length;i++){
		picone[i].onclick=function(){
			listone[i].style.display="block";
			// console.log(list1);
		}
		listone[i].onmouseleave=function(){
			listone[i].style.display="none";
			// console.log(list1);
		}

	}



	for(let i=0;i<lisone.length;i++){
		lisone[i].onclick=function(){
			for(let j=0;j<lisone.length;j++){
                lisone[j].classList.remove("active");
            }
            lisone[i].classList.add("active");

            let data=lisone[i].innerText;
            wordone.value=data;
            // console.log(word1.value);
		}
	}


	let listwo=document.querySelectorAll(".ZX_listwo");
	let wordtwo=document.querySelector(".ZX_wordtwo");
	listwo[0].classList.add("active");

	for(let i=0;i<listwo.length;i++){
		listwo[i].onclick=function(){
			for(let j=0;j<listwo.length;j++){
                listwo[j].classList.remove("active");
            }
            listwo[i].classList.add("active");
            let data=listwo[i].innerText;
            wordtwo.value=data;
            // console.log(word1.value);
            
		}
	}
	

	let listhree=document.querySelectorAll(".ZX_listhree");
	// console.log(lis3);

	let wordthree=document.querySelector(".ZX_wordthree");
	listhree[0].classList.add("active");

	for(let i=0;i<listhree.length;i++){
		listhree[i].onclick=function(){
			for(let j=0;j<listhree.length;j++){
                listhree[j].classList.remove("active");
            }
            listhree[i].classList.add("active");
            let data=listhree[i].innerText;
            wordthree.value=data;
            // console.log(word1.value);
            
		}
	}
        
}
	








}


