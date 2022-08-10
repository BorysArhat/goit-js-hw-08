import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
import '../css/common.css';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay({ seconds }) {
  localStorage.setItem(LOCAL_KEY, seconds);
}
setCurrentTime();
function setCurrentTime() {
  const playedTime = localStorage.getItem(LOCAL_KEY);
  if (playedTime) {
    player.setCurrentTime(playedTime);
  }
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
