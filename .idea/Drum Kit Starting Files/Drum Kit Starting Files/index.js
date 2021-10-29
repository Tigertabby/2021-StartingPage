/*document.querySelector("button").addEventListener("click", function(){
	alert("I was clicked");
});

document.getElementsByClassName("a")[0].addEventListener("click", function(){
	alert("I was clicked too");
});*/

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", function(){
 	let buttonInnerHTML = this.innerHTML;
 	makeSound(buttonInnerHTML);
 	buttonAnimation(buttonInnerHTML);
	
});
}
document.addEventListener("keydown", function(event){
	makeSound(event.key);
	buttonAnimation(event.key);

})
function makeSound (key){
	switch (key){
 		case "w":
 			var kick = new Audio("./sounds/kick-bass.mp3");
			kick.play();
			break;
		case "a":
 			var tom2 = new Audio("./sounds/tom-2.mp3");
			tom2.play();
			break;
		case "s":
 			var tom3 = new Audio("./sounds/tom-3.mp3");
			tom3.play();
			break;
		case "d":
 			var tom4 = new Audio("./sounds/tom-4.mp3");
			tom4.play();
			break;
		case "j":
 			var tom1 = new Audio("./sounds/tom-1.mp3");
			tom1.play();
			break;
		case "k":
 			var snare = new Audio("./sounds/snare.mp3");
			snare.play();
			break;
		case "l":
 			var crash = new Audio("./sounds/crash.mp3");
			crash.play();
			break;

		default:console.log(buttonInnerHTML);
 	} 			

}

function buttonAnimation(currentKey){
	let activeButton = document.querySelector("."+ currentKey);
	activeButton.classList.add("pressed");
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	}, 100);
	
}