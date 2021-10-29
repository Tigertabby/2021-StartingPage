
function changeDay(){
    let randomNumber1 = Math.floor(Math.random()*7) + 1;
    let randomNum1 = `images/pic${randomNumber1}.jpg`;
    let playerLeft = document.getElementsByClassName("pic1")[0].setAttribute("src", randomNum1);

    let randomNumber2 = Math.floor(Math.random()*7) + 1;
    let randomNum2 = `images/pic${randomNumber2}.jpg`;
    let playerRight = document.getElementsByClassName("pic2")[0].setAttribute("src", randomNum2);
    let jokeDay;

    if (randomNumber1 === randomNumber2){
		document.getElementsByTagName("h1")[0].innerHTML = "It's a draw!! Try again!";
	}else if (randomNumber1 > randomNumber2){
		document.getElementsByTagName("h1")[0].innerHTML = "Player 1 made it! 🥇";
		jokeDay = randomNumber1;

	}else {
		document.getElementsByTagName("h1")[0].innerHTML = "Victory for Player 2 🏆!";
		jokeDay = randomNumber2;

	}

    switch (jokeDay) {
    case 1:
        document.querySelector("#joke").innerHTML =
        "It's Monday. A man pulls up to the curb and asks the policeman, 'Can I park here?' 'No,' says the cop. \n 'What about all these other cars?' 'They didn't ask!' ";
    break;
    case 2:
        document.querySelector("#joke").innerHTML =
        "This guy walks into the local bar one Tuesday afternoon when he gets out of work, as he steps up to the bar \n he sees his good friend Joe throw down 2 shots, he had a frown on his face. \n 'What's with the long face Joe?' asked the guy. Joe responds, 'My wife told me today that she was only going to have sex with me on Mondays, and Thursdays!'\n 'Well,' said the friend, 'That's not that bad, some of us she has cut off completely.'";

    break;
    case 3:
        document.querySelector("#joke").innerHTML = "On Wednesday I noticed: I hate Russian dolls… they're so full of themselves!";
    break;
    case 4:
        document.querySelector("#joke").innerHTML = "When Ed was caught on Thursday night at the fridge, he asked his wife: \n 'If we shouldn't eat at night, why do they put a light in the fridge?'";
    break;
    case 5:
        document.querySelector("#joke").innerHTML = "Poor start into the weekend on Friday: \n My girlfriend treats me like a god. She ignores my existence and only talks to me when she needs something.";
    break;
    case 6:
        document.querySelector("#joke").innerHTML = "Boss: Do you think you can come in on Saturday? I know you enjoy your weekends but I need you here.\n Me: Yeah, no problem. I'll probably be late though as public transport on weekends is slow.\n Boss: What time will you get here?\n Me: Monday.";
    break;
    case 7:
        document.querySelector("#joke").innerHTML = "Why are ghosts such bad liars? Because they are easy to see through, especially on Sundays.";
    break;
    default: document.querySelector("#joke").innerHTML = "No winner - no joke!";
    }
}

button.addEventListener("click", changeDay);

