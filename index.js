let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function add(team, score) {
    team.textContent= parseInt(team.textContent) + parseInt(score);
}

function reset() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}

window.add = add;
window.reset = reset;
