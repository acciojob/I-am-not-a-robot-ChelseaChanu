//your code here
const imageContainer = document.querySelector(".image-container");
const images = document.getElementsByTagName("img");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");

document.addEventListener("DOMContentLoaded",()=>{
	let repeatInd = Math.floor(Math.random()*5);
	let classNameRepeat = images[repeatInd].className;
	for(let i=images.length-2;i>=0;i--){
		let ind = Math.floor(Math.random()*(i+1));
		let class1 = images[i].className;
		let class2 = images[ind].className;
		images[i].classList.remove(class1);
		images[i].classList.add(class2);
		images[ind].classList.remove(class2);
		images[ind].classList.add(class1);
	}

	images[5].classList.add(classNameRepeat);
});

let clickCount = 0;
const imgSelected = [];

imageContainer.addEventListener("click",(e)=>{
	if(e.target.tagName === "IMG"){
		if(!imgSelected.includes(e.target.className)){
			e.target.classList.add("selected");
			imgSelected.push(e.target.className);
			clickCount++;
		}
		else{
			let ind = imgSelected.indexOf(e.target.className);
			imgSelected.splice(ind,1);
			e.target.classList.remove("selected");
			clickCount--;
		}

		console.log(imgSelected);

		if(clickCount>=1){
			resetBtn.style.display = "block";
		}

		if(clickCount===2){
			verifyBtn.style.display = "block";
		}
		else if(clickCount<2 || clickCount>2){
			verifyBtn.style.display = "none";
		}
	}
});

resetBtn.addEventListener("click",()=>{
	for(let i=0;i<images.length;i++){
		images[i].classList.remove("selected");
	};
	para.style.display = "none";
	resetBtn.style.display = "none";
	verifyBtn.style.display = "none";
});

verifyBtn.addEventListener("click",(e)=>{
	e.preventDefault();
	if(imgSelected.length===2){
		para.style.display = "block";
		let firstClass = imgSelected[0].split(" ");
		let secClass = imgSelected[1].split(" ");
		if(firstClass[0]===secClass[0]){
			verifyBtn.style.display = "none";
			para.innerText = "You are a human. Congratulations!";
		}
		else{
			para.innerText = "We can't verify you as a human. You selected the non-identical tiles. ";
		}
	}
});