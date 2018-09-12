window.onload=function(){
	
	// 销毁集群
	let table=document.querySelector("tbody");
	table.onclick=function(e){
		let element=e.target;
		if(element.nodeName=="BUTTON" && element.className=="del"){
			let trs=element.parentNode.parentNode;
			table.removeChild(trs);
		}
	}
	
}