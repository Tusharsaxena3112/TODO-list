var button=document.getElementsByTagName("button")[0];
var ul=document.querySelector("ul");
var input=document.getElementsByTagName("input")[0]

button.addEventListener("click",()=>{
		if (input.value.length>0){
		var li=document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
	}
})

input.addEventListener("keypress",(event)=>{
	if (input.value.length>0 && event.which=="13"){
		var li=document.createElement('li');
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
	}
})
