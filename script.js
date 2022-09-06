const choices = [
    "rock",
    "paper",
    "scissors"
]

function play(event) {
    const userChoice = event.target.id;
    console.log("user selected", userChoice)

    const randomIndex =Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randomIndex]
    console.log("computer selected", computerChoice)
    message.innerHTML += "The computer chose " + computerChoice + "!";

    
    if (computerChoice === userChoice) {
        result.innerHTML = "Draw!";
    } else if (computerChoice === "rock" && userChoice === "paper") {
        result.innerHTML = "You win!";
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        result.innerHTML = "You lost!";
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        result.innerHTML = "You win!";
    } else if (computerChoice === "paper" && userChoice === "rock") {
        result.innerHTML = "You lose!";
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        result.innerHTML = "You win!";
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        result.innerHTML = "You lose!";
    }
}