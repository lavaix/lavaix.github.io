const diceFace = document.getElementById("diceFace");
const diceFaces = ["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png", "/images/5.png", "/images/6.png"];

function rollDice() {
    let counter = 0;
    let rollCount = 0;

    function roll() {
        diceFace.src = diceFaces[counter];
        counter = (counter + 1) % 6;
        rollCount++;

        if (rollCount < 18) {
            setTimeout(roll, 100);
        } else {
            const randomNumber = Math.floor(Math.random() * 6);
            diceFace.src = diceFaces[randomNumber];
        }
    }

    roll();
}

diceFace.onclick = rollDice;
