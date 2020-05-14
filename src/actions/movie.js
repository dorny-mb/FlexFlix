import { ADD_MOVIE, REMOVE_MOVIE, GET_MOVIES, GET_NUMBER } from './index';

export const addMovie = (movie) => (dipsatch) => {
	let movies = JSON.parse(localStorage.getItem('movies'));
	if (movies) {
		movies = [...movies, movie];
	} else {
		movies = [];
		movies.push(movie);
	}
	localStorage.setItem('movies', JSON.stringify(movies));
	dipsatch({
		type: ADD_MOVIE,
		payload: movies,
	});
};

export const removeMovie = (movieId) => (dipsatch) => {
	const oldMovies = JSON.parse(localStorage.getItem('movies'));
	const movies = oldMovies.filter((movie) => movie.id !== movieId);
	localStorage.setItem('movies', JSON.stringify(movies));
	dipsatch({
		type: REMOVE_MOVIE,
		payload: movies,
	});
};

export const getMovies = () => (dipsatch) => {
	const movies = JSON.parse(localStorage.getItem('movies'));
	dipsatch({
		type: GET_MOVIES,
		payload: movies,
	});
};

export const getNumber = () => (dipsatch) => {
	const movies = JSON.parse(localStorage.getItem('movies'));
	let number;
	if (movies) {
		number = movies.length;
	} else {
		number = 0;
	}
	dipsatch({ type: GET_NUMBER, payload: number });
};
