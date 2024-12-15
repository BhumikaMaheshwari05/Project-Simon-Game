let gameseq = []
let userseq = []

let level = 0
let highScore = 0;
let started = false

let h3 = document.querySelector("h3")
let highScoreDisplay = document.getElementById("highScore");
let btns = ["aqua", "palevioletred", "lightsalmon", "plum"]

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started")
        started = true
    }
    levelUp()
})

function levelUp() {
    userseq = []
    level++
    h3.innerText = `Level ${level}`

    let idx = Math.floor(Math.random() * 3) 
    let color = btns[idx]
    let button = document.querySelector(`.${color}`)
    gameseq.push(color)
    console.log(gameseq)
    btnFlash(button)

}

function btnFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 150)


}
function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 150)

}
function userpress() {
    let btn = this
    userFlash(btn)
    let userColor = btn.getAttribute("id")
    userseq.push(userColor)
    console.log(userseq)
    checkAns(userseq.length - 1)
}

let allbuttons = document.querySelectorAll(".btn")
for (i of allbuttons) {
    i.addEventListener("click", userpress)
}
function checkAns(idx) {
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelUp, 1000)
        }
    }
    else { if (level > highScore) 
        { highScore = level;
             highScoreDisplay.innerText = highScore; // Update the high score on the button } 
             h3.innerText = `Game Over!! Your Score is ${level}. High Score: ${highScore}. Press any key to restart`; 
             reset(); 
        }  
    }}

function reset() {
        started = false
        level = 0
        gameseq = []
}
   

