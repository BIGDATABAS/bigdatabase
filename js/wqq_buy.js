window.onload=function(){
	// 订单管理
	let pic1=document.querySelectorAll(".wqq_choose img");
	let list=document.querySelectorAll(".wqq_option");
	let lis1=document.querySelectorAll(".wqq_op_one");
	let lis2=document.querySelectorAll(".wqq_op_two");
	let lis3=document.querySelectorAll(".wqq_op_three");
	let wqq_word1=document.querySelector(".wqq_word1");
	let wqq_word2=document.querySelector(".wqq_word2");
	let wqq_word3=document.querySelector(".wqq_word3");
	console.log(wqq_word1,wqq_word2,wqq_word3);

	


	lis1[0].classList.add("wqq_active");
	lis2[0].classList.add("wqq_active");
	lis3[0].classList.add("wqq_active");

	// console.log(pic1,list,lis1,lis2,lis3,word1);

	for(let i=0;i<pic1.length;i++){
		pic1[i].onclick=function(){
			list[i].style.display="block";
		}
		list[i].onmouseleave=function(){
			list[i].style.display="none";
		}
	}

	for(let i=0;i<lis1.length;i++){
		lis1[i].onclick=function(){
			
			for(let j=0;j<lis1.length;j++){
                lis1[j].classList.remove("wqq_active");
            }
            lis1[i].classList.add("wqq_active");
           	let newword=lis1[i].innerHTML;
           	// console.log(newword);
			wqq_word1.innerHTML=newword;
			
		}
	}
	for(let i=0;i<lis2.length;i++){
		lis2[i].onclick=function(){
			
			for(let j=0;j<lis2.length;j++){
                lis2[j].classList.remove("wqq_active");
            }
            lis2[i].classList.add("wqq_active");
           	let newword2=lis2[i].innerHTML;
           	// console.log(newword);
			wqq_word2.innerHTML=newword2;


		}
	}
	for(let i=0;i<lis3.length;i++){
		lis3[i].onclick=function(){
			
			for(let j=0;j<lis3.length;j++){
                lis3[j].classList.remove("wqq_active");
            }
            lis3[i].classList.add("wqq_active");
           	let newword3=lis3[i].innerHTML;
           	// console.log(newword);
			wqq_word3.innerHTML=newword3;


		}
	}


	// 删除按钮
	let table=document.querySelector("tbody");

	table.onclick=function(e){
		let element=e.target;
		if(element.nodeName=="BUTTON" && element.className=="del"){
			let trs=element.parentNode.parentNode;
			table.removeChild(trs);
		}
	}

	//搜索记录
	let search=document.querySelector(".wqq_search");
	let label=document.querySelectorAll(".wqq_word1")[0];
	console.log(search,label);

	search.onclick=function(){
		let types=label.innerHTML;
		if(!types){
			alert("请输入正确的信息");
		}else{
			let list=`<tr>
                <td class="wqq_one">${types}</td>
                <td class="wqq_two">2018-7-21</td>
                <td class="wqq_three">2018-7-21</td>
                <td class="wqq_four">2018-7-21</td>
                <td class="wqq_five">6</td>
                <td class="wqq_six">小</td>
                <td class="wqq_seven">699</td>
                <td class="wqq_eight">教材</td>
                <td class="wqq_nine">XX公司</td>
                <td class="wqq_ten">1234567890</td>
                <td class="wqq_eleven">江泽民</td>
                <td class="wqq_twelve">已收</td>
                <td class="wqq_thirteen">
                    <button class="del">删除</button>
                </td>
            </tr>`;
            table.innerHTML+=list;
		}
		
	}



}