export function filterVideos(videos) {
  const {seen} = state;

  return videos.filter(video => !seen.includes(video.id.videoId));
}

export function pickVideo(videos) {
  const index = Math.floor((Math.random() * videos.length-1) + 1);
  return videos[index].id.videoId;
}
