const bingoTableElement = document.getElementById("bingo-table");
const drawButtonElement  = document.getElementById("btn-draw");
const endGameButtonElement  = document.getElementById("btn-end-game");
const tombolaSquareElement  = document.getElementById("tombolaSquare");

const calledNumbers = [];


for (let index = 1; index < 91; index++) {
    const newBingoNumber = document.createElement("span");
    newBingoNumber.classList.add("tombolaCirce");
    newBingoNumber.textContent = index;
    newBingoNumber.id = `bingoNumber${index}`;
    bingoTableElement.append(newBingoNumber);
}

drawButtonElement.addEventListener("click", function(){
    if (calledNumbers.length < 90) {
        let calledNumber;
        do {
            calledNumber = Math.floor(Math.random() * 90) + 1;
        } while (calledNumbers.includes(calledNumber));

        console.log(calledNumber);
        calledNumbers.push(calledNumber);
        const calledNumbersElement = document.getElementById(`bingoNumber${calledNumber}`);
        calledNumbersElement.classList.add("tombolaRedCirce");
        tombolaSquareElement.textContent = calledNumber;
    } else alert("Attenzione! Hai già estratto tutti i numeri.");
});

endGameButtonElement.addEventListener("click", function(){
    location.reload();
});