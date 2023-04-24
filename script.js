//your code here
const imageContainer = querySelector(".image-container");
const imageClass = ['img1','img2','img3','img4','img5'];
document.addEventListener("DOMContentLoaded",()=>{
	const image = document.createElement("img");
	image.style.backgroundColor = "yellow";
	imageContainer.appendChild(image);
})