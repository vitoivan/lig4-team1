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

document.getElementById("song").volume = 0;
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

btnRestart.onclick = () => resetTable();

const renderResultScreen = () => {
    const resultScreenEl = document.querySelector(`div[data-id="resultScreen"]`);
    const h2El = document.createElement("h2");
    const h3El = document.createElement("h3");
    const btnRestart = document.createElement("button");

    h2El.innerText = `Parabéns, ${hasWinner}!`;
    h3El.innerText = "Você venceu!!"
    btnRestart.dataset.id = "btnRestart";
    btnRestart.classList.add("btn");
    btnRestart.classList.add("ingame-button");
    btnRestart.innerText = "reiniciar";

    removeChildNodes(resultScreenEl);

    resultScreenEl.appendChild(h2El);
    resultScreenEl.appendChild(h3El);
    resultScreenEl.appendChild(btnRestart);

    btnRestart.onclick = () => resetTable();

    resultScreenEl.classList.remove(DISPLAY_NONE_CLASS);
    resultScreenEl.classList.remove(HIDDEN_CLASS);

}; // renderResultScreen()

const renderPopUp = () => {
    const resultScreenEl = document.querySelector(`div[data-id="popUpScreen"]`);
    const h2El = document.createElement("h2");
    const h3El = document.createElement("h3");
    const btnRestart = document.createElement("button");

    h2El.innerText = "Fim da rodada!";

    if (hasWinner === GREEN)
        h3El.innerText = `Você marcou mais um ponto!`;
    else
        h3El.innerText = `Você marcou mais um ponto!`;

    btnRestart.dataset.id = "btnRestart";
    btnRestart.classList.add("btn");
    btnRestart.classList.add("ingame-button");
    btnRestart.innerText = "reiniciar";

    removeChildNodes(resultScreenEl);

    resultScreenEl.appendChild(h2El);
    resultScreenEl.appendChild(h3El);
    resultScreenEl.appendChild(btnRestart);

    btnRestart.onclick = () => resetTable();

    resultScreenEl.classList.remove(DISPLAY_NONE_CLASS);
    resultScreenEl.classList.remove(HIDDEN_CLASS);

}; // renderPopUp()