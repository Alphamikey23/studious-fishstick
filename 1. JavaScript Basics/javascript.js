function updateNamePlayer1() {
    const name = prompt("Enter your name:");
    button.textContent = `Player 1: ${name}`;
}

function updateNamePlayer2() {
    const name = prompt("Enter your name:");
    button2.textContent = `Player 2: ${name}`;
}


const button = document.getElementById("player1");
const button2 = document.getElementById("player2");

button.addEventListener("click",updateNamePlayer1);
button2.addEventListener("click",updateNamePlayer2);

