let numberOfPics = document.querySelectorAll(".item").length;

for (let i = 0; i < numberOfPics; i++){
	document.querySelectorAll(".item")[i].addEventListener("mouseover", function(){
	var audio = new Audio ("forest.wav");
	audio.play();
});

}
