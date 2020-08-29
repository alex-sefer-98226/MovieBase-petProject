export const API_URL = 'http://api.themoviedb.org/3';
export const API_KEY = '50c5fdad5b4c98667b97d87700b535eb';

export const getFilms = (category, page = 1) => `${API_URL}/movie/${category}?api_key=${API_KEY}&language=ru&page=${page}`;
export const getTvs = (category, page=1)=>`${API_URL}/tv/${category}?api_key=${API_KEY}&language=ru&page=${page}`
export const getTopRatedFilms = (page = 1) => `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=ru&page=${page}`;