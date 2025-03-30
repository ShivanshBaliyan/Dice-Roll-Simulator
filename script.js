const buttonEle = document.querySelector('#roll-button');
const diceEle = document.querySelector('#dice');
const rollHistoryEle = document.querySelector('.roll-history');

let historyList = [];

function getDiceFace(rollResult) {
    let faces = ["", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

    return faces[rollResult];
}

function updateRollHistory() {
    rollHistoryEle.innerHTML = "";
    for(let i = 0; i<historyList.length; i++) {
        const listItem = document.createElement('li');
        listItem.className = "list-group-item w-50 mx-auto rounded-3 history d-flex justify-content-between align-items-center";
        listItem.innerHTML = `<span>Roll ${i + 1}:</span>
                              <span class="fs-3">${getDiceFace(historyList[i])}</span>`;

        rollHistoryEle.appendChild(listItem);
    }
}

function rollDice() {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEle.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

buttonEle.addEventListener('click', () => {
    diceEle.classList.add("roll-animation");
    setTimeout(() => {
        diceEle.classList.remove("roll-animation")
        rollDice()
    }, 1000);
})