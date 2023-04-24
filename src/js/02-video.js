import throttle from 'lodash.throttle';
//import playar from '@vimeo/player';

const iframeEl = document.querySelector('iframe');
console.log(iframeEl);

const playerEl = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }
  
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

