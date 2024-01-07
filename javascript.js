const wood = "Wood";
const fire = "Fire";
const earth = "Earth";
const metal = "Metal";
const water = "Water";

let gamesPlayed = 0;
let myWins = 0;
let myLosses = 0;
let ties = 0;
let compWins = 0;
let compLosses = 0;

const myRandNum = Math.floor(Math.random() * 5 + 1);
// console.log(myRandNum);
const compRandNum = Math.floor(Math.random() * 5 + 1);
// console.log(compRandNum);

const myElem = () => {
  switch (myRandNum) {
    case 1:
      return wood;
    case 2:
      return fire;
    case 3:
      return earth;
    case 4:
      return metal;
    default:
      return water;
  }
};

console.log(`You chose: ${myElem()}.`);

const compElem = () => {
  switch (compRandNum) {
    case 1:
      return wood;
    case 2:
      return fire;
    case 3:
      return earth;
    case 4:
      return metal;
    default:
      return water;
  }
};

console.log(`Your opponent chose: ${compElem()}.`);

const outcomeMessage = () => {
let message = "";
if (
  (myElem() === fire && compElem() === wood) ||
  (myElem() === wood && compElem() === fire)
) {
  return (message = "Fire devours Wood");
} else if (
  (myElem() === metal && compElem() === wood) ||
  (myElem() === wood && compElem() === metal)
) {
  return (message = "Metal severs Wood");
} else if (
  (myElem() === earth && compElem() === fire) ||
  (myElem() === fire && compElem() === earth)
) {
  return (message = "Earth smothers Fire");
} else if (
  (myElem() === water && compElem() === fire) ||
  (myElem() === fire && compElem() === water)
) {
  return (message = "Water extinguishes Fire");
} else if (
  (myElem() === metal && compElem() === earth) ||
  (myElem() === earth && compElem() === metal)
) {
  return (message = "Metal hides within Earth");
} else if (
  (myElem() === wood && compElem() === earth) ||
  (myElem() === earth && compElem() === wood)
) {
  return (message = "Wood depletes Earth");
} else if (
  (myElem() === water && compElem() === metal) ||
  (myElem() === metal && compElem() === water)
) {
  return (message = "Water rusts Metal");
} else if (
  (myElem() === fire && compElem() === metal) ||
  (myElem() === metal && compElem() === fire)
) {
  return (message = "Fire melts Metal");
} else if (
  (myElem() === wood && compElem() === water) ||
  (myElem() === water && compElem() === wood)
) {
  return (message = "Wood drinks Water");
} else {
  return (message = "Earth directs and contains Water");
}

}

const getWinner = () => {
    if (
      (myElem() === fire && compElem() === wood) ||
      (myElem() === metal && compElem() === wood) ||
      (myElem() === earth && compElem() === fire) ||
      (myElem() === water && compElem() === fire) ||
      (myElem() === metal && compElem() === earth) ||
      (myElem() === wood && compElem() === earth) ||
      (myElem() === water && compElem() === metal) ||
      (myElem() === fire && compElem() === metal) ||
      (myElem() === wood && compElem() === water) ||
      (myElem() === earth && compElem() === water)
    ) {
      return `You win!!! ${outcomeMessage()}`;
    } else if (myElem() === compElem()) {
      return "Tie match. Replay until there is a winner.";
    } else {
      return `You lose. ${outcomeMessage()}`;
    }

};

let playRound = () => {
    
}

console.log(getWinner());
console.log(`Games played: ${gamesPlayed}`);
console.log(`My wins: ${myWins}`);
console.log(`My losses: ${myLosses}`);
console.log(`Ties: ${ties}`);
console.log(`Opponent wins: ${compWins}`);
console.log(`Opponent losses: ${compLosses}`);

