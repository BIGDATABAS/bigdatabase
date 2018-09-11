window.onload=function(){
	// 订单管理
	let pic1=document.querySelectorAll(".wqq_choose img");
	let lists=document.querySelectorAll(".wqq_option");
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
			lists[i].style.display="block";
		}
		list[i].onmouseleave=function(){
			lists[i].style.display="none";
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




}