//your JS code here. If required.
let boxes=document.querySelectorAll(".code");

for(let i=0;i<boxes.length;i++){
	boxes[i].addEventListener("keydown",(event)=>{

		 boxes[i].addEventListener("focus", () => {
		 boxes[i].classList.add("focused");
		  });


		 boxes[i].addEventListener("blur", () => {
		boxes[i].classList.remove("focused");
		  });
		if(event.key==="Backspace"&& i>0){
			 event.preventDefault();
			boxes[i-1].focus();
			boxes[i].value=""
		}
		else if(event.key==="Backspace" && i===0){
			if(boxes[i].value==="")
				event.preventDefault();
				boxes[i].focus();
				boxes[i].value=""
		}
		else{
			boxes[i].addEventListener("input",()=>{
				if(i<boxes.length-1){
				boxes[i+1].focus();
	}
})
		}
	})

}


