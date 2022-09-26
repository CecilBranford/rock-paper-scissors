// create function that gets a computer choice

const choices = ['rock', 'paper', 'scissors'];

let computerPoints = 0;

let userPoints = 0;
let round = 0;

function getComputerChoice () {
    return Math.floor(Math.random() * 3);
}

function getUserChoice () {
    let choice = prompt("Please choose rock, paper or scissors");
    return choices.indexOf(choice.toLowerCase());
}

function playRound () {
    let comp = getComputerChoice();
    let user = getUserChoice();

    if (user == -1) {
        return `Please enter a valid choice`;
    }  else if ((comp == 0 && user == 2) || (comp == 1 && user == 0) || (comp == 2 && user == 1)) {
        computerPoints++;
        round++;
        return `You lost, ${choices.at(comp)} beats ${choices.at(user)}!`;
    } else if (user == comp) {
        return `It's a draw!`
    } else {
        userPoints++;
        round++;
        return `You win, ${choices.at(user)} beats ${choices.at(comp)}!`
    }

}

function game() {

    while (round < 5) {
        let result = playRound();
        console.log(result);
    }

    if (userPoints > computerPoints) {
        return `You win! The computer scored ${computerPoints} and you scored ${userPoints}.`;
    } else if (userPoints < computerPoints) {
    return `You lost. The computer scored ${computerPoints} and you scored ${userPoints}.`;
    } else {
        `It was a draw. The computer scored ${computerPoints} and you scored ${userPoints}.`;
    }

}

console.log(game());

// create a function that gets a user choice

// compare both values and print the results