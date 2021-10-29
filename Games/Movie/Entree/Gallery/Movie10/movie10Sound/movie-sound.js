const sound1 = document.querySelector(".sound1");
const sound2 = document.querySelector(".sound2");
const sound3 = document.querySelector(".sound3");

let sounds = ["glass.mp3","steps.mp3", "mail.mp3"];

sound1.addEventListener("click", () => {
    const music= new Audio (sounds[0]);
	music.play();
})
sound2.addEventListener("click", () => {
    const music= new Audio (sounds[1]);
	music.play();
})
sound3.addEventListener("click", () => {
    const music= new Audio (sounds[2]);
	music.play();
})
