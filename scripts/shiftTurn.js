/**/ 
let current;

function currentPlayer () {
   if (current === undefined) {
       current = firstPlayer;
   }
   if (current === firstPlayer) {
        current = secondPlayer; 
   } else {
       current = firstPlayer;
   }

    return current;
}

currentPlayer()

document.getElementById('container').addEventListener("click", currentPlayer);