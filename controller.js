import {initState} from './state.js';
import {loadPlayerApi, createPlayer} from './player.js';
import {populateQueue, refreshQueue, removeFromQueue} from './queue.js';
import {pickVideo} from './helpers/selectors.js';
import {createDate} from './helpers/dates.js';

initState();
populateQueue();
loadPlayerApi();

window.newVideo = () => newVideo();
window.onYouTubeIframeAPIReady = () => init();

const onPlayerStateChange = ({data}) => data === 0 ? newVideo() : null;

function init() {
  const {queue} = state;
  const videoId = pickVideo(queue);
  window.player = createPlayer(videoId, onPlayerStateChange);
  removeFromQueue(videoId);
}

function newVideo() {
  const {queue, lastChecked} = state;

  if (lastChecked < createDate(0, 5)) {
    refreshQueue();
  }
  if (queue.length < 1) {
    populateQueue();
  }

  const videoId = pickVideo(queue);
  window.player.loadVideoById({videoId});
  removeFromQueue(videoId);
}
