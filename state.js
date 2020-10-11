function createState() {
  return {
    queue: [],
    seen: [],
    lastChecked: null,
    cutoff: 1
  }
}

function loadState() {
 return JSON.parse(localStorage.getItem('state'));
}

export function saveState() {
  localStorage.setItem('state', JSON.stringify(window.state));
}

export function initState() {
  const savedState = loadState();
  window.state = savedState || createState();
}
