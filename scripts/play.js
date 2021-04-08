/**
 * 
 * DOM - MANIPULATION:
 * 
 */

const generalDivEl = createMap();
document.getElementById('container').appendChild(generalDivEl);
createPieces();
renderStars();
setInterval(() => {

    changeStarPattern();

}, 120000); // 120s

document.getElementById("song").volume = .05;
timerToChangeNeon(0);
const btnMuteAudioEl = document.getElementById("btnMuteAudio");
const btnRestart = document.getElementById("btnRestart");
const btnHome = document.getElementById("btnHome");

/**
 * 
 * EVENT LISTENERS:
 * 
 */

btnMuteAudioEl.onclick = () => document.getElementById('song').muted = !document.getElementById('song').muted;

btnHome.onclick = () => window.location = "./index.html";

btnRestart.onclick = () => resetGame();