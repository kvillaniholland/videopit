export function fetchVideos(date, pageToken = null) {
  const params = {
      part: 'snippet',
      key: 'AIzaSyDqXyHfOhzz0CuRZS2tJhTJiGC-oHEFc-I',
      publishedAfter: date.toISOString(),
      type: 'video',
      videoDuration: 'short',
      order: 'date',
      maxResults: 50,
      videoEmbeddable: true,
      safeSearch: 'none',
      pageToken: pageToken || ''
  };
  return makeApiRequest(params);
}

function makeApiRequest(params) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://www.googleapis.com/youtube/v3/search" + buildQueryString(params) , false);
  xhttp.send();
  const response = JSON.parse(xhttp.responseText);

  return {
    items: response.items,
    nextPage: response.nextPageToken
  };
}

function buildQueryString(params) {
  var queryString = '?';

  for (var key in params) {
    queryString += key + '=' + params[key] + '&';
  }

  return queryString.substring(0, queryString.length - 1);
}
