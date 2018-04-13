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
function oneRound (comPick, userPlay) {
	outcome = (comPick && userPlay);
	
	switch(outcome) {
		case (comPick == userPlay);
			return "It's a tie!"
		case (Paper, Rock)
			return "You Lose! Paper beats Rock"
		case (Rock, Paper)
			return "You Win! Paper covers Rock!"
		case (Scissors, Rock)
			return "You Win! Rock crushes Scissors!"
		case (Rock, Scissors)
			return "You Lose! Rock crushes Scissors!"
		case (Scissors, Paper)
			return "You Lose! Scissors cut Paper!"
		case (Paper, Scissors)
			return "You Win! Scissors cut Paper!"
}