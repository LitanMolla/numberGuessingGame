let nameBtn = document.querySelector(".nameBtn");
let nameInput = document.querySelector(".nameInput");
let nameWarning = document.querySelector(".nameWarning");

let nameItem = document.querySelector(".nameItem");
// =============================================================

// Player 1 ==========================
let player1Btn = document.querySelector(".player1Btn");
let player1Warning = document.querySelector(".player1Warning");
let player1Item = document.querySelector(".player1Item");
let player1Input = document.querySelector(".player1Input");
// Player 1 ==========================

// console.log(nameInput.value);
nameBtn.addEventListener("click", function () {
    let inputValue = nameInput.value;
    if (inputValue == "") {
        nameWarning.style.display="block";
    }
    else{
        player1Item.style.display="block";
        nameItem.style.display="none";
    }
});

player1Btn.addEventListener("click", function () {
    let player1Value = player1Input.value;
    if (player1Value == "") {
        player1Warning.style.display="block";
    }
});