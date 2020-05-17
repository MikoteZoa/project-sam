import Axios from 'axios';

const Instance = Axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const FETCH_NETFLIX_ORIGINALS = 'FETCH_NETFLIX_ORIGINALS';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';

const API_KEY = '3fc3ee4672b6d17d3a7edd56dd787f0f';

export function fetchNetflixOriginals() {
  const request = Instance.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`);

  return {
    type: FETCH_NETFLIX_ORIGINALS,
    payload: request,
  }
}

export function fetchTopRated() {
  const request = Instance.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US`);

  return {
    type: FETCH_TOP_RATED,
    payload: request,
  }
}