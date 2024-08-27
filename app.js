// function rollDice() {
//     // Generate a random number between 1 and 6
//     var diceValue = Math.floor(Math.random() * 6) + 1;
//     // Display the result in the paragraph with id "diceValue"
//     document.getElementById("diceValue").innerText = "You rolled a " + diceValue + "!";
// }




function tossCoin() {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    document.getElementById('result').textContent = `The coin landed on: ${result}`;
}
