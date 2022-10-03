
document.getElementById("players").addEventListener("click", function (event) {
    let playerOrder = document.getElementById("player-order");
    if (event.target.innerText == "SELECT" && playerOrder.children.length < 5) {
        let button = event.target;
        button.setAttribute("disabled", "");

        let playerName = event.target.parentElement.firstElementChild.innerText;
        let newList = document.createElement("li");
        newList.innerText = playerName;
        playerOrder.appendChild(newList);
    } else if (
        event.target.innerText == "SELECT" &&
        playerOrder.children.length >= 5
    ) {
        alert("Sorry,you can select only five!");
    }
});




