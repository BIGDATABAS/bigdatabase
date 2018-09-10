/*
* @Author: ZX
* @Date:   2018-09-08 10:55:37
* @Last Modified by:   ZX
* @Last Modified time: 2018-09-09 10:27:30
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

	console.log(pic1,list1,lis1,word1);

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
            word1.value=data;
            // console.log(word1.value);
            
		}
	}
	

	let lis3=document.querySelectorAll(".ZX_lis3");
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


	let ZX_change=document.querySelector(".ZX_change");
	let ZX_amend=document.querySelectorAll(".ZX_amend");
	let ZX_error2=document.querySelector(".ZX_error2");
	for(let i=0;i<ZX_amend.length;i++){

		ZX_amend[i].onclick=function(){
			ZX_change.style.display="block";
		}
	}
	ZX_error2.onclick=function(){
		ZX_change.style.display="none";
	}



}