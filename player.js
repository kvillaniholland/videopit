const playerProps = {
  height: 720,
  width: 1280,
  playerVars: {
    autoplay: 1
  }
}

const container = document.getElementById('container');

export function createPlayer(videoId, onStateChange) {
  const div = document.createElement('div');
  div.setAttribute('id', 'player');
  container.appendChild(div);

  return new YT.Player('player', {
    ...playerProps,
    videoId,
    events: {onStateChange}
  });
}

export function loadPlayerApi() {
  const tag = document.createElement('script');
  const firstScriptTag = document.getElementsByTagName('script')[0];

  tag.src = "https://www.youtube.com/iframe_api";
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
