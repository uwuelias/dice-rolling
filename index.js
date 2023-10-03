const button1 = document.getElementById('roll');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const total = document.getElementById('total');


function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

button1.addEventListener('click', function() {
    let roll1 = rollDice();
    let roll2 = rollDice();

    dice1.textContent = roll1;
    dice2.textContent = roll2;

    total.textContent = roll1 + roll2;
})
