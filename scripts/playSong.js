const playSong = () => {
    let number = getRandomNumber(1);
    number = 0;
    const id = 'song-' + number;
    removeEventListener();
    const song = document.getElementById(id);

    song.onplay = () => {
        timerToChangeNeon(number);
    }
    song.onended = playSong;
    if (number === 0) {
        song.volume = 0.15;
    }
    if (number === 1) {
        song.volume = 0.15;
    }
    counter();
    song.play();
}
const removeEventListener = () => {
    document.getElementById('song-0').removeEventListener('onended', playSong);
    document.getElementById('song-1').removeEventListener('onended', playSong);
}
const counter = () => {
    let timer = 0;
    setInterval(() => {
        timer++;
        console.log(timer);
    }, 1000);
}