let timer = document.getElementById("time-left");
let score = document.getElementById("score");
var startingTime = 30;
count = 0;
startScore = 0;
let molePostion = Array.from(document.querySelectorAll(".grid-items"));

document.getElementById("start").addEventListener("click", () => {
    document.querySelector(".mole").classList.remove("mole");
    count++;
    if (count === 1) {
        var myInterval = setInterval(() => {
            let timeChange = --startingTime;
            timer.innerHTML = "Timer: " + timeChange.toString().padStart(2, "0");
            if (startingTime === 0) {
                clearInterval(myInterval);
                setTimeout(() => {
                    alert("GameOver");
                    document.location.reload();
                })

            }

            let randomIndex = Math.floor(Math.random() * 10);
            molePostion.forEach((val, index) => {

                if (randomIndex === index) {
                    val.classList.add("mole");
                    val.setAttribute("onclick", "scoreUpdtes()");

                    setTimeout(() => {
                        val.classList.remove("mole");
                        val.removeAttribute("onclick")
                    }, 900);

                }

            })
        }, 1000)

    }
})

document.getElementById("reset").addEventListener("click", () => {
    location.reload();
})

function scoreUpdtes() {
    let scoreChange = ++startScore;
    score.innerHTML = "Score: " + scoreChange.toString().padStart(2, "0");
}