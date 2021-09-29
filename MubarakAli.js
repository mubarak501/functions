let options = document.querySelectorAll(".options");
let rockElm = document.getElementById("rock");
let paperElm = document.getElementById("paper");
let scissorElm = document.getElementById("scissor");
const computerOptions = ["paper", "rock", "scissor"];
let outputShow = document.getElementById("chooseOption");
let finalresult = document.getElementById("result");
let finalINputsComputer = document.getElementById("computerRandomInputs");

document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let playerchoose = outputShow.value;
    const COMPUTERValue = computerOptions[mRandomNum()];

    if (COMPUTERValue === playerchoose) {
      result.textContent = "😕Tie";
    } else if (playerchoose == "rock") {
      if (COMPUTERValue == "paper") {
        result.textContent = "😞Lose";
      } else {
        result.textContent = "😃Won";
      }
    } else if (playerchoose == "scissor") {
      if (COMPUTERValue == "rock") {
        result.textContent = "😞Lose";
      } else {
        result.textContent = "😃Won";
      }
    } else if (playerchoose == "paper") {
      if (COMPUTERValue == "scissor") {
        result.textContent = "😞Lose";
      } else {
        result.textContent = "😃Won";
      }
    }
    console.log(COMPUTERValue);
    finalINputsComputer.innerHTML = COMPUTERValue;
  });

// function ComputerGenOptions() {
function mRandomNum() {
  return Math.floor(Math.random() * 3);
}

// }
// console.log(ComputerGenOptions);
// function makeSelcetion() {
//   const computerSelection = randonmNumbers;
//   console.log(computerSelection);
// }
// function randonmNumbers() {
//   const randomIndex = math.floor(math.random() * computerOptions.length);
//   return computerOptions[randomIndex];
// }
