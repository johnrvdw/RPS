// TOP Project: Game of RPS v. Computer

//Computer random number
function computerPlay() {
	comPick = Math.floor(Math.random() * Math.floor(3));
	
	switch(comPick) {
	case 0:
		return comPick = 'Rock';
	case 1:
		return comPick = 'Paper';
	case 2:
		return comPick = 'Scissors';
	}
}

//Player input
var userPlay = prompt();

//single round
function oneRound () {
	if (comPick == userPlay) {
		return "It's a tie!"
	}	
	else if (('Paper', 'Rock') ||
	('Scissors', 'Paper') ||
		('Rock', 'Scissors')) { 
			return "You Lose! " + comPick + " beats " + userPlay;
		}
	else {
		return "You Win! " + userPlay + " beats " + userPlay;
	}
}