const Letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
const Numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
const ChessBoard = document.getElementById("ChessBoard");
const StartBtn = document.getElementById("StartBtn");
const TileDisplay = document.getElementById("TileDisplay");
const Score = document.getElementById("Score");
const ScoreFigure = document.getElementById("ScoreFigure");
const CounterDisplay = document.getElementById("CounterDisplay");
const TickMark = `<span id="TickMark" style="  color: transparent;
text-shadow: -1px 1px 2px green, 1px 1px 2px green, 1px -1px 0 green, -1px -1px 0 white; font-size: 1em;">✔</span>`;
const XMark = `<span id="XMark" style="  color: transparent;
text-shadow: -1px 1px 2px red, 1px 1px 2px red, 1px -1px 0 red, -1px -1px 0 white;font-size: 1em;">✘</span>`;
let isON;
let GameScore;
let wantedTile;
let clickedTile;
let GameTimeLeft;
let StartGameCounter;
let isFirstTry = true;

function EnvironmentSetting() {
  console.log("called");
  isON = false;
  GameScore = 0;
  GameTimeLeft = 30;
  StartGameCounter = 2;
  CounterDisplay.innerText = "00:00";
  CounterDisplay.style.paddingTop = "50px";
  // CounterDisplay.style.fontSize = "1em";
  StartBtn.innerText = `START`;
  Score.innerHTML = GameScore;
  TileDisplay.innerText = "";
  drawBoard();
  console.log("end");
}

function drawBoard() {
  if (isFirstTry) {
    isFirstTry = false;
    for (let i = 0; i < 8; i++) {
      const row = document.createElement("div");
      row.style.display = "flex";
      for (let j = 0; j < 8; j++) {
        let newID = `${Letters[7 - i]}${Numbers[j]}`;
        const square = document.createElement("div");
        square.className = "square";
        square.id = newID;

        if ((i + j) % 2 === 0) {
          square.style.backgroundColor = "white";
          square.style.opacity = "1";
        }
        const labelLetter = `<span style= "text-shadow: -1px 1px 2px black, 1px 1px 2px black, 1px -1px 0 black, -1px -1px 0 white; color: white; font-size: 2em; margin-top: 5px; margin-left: 5px; position: absolute; z-index: 2;">${
          Letters[7 - (i + j)]
        }</span>`;
        const labelNumber = `<span style= "text-shadow: -1px 1px 2px black, 1px 1px 2px black, 1px -1px 0 black, -1px -1px 0 white; color: white; font-size: 2em; margin-top: 40px; margin-left: 50px;  position: absolute; z-index: 2;">${Numbers[j]}</span>`;
        if (j === 0) {
          row.insertAdjacentHTML("afterbegin", labelLetter);
        }
        if (i === 7) {
          square.insertAdjacentHTML("afterbegin", labelNumber);
        }
        row.appendChild(square);
        ChessBoard.appendChild(row);
      }
    }
  }
}

function StartGame() {
  console.log("start game is called");
  if (isON === false) {
    console.log("start game is called inside IF condition");

    let StartGameTimer = setInterval(countdown, 1000);
    function countdown() {
      if (StartGameCounter == -1) {
        StartBtn.style.fontSize = "1.5em";
        isON = true;
        clearTimeout(StartGameTimer);
        GameTime();
      } else {
        StartBtn.style.fontSize = "1.5em";
        StartBtn.innerText = StartGameCounter + 1;
        StartGameCounter--;
      }
    }
  }
}

function GameTime() {
  StartBtn.innerText = `Game ON`;
  wantedTile = TileGenerator();
  let timerId = setInterval(countdown, 1000);

  function countdown() {
    if (GameTimeLeft == 0) {
      isON = false;
      clearTimeout(timerId);
      playing();
    } else {
      CounterDisplay.innerText = `00:${GameTimeLeft}`;
      GameTimeLeft--;
    }
  }
  console.log(`${isON} from countdown func`);
  playing();
}

function TileGenerator() {
  let TileLetter = Letters[Math.floor(Math.random() * Letters.length)];
  let TileNo = Numbers[Math.floor(Math.random() * Numbers.length)];
  let TileLocation = TileLetter + TileNo;
  TileDisplay.innerText = TileLocation;
  return TileLocation;
}

function playing() {
  if (isON) {
    console.log("inside playing func");
    console.log(`${isON} from playing func`);
    ChessBoard.addEventListener("click", TileListening);
  } else {
    console.log(isON);
    console.log(`we'll remove the listener`);
    ChessBoard.removeEventListener("click", TileListening);
    EnvironmentSetting();
  }

  function TileListening(event) {
    if (isON == true) {
      clickedTile = event.target.id;
      if (wantedTile === clickedTile) {
        GameScore++;
        Score.innerHTML = GameScore;
        ScoreFigure.innerHTML += TickMark;
        wantedTile = TileGenerator();
      } else {
        ScoreFigure.innerHTML += XMark;
        wantedTile = TileGenerator();
      }
    }
  }
}

EnvironmentSetting();
