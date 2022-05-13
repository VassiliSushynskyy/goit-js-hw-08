import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const playerBox = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(playerBox);
const STORAGE_KEY = 'videoplayer-current-time';

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

player.on('timeupdate', throttle(lastPlayedSecond, 1000));

function lastPlayedSecond(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}
