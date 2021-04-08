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

/**
 * 
 * EVENT LISTENERS:
 * 
 */

btnMuteAudioEl.onclick = () => {
    document.getElementById('song-0').muted = !document.getElementById('song-0').muted;
    document.getElementById('song-1').muted = !document.getElementById('song-1').muted;
}