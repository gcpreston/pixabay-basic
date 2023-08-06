const API_KEY = '38681938-bbab0ac6fa1c72fbaf369969f'
const PIXABAY_BASE = `https://pixabay.com/api?key=${API_KEY}&`

export const fetchSearchResults = (query) => {
  const params = new URLSearchParams({ q: query });
  const endpoint = PIXABAY_BASE + params.toString();

  return fetch(endpoint);
};
