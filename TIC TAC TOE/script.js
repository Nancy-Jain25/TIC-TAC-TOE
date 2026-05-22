let boxes = document.querySelectorAll(".box");

let resetButton = document.querySelector("#resetButton");
let newGameButton = document.querySelector("#newgameButton");

let msg = document.querySelector("#msg");
let msgContainer = document.querySelector("#msgContainer");

let turn0 = true;

// WIN PATTERNS
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];

// DISABLE ALL BOXES
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// ENABLE ALL BOXES
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

// SHOW WINNER
const showWinner = (winner) => {

    msg.innerText = `Congratulations! Winner is ${winner}`;

    msgContainer.classList.remove("hide");

    disableBoxes();
};

// RESET GAME
const resetGame = () => {

    turn0 = true;

    enableBoxes();

    msgContainer.classList.add("hide");
};

// BUTTON CLICKS
boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

// CHECK WINNER
const checkWinner = () => {

    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" &&
            pos2 !== "" &&
            pos3 !== "") {

            if (pos1 === pos2 &&
                pos2 === pos3) {

                showWinner(pos1);

                return;
            }
        }
    }
};

// RESET BUTTONS
resetButton.addEventListener("click", resetGame);

newGameButton.addEventListener("click", resetGame);






