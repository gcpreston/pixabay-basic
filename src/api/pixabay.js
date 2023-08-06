const API_KEY = '38681938-bbab0ac6fa1c72fbaf369969f'
const PIXABAY_BASE = `https://pixabay.com/api?key=${API_KEY}&`

export const fetchSearchResults = (query) => {
  const params = new URLSearchParams({ q: query });
  const url = PIXABAY_BASE + params.toString();

  return fetch(url);
};

export const fetchImage = (id) => {
  const params = new URLSearchParams({ id });
  const url = PIXABAY_BASE + params.toString();

  return fetch(url);
}
