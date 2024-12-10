const btn = document.querySelector(".btn-roll-dice");
const dice = document.querySelector(".dice");

btn.addEventListener("click", randomNumbers);

function randomNumbers() {
    const randomNum = Math.floor(Math.random() * 6) + 1
    displayDice(randomNum)
    console.log(randomNum);

}
function displayDice(randomDice) {
    dice.innerHTML = " "
    const numDots = randomDice
    const positions = [
        { top: '20%', left: '20%' },
        { top: '20%', left: '50%' },
        { top: '20%', left: '80%' },
        { top: '50%', left: '20%' },
        { top: '50%', left: '50%' },
        { top: '50%', left: '80%' },
        { top: '80%', left: '20%' },
        { top: '80%', left: '50%' },
        { top: '80%', left: '80%' }
    ];

    for (let index = 0; index < numDots; index++) {
        const dot = document.createElement("div")
        dot.classList.add("dice-dot")
        dot.style.top = positions[index].top;
        dot.style.left = positions[index].left;
        dice.appendChild(dot)
    }



}
