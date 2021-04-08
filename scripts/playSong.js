const playSong = () => {
  const number = getRandomNumber(1);
  const id = 'song-' + number;
  removeEventListener();
  const song = document.getElementById(id);
  
  song.onplay = () => {
      timerToChangeNeon(number);
  }
  song.onended = playSong;
  if(number === 0){
    song.volume = 0.15;
  }
  if(number === 1){
    song.volume = 0.25;
  }
  song.play();
}
const removeEventListener = () => {
    document.getElementById('song-0').removeEventListener('onended', playSong);
    document.getElementById('song-1').removeEventListener('onended', playSong);
}