// Just naming the five elements to avoid using quotation marks throughout the code.

const wo = "Wood";
const fi = "Fire";
const ea = "Earth";
const me = "Metal";
const wa = "Water";

const btnWo = document.querySelector("#btn-wo");
const btnFi = document.querySelector("#btn-fi");
const btnEa = document.querySelector("#btn-ea");
const btnMe = document.querySelector("#btn-me");
const btnWa = document.querySelector("#btn-wa");

const myPick = document.querySelector("#my-pick")
const defaultYouChoose = "Please choose an element from the five above."

const compPick = document.querySelector("#comp-pick");
const defaultCompChoose = "Your opponent awaits your secret selection.";

const winMsg = document.querySelector("#win-msg");
const defaultPreGame = "The ancient elements are currently at rest.";

const curWinsText = document.querySelector("#cur-wins");
const curLossesText = document.querySelector("#cur-losses");

let myElem;
let compElem;
let gameCount = 0;
let curWins = 0;
let curLosses = 0; // aka computer wins.
let rando = 0;

function compRandNum() {
//   let randomNum = Math.floor(Math.random() * 5 + 1);
return Math.floor(Math.random() * 5 + 1);
}

btnWo.addEventListener("click", getMyElem);
btnFi.addEventListener("click", getMyElem);
btnEa.addEventListener("click", getMyElem);
btnMe.addEventListener("click", getMyElem);
btnWa.addEventListener("click", getMyElem);


function playRound() {
  if (gameCount === 0) {
    myPick.textContent = defaultYouChoose;
    compPick.textContent = defaultCompChoose;
    winMsg.textContent = defaultPreGame;
    curWinsText.textContent = `${curWins}`;
    curLossesText.textContent = `${curLosses}`;
    }
  }

playRound();

function getMyElem(e) {
  if (e.target.id === "btn-wo" || e.target.id === "img-wo") {
    myElem = wo;
    rando = compRandNum();
    myPick.textContent = `You chose the element of ${wo}.`;
  } else if (e.target.id === "btn-fi" || e.target.id === "img-fi") {
    myElem = fi;
    rando = compRandNum();
    myPick.textContent = `You chose the element of ${fi}.`;
  } else if (e.target.id === "btn-ea" || e.target.id === "img-ea") {
    myElem = ea;
    rando = compRandNum();
    myPick.textContent = `You chose the element of ${ea}.`;
  } else if (e.target.id === "btn-me" || e.target.id === "img-me") {
    myElem = me;
    rando = compRandNum();
    myPick.textContent = `You chose the element of ${me}.`;
  } else if (e.target.id === "btn-wa" || e.target.id === "img-wa") {
    myElem = wa;
    rando = compRandNum();
    myPick.textContent = `You chose the element of ${wa}.`;
    } 

  function getCompElem() {
    if (myElem) {
      if (rando === 1) {
        compElem = wo;
          compPick.textContent = `Your opponent selected ${wo}.`;
      } else if (rando === 2) {
        compElem = fi;
        compPick.textContent = `Your opponent selected ${fi}.`;
      } else if (rando === 3) {
        compElem = ea;
        compPick.textContent = `Your opponent selected ${ea}.`;
      } else if (rando === 4) {
        compElem = me;
        compPick.textContent = `Your opponent selected ${me}.`;
      } else if (rando === 5) {
        compElem = wa;
        compPick.textContent = `Your opponent selected ${wa}.`;
      } else {
        console.log("There is currently no player selection.");
      }
      return compElem;
    }
  }

  getCompElem();

  function outcomeMessage() {
    let message;
    if (
      (myElem === fi && compElem === wo) ||
      (myElem === wo && compElem === fi)
    ) {
      return (message = "Fire devours Wood");
    } else if (
      (myElem === me && compElem === wo) ||
      (myElem === wo && compElem === me)
    ) {
      return (message = "Metal severs Wood");
    } else if (
      (myElem === ea && compElem === fi) ||
      (myElem === fi && compElem === ea)
    ) {
      return (message = "Earth smothers Fire");
    } else if (
      (myElem === wa && compElem === fi) ||
      (myElem === fi && compElem === wa)
    ) {
      return (message = "Water extinguishes Fire");
    } else if (
      (myElem === me && compElem === ea) ||
      (myElem === ea && compElem === me)
    ) {
      return (message = "Metal hides within Earth");
    } else if (
      (myElem === wo && compElem === ea) ||
      (myElem === ea && compElem === wo)
    ) {
      return (message = "Wood depletes Earth");
    } else if (
      (myElem === wa && compElem === me) ||
      (myElem === me && compElem === wa)
    ) {
      return (message = "Water rusts Metal");
    } else if (
      (myElem === fi && compElem === me) ||
      (myElem === me && compElem === fi)
    ) {
      return (message = "Fire melts Metal");
    } else if (
      (myElem === wo && compElem === wa) ||
      (myElem === wa && compElem === wo)
    ) {
      return (message = "Wood drinks Water");
    } else {
      return (message = "Earth directs and contains Water");
    }
  }

  outcomeMessage();

  function getWinner() {
    if (
      (myElem === fi && compElem === wo) ||
      (myElem === me && compElem === wo) ||
      (myElem === ea && compElem === fi) ||
      (myElem === wa && compElem === fi) ||
      (myElem === me && compElem === ea) ||
      (myElem === wo && compElem === ea) ||
      (myElem === wa && compElem === me) ||
      (myElem === fi && compElem === me) ||
      (myElem === wo && compElem === wa) ||
      (myElem === ea && compElem === wa)
    ) {
      winMsg.textContent = `${outcomeMessage()}, you win a point!`;
      gameCount++;
      curWins += 1;
      curWinsText.textContent = `${curWins}`;
    } else if (myElem === compElem) {
      winMsg.textContent = `Tie!!! 
      Replay until there is a winner.`;
      gameCount++;
    } else {
      winMsg.textContent = `${outcomeMessage()}. Opponent gains a point.`;
      gameCount ++;
      curLosses+=1;
      curLossesText.textContent = `${curLosses}`;
    }
  }

  getWinner();

  function matchWinnerOrLoser() {
    if (curWins === 5) {
      winMsg.textContent = `You win with 5 points! (${outcomeMessage()}.)`
    } else if (curLosses === 5) {
      winMsg.textContent = `Opponent has 5 points, you lose. (${outcomeMessage()}.)`;
    } 
  }

  matchWinnerOrLoser();

  function resetGame() {
    if (curWins === 5 || curLosses === 5) {
      setTimeout(function () {
        alert("Clock OK to begin a new Wu Xing Roshambo match.");
        location.reload();
        return false;
      }, 100);
      }
    }
  resetGame()
}