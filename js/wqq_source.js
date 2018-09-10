window.onload=function(){
	let input=document.querySelectorAll(".wqq_input");
	let right=document.querySelectorAll(".wqq_input p");
	console.log(input,right);


	input.forEach(function(value,index){
		right[index].classList.add("wqq_hot");
		value.onclick=function(){
			right[index].classList.toggle("wqq_hot");
		}
		
	})
	
}