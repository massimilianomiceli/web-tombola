const bingoTableElement = document.getElementById("bingo-table");

for (let index = 1; index < 91; index++) {
    const newBingoNumber = document.createElement("span");
    newBingoNumber.classList.add("tombolaCirce");
    newBingoNumber.textContent = index;
    bingoTableElement.append(newBingoNumber);
}