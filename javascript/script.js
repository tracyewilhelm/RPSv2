//variables
let startEl = document.querySelector("#startButton");
var chooseWeaponEl = document.querySelector("#chooseWeapon");
var choice = ["rock", "paper", "scissors"];
var rockImageButton = document.querySelector("#rock");
var paperImageButton = document.querySelector("#paper");
var scissorsImageButton = document.querySelector("#scissors");
var userChoice = document.querySelector("#userChoice");
var userChoiceImgEl = document.querySelector("#userChoiceImg");
var computerChoice = document.querySelector("#computerChoice");
var computerChoiceImgEl = document.querySelector("#computerChoiceImg");
var choiceOptions = document.querySelectorAll(".imgButton");

// Hide the chooseWeapon dive until start button is clicked
chooseWeaponEl.setAttribute("style", "visibility: hidden");

var score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

let pickWeapon = function () {
  console.log("first function start");
  for (let i = 0; i < choiceOptions.length; i++) {
    // console.log(choiceOptions[i]);//it sees each item in the arary
    choiceOptions[i].addEventListener("click", function (event) {
      event.preventDefault();
      // console.log(event.target); //when you click each target it consoles
      if (event.target.id === "rock") {
        console.log("you picked rock");
        userChoice.textContent = "You chose rock";
        userChoiceImgEl.src = "./Images/rock.jpg";
      } else if (event.target.id === "paper") {
        console.log("you picked paper");
        userChoice.textContent = "You chose paper";
        userChoiceImgEl.src = "./Images/paper.jpg";
      } else if (event.target.id === "scissors") {
        console.log("you picked scissors");
        userChoice.textContent = "You chose scissors";
        userChoiceImgEl.src = "./Images/scissors.jpg";
      } else {
        console.log("error");
      }
      console.log("first function end");
      compChoice();
    });
  }
};

//add a start button. When you click start, run the pickWeapon function
startEl.addEventListener("click", function () {
  console.log("Button clicked!");
  startEl.setAttribute("hidden", true);
  chooseWeaponEl.setAttribute("style", "visible");
  pickWeapon();
});

//computer choice - turn this into a function that you call after the user has made their chioce
let compChoice = function () {
  console.log("second function start");
  computerChoice = choice[Math.floor(Math.random() * choice.length)]; //THIS ISN'T A FUNCTION!!
  console.log(computerChoice);
  // for (let i = 0; i < choice.length; i++) {
  // console.log(choiceOptions[i]);//it sees each item in the arary
  // choice[i];
  // console.log(event.target); //when you click each target it consoles
  if (computerChoice === "rock") {
    console.log("Computer picked rock");
    computerChoice.textContent = "Computer chose rock";
    computerChoiceImgEl.src = "./Images/rock.jpg";
  } else if (computerChoice === "paper") {
    console.log("Computer picked paper");
    computerChoice.textContent = "Computer chose paper";
    computerChoiceImgEl.src = "./Images/paper.jpg";
  } else if (computerChoice === "scissors") {
    console.log("Computer picked scissors");
    computerChoice.textContent = "Computer chose scissors";
    computerChoiceImgEl.src = "./Images/scissors.jpg";
  } else {
    console.log("error");
  }
  console.log("second function end");
};
// }
// rock.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("you picked rock");
//   userChoice.textContent = "You chose rock";
//   userChoiceImgEl.src = "./Images/rock.jpg";
// });

// paper.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("you picked paper");
//   userChoice.textContent = "You chose paper";
// });

// scissors.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("you picked scissors");
//   userChoice.textContent = "You chose scissors";
// });

// //variables
// var choice = ["rock", "paper", "scissors"];
// var score = {
//   wins: 0,
//   losses: 0,
//   ties: 0,
// };

// // actions
// function playPrompt() {
//   var playYesNo = confirm("Do you want to play?");
//   if (playYesNo) {
//     playGame();
//   } else {
//     alert("Have a nice day");
//   }
// }

// var playGame = function () {
//   //prompt asking user to pick r/p/s
//   userChoice = prompt("Choose Rock, Paper, or Scissors");
//   console.log(userChoice);
//   userChoice.toLowerCase();
//   userChoice.trim();
//   if (choice.includes(userChoice)) {
//     alert("good choice");
//   } else alert("you can't win with " + userChoice);

//   alert("The computer chose " + computerChoice);

//   //   logic of game
//   if (userChoice === choice[0] && computerChoice === choice[1]) {
//     console.log("Rock loses");
//     alert("You lose");
//     score.losses += 1;
//     console.log(score.losses);
//   } else if (userChoice === choice[0] && computerChoice === choice[2]) {
//     console.log("Rock wins");
//     alert("You win");
//     score.wins += 1;
//   } else if (userChoice === choice[1] && computerChoice === choice[0]) {
//     console.log("Paper wins");
//     alert("You win");
//     score.wins += 1;
//   } else if (userChoice === choice[1] && computerChoice === choice[2]) {
//     console.log("Paper loses");
//     alert("You lose");
//     score.losses += 1;
//   } else if (userChoice === choice[2] && computerChoice === choice[1]) {
//     console.log("Scissors wins");
//     alert("You win");
//     score.wins += 1;
//   } else if (userChoice === choice[2] && computerChoice === choice[0]) {
//     console.log("Scissors loses");
//     alert("You lose");
//     score.losses += 1;
//   } else if (!choice.includes(userChoice)) {
//     alert("You lose");
//     console.log("You lose");
//     score.losses += 1;
//   } else {
//     // (userChoice === computerChoice) {
//     console.log("it was a tie");
//     alert("You tied!");
//     score.ties = +1;
//   }
//   alert(Object.entries(score));
//   if (confirm("Do you want to play again?")) {
//     playGame();
//   } else alert("Have a nice day!");
// };

// playPrompt();
