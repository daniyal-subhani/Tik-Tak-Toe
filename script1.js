let boxes = document.querySelectorAll(".btn");
let resetBtn = document.getElementById("reset");
let newGameBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.winner')
let msg = document.querySelector('#msg')

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turnO = true
enableBtns()
msgContainer.classList.add('hide')
}

boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("btn was clicked");
    if (turnO) {
      btn.textContent = "O";
      turnO = false;
    } else {
      btn.textContent = "X";
      turnO = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});

const disableBtns = ()=> {
    for(let box of boxes) {
        box.disabled = true
    }
}
const enableBtns = ()=> {
    for(let box of boxes) {
        box.disabled = false
        box.textContent = ""
    }
}
const showWinner = (winner) => {
msg.textContent = `Congratulations Winner is ${winner}`
msgContainer.classList.remove("hide")
disableBtns()
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val =  boxes[pattern[0]].textContent;
    let pos2Val =  boxes[pattern[1]].textContent;
    let pos3Val =  boxes[pattern[2]].textContent;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val ===  pos2Val && pos2Val === pos3Val) {
            console.log('winner', pos1Val);
            showWinner(pos1Val)
            
        }
    }
  } 
};

newGameBtn.addEventListener('click', resetGame)
resetBtn.addEventListener('click', resetGame)