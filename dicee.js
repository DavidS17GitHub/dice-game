function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

let player1RandomNumber = getRandomInt(1, 7);

document.querySelector("#player1 > img").setAttribute("src", "./images/dice" + player1RandomNumber + ".png");

let player2RandomNumber = getRandomInt(1, 7);

document.querySelector("#player2 > img").setAttribute("src", "./images/dice" + player2RandomNumber + ".png");

if (player1RandomNumber > player2RandomNumber) {
    let message = "Player 1 wins!";
    console.log(message);
    document.querySelector("h1#title").innerHTML = message;
}
else if (player2RandomNumber > player1RandomNumber) {
    let message = "Player 2 wins!";
    console.log(message);
    document.querySelector("h1#title").innerHTML = message;
}
else {
    let message = "It's a tie!";
    console.log(message);
    document.querySelector("h1#title").innerHTML = message;
}