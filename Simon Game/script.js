const buttonColors = ["green", "red", "yellow", "blue"];

let gameSequence = [];
let userSequence = [];
let level = 0;
let maxLevel = 0;
let started = false;

const levelTitle = document.getElementById("level-title");
const buttons = document.querySelectorAll(".btn");

/* Flash effects */
function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(() => btn.classList.remove("gameFlash"), 300);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => btn.classList.remove("userFlash"), 150);
}

/* Play full sequence */
function playSequence() {
    let i = 0;
    const interval = setInterval(() => {
        const btn = document.getElementById(gameSequence[i]);
        gameFlash(btn);
        i++;
        if (i >= gameSequence.length) clearInterval(interval);
    }, 600);
}

/* Next level */
function nextLevel() {
    userSequence = [];
    level++;
    levelTitle.textContent = `Level ${level}`;

    const randomColor =
        buttonColors[Math.floor(Math.random() * buttonColors.length)];

    gameSequence.push(randomColor);
    playSequence();
}

/* Check user input */
function checkAnswer(index) {
    if (userSequence[index] === gameSequence[index]) {
        if (userSequence.length === gameSequence.length) {
            setTimeout(nextLevel, 800);
        }
    } else {
        maxLevel = Math.max(maxLevel, level);
        gameOver();
    }
}

/* Game over */
function gameOver() {
    levelTitle.innerHTML = `Game Over! <br> Score: <b>${level}</b> <br> Max Score: <b>${maxLevel}</b><br> Press Any Key to Restart`;
    document.body.style.backgroundColor = "red";

    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 400);

    started = false;
    gameSequence = [];
    level = 0;
}

/* Button click */
buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        if (!started) return;

        userFlash(this);
        userSequence.push(this.id);
        checkAnswer(userSequence.length - 1);
    });
});

/* Start game */
document.addEventListener("keypress", () => {
    if (!started) {
        started = true;
        levelTitle.textContent = "Game Started!";
        nextLevel();
    }
});
