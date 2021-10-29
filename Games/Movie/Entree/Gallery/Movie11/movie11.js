const music = document.querySelector('.music');

function playSong(){
    const music= new Audio ("guitar.mp3");
	music.play();
}

music.addEventListener('click', () => {
		playSong();
	});


