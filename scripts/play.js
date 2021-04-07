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

document.getElementById("song").volume = 0.15;
const btnMuteAudioEl = document.getElementById("btnMuteAudio");

/**
 * 
 * EVENT LISTENERS:
 * 
 */

btnMuteAudioEl.onclick = () => document.getElementById('song').muted = !document.getElementById('song').muted;


