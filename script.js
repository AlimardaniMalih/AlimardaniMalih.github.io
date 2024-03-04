// your code here...

/*let statusDisplay = document.querySelector('.game--status');

let gameActive = true;

let currentPlayer = "X";

let gameState = ["", "", "", "", "", "", "", "", ""];


let currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

function handleCellPlayed(clickedCell, clickedCellIndex) {
    
        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;
    }
    function handlePlayerChange() {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusDisplay.innerHTML = currentPlayerTurn();
    }
function handleResultValidation() {

}
function handleCellClick(clickedCellEvent) {
    
        const clickedCell = clickedCellEvent.target;
   
        const clickedCellIndex = parseInt(
          clickedCell.getAttribute('data-cell-index')
        );
   
       if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
      }
   
        handleCellPlayed(clickedCell, clickedCellIndex);
        handlePlayerChange();
    }
    function handleRestartGame() {
        gameActive = true;
        currentPlayer = "X";
        gameState = ["", "", "", "", "", "", "", "", ""];
        statusDisplay.innerHTML = currentPlayerTurn();
        document.querySelectorAll('.cell')
                   .forEach(cell => cell.innerHTML = "");
    }


document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
statusDisplay.onclick=function(){
    statusDisplay.innerHTML = currentPlayerTurn();
}
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);*/
let gameState = ["", "", "", "", "", "", "", "", ""];
const statusDisplay = document.querySelector('.game--status');
let currentPlayer = 'X';
let gameActive = true;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
const winnerPlayer=()=>`Player ${currentPlayer} has won`;
statusDisplay.innerHTML=currentPlayerTurn();

function handlePlayerChange() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.innerHTML = currentPlayerTurn();
}
function handleCellClick(clickedCellEvent) {
  
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex =  parseInt(clickedCell.getAttribute('data-cell-index'));

  if ( clickedCell.innerHTML=="" && gameActive==true) {
  gameState[clickedCellIndex]=currentPlayer;
  clickedCell.innerHTML = currentPlayer;
  winner();
  
  } 
  else{ return; }
 if (gameActive==true) {handlePlayerChange();};
}


function handleRestartGame() {
   gameActive=true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll('.cell')
             .forEach(cell => cell.innerHTML = "");
}

function winner(){
if ((gameState[0]!="") && (gameState[0]==gameState[1]) && (gameState[1]==gameState[2])) { gameActive=false;statusDisplay.innerHTML=winnerPlayer();return;} ;
if ((gameState[3]!="") && (gameState[3]==gameState[4]) && (gameState[4]==gameState[5])) { gameActive=false;statusDisplay.innerHTML=winnerPlayer();return;} ;
if ((gameState[6]!="") && (gameState[6]==gameState[7]) && (gameState[7]==gameState[8])) { gameActive=false;statusDisplay.innerHTML=winnerPlayer();return;} ;
if ((gameState[0]!="") && (gameState[0]==gameState[3]) && (gameState[3]==gameState[6])) { gameActive=false;statusDisplay.innerHTML=winnerPlayer();return;} ;
if ((gameState[1]!="") && (gameState[1]==gameState[4]) && (gameState[4]==gameState[7])) { gameActive=false;statusDisplay.innerHTML=winnerPlayer();return;} ;
if ((gameState[2]!="") && (gameState[2]==gameState[5]) && (gameState[5]==gameState[8])) { gameActive=false;statusDisplay.innerHTML=winnerPlayer();return;} ;
if ((gameState[0]!="") && (gameState[0]==gameState[4]) && (gameState[4]==gameState[8])) { gameActive=false;statusDisplay.innerHTML=winnerPlayer();return;} ;
if ((gameState[2]!="") && (gameState[2]==gameState[4]) && (gameState[4]==gameState[6])) { gameActive=false;statusDisplay.innerHTML=winnerPlayer();return;} ;
if (gameState.includes("")==false){gameActive=false;statusDisplay.innerHTML="Game ended in a draw";return;}
}
document
  .querySelectorAll('.cell')
  .forEach(cell => cell.addEventListener('click', handleCellClick));

document.querySelector('.game--restart').addEventListener('click', handleRestartGame);