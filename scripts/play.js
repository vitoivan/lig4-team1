/**
 * 
 * DOM - MANIPULATION:
 * 
 */

const generalDivEl = createMap();
document.getElementById('container').appendChild(generalDivEl);
createPieces();
// renderStars();
setInterval(() => {

    changeStarPattern();

}, 120000); // 120s

playSong();

const btnMuteAudioEl = document.getElementById("btnMuteAudio");
const btnRestart = document.getElementById("btnRestart");
const btnHome = document.getElementById("btnHome");

/**
 * 
 * EVENT LISTENERS:
 * 
 */

btnMuteAudioEl.addEventListener('click', () => {

    const song0 = document.getElementById('song-0');
    const song1 = document.getElementById('song-1');
    song0.muted = !song0.muted;
    song1.muted = !song1.muted;
})

btnHome.onclick = () => window.location = "./index.html";

btnRestart.onclick = () => resetGame();