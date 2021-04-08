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

playSong();

const btnMuteAudioEl = document.getElementById("btnMuteAudio");
const btnRestartEl = document.getElementById("btnRestart");
const btnHomeEl = document.getElementById("btnHome");

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

btnHomeEl.onclick = () => window.location = "./index.html";

btnRestartEl.onclick = () => resetGame();