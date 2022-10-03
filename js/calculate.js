function inputValue(inputId) {
    let input = document.getElementById(inputId);
    let inputValue = parseFloat(input.value);
    if (isNaN(inputValue) || inputValue < 0) {
        input.style.border = "1px solid red";
    }
    else if (inputValue >= 0) {
        input.style.border = "1px solid white";
    }
    return inputValue;

}


document.getElementById("calculate").addEventListener("click", function () {
    let playerValue = inputValue("per-player");

    let players = document.getElementById("player-order");
    let playersValue = players.children.length;

    let totalPlayersCost = playerValue * playersValue;

    let totalCost = document.getElementById("total-Cost");
    totalCost.innerText = totalPlayersCost;
});


document.getElementById("calculate-total").addEventListener("click", function () {
    let players = document.getElementById("total-Cost");
    let playersCostTotal = parseFloat(players.innerText);
    let managerCost = inputValue("manager-input");
    let coachCost = inputValue("coach-input");

    let totalCost = playersCostTotal + managerCost + coachCost;

    let total = document.getElementById("total-expense");
    total.innerText = totalCost;
});