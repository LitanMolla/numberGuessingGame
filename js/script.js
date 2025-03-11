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

// ply 2
let player2Item = document.querySelector(".player2Item");
let player2Input = document.querySelector(".player2Input");
let player2Btn = document.querySelector(".player2Btn");
let player2Warning = document.querySelector(".player2Warning");
// ply 2

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
        return
    }
    if (player1Value > 10 || player1Value < 1) {
        player1Warning.style.display="block";
        player1Warning.innerHTML="Please enter a number 1 to 10"
    }
    else{
        if (player1Value - 15) {
            player1Item.style.display="none";
            player2Item.style.display="block";
        }
        else{
            player1Warning.style.display="block";
            player1Warning.innerHTML="Please enter a Valid number"
        }
    }
});

player2Btn.addEventListener("click", function () {
    let player2InputValue = player2Input.value;
    if (player2InputValue == "") {
        player2Warning.style.display="block";
        return
    }
    if (player2InputValue > 10 || player2InputValue < 1) {
        player2Warning.style.display="block";
        player2Warning.innerHTML="Please enter a number 1 to 10"
    }
    else{
        if (player2InputValue - 15) {
            console.log("Next Screen");
            player2Warning.style.display="none";
        }
        else{
            player2Warning.style.display="block";
            player2Warning.innerHTML="Please enter a Valid number"
        }
    }
});
