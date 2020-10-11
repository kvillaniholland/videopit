import {saveState} from './state.js';
import {createDate} from './helpers/dates.js';
import {fetchVideos} from './api.js';
import {filterVideos} from './helpers/selectors.js';

export function removeFromQueue(videoId) {
  state.seen.push(videoId);
  state.queue = filterVideos(state.queue);
  saveState();
}

export function populateQueue() {
  let after = createDate(state.cutoff)
  let nextPage;

  while (state.queue.length < 10) {
    let response = fetchVideos(after, nextPage);
    nextPage = response.nextPage;
    state.queue.push(...filterVideos(response.items));

    if (!nextPage) {
      state.cutoff++;
      after = createDate(state.cutoff);
    }
  }
  state.lastChecked = new Date();
}

export function refreshQueue() {
  state.cutoff = 1;
  state.queue = [];

  populateQueue();
}
