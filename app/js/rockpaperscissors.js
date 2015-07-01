function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove == 'rock' && computerMove == 'scissors') {
        winner = 'Player';
    } else if (playerMove == 'scissors' && computerMove == 'paper') {
        winner = 'Player';
    } else if (playerMove == 'paper' && computerMove == 'rock') {
        winner = 'Player';
    } else if (playerMove == computerMove) {
        winner = 'Tie';
    } else {
        winner = 'Computer';
    }
    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var winner = getWinner(getInput(), randomPlay())
        if (winner === 'Player') {
            playerWins++;
        } else if (winner === 'Computer') {
            computerWins++;
        }
    }    
    return [playerWins, computerWins];
}