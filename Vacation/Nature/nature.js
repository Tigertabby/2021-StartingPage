const panels = document.querySelectorAll('.panel');

function playSong(){
    const music= new Audio ("sunset.mp3");
	music.play();
}

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasses();
		panel.classList.add('active');
		playSong();
	});
});

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active')
	});
}




