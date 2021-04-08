const playSong = () => {
  const number = getRandomNumber(1);
  const id = 'song-' + number;

  const song = document.getElementById(id);
  if(song.onplay === null){
      song.onplay = () => {
        timerToChangeNeon(number);
      }
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