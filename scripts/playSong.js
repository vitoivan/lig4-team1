const playSong = () => {
  const number = getRandomNumber(1);
  const id = 'song-' + number;
  
  const song = document.getElementById(id);

  if(number === 0){
    song.volume = 0.15;
  }
  if(number === 1){
    song.volume = 0.25;
  }
  song.play();
  timerToChangeNeon(number);
  const int = counter()
  document.addEventListener('keydown', (e) => {
    if(e.key === 'z'){
        clearInterval(int)
    }
  })
}
function counter(){
  time = 0;
  const interval = setInterval( () => {
    time++;
    console.log(time);
  },1000)
  return interval;
}