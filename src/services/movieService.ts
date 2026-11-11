import axios from 'axios'

export default function fetchMovies() {
	const tmdbKey = import.meta.env.VITE_TMDB_TOKEN

	const options = {
		method: 'GET',
		url: 'https://api.themoviedb.org/3/search/movie?query=spiderman&include_adult=false&language=en-US&page=1',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${tmdbKey}`,
		},
	}

	axios
		.request(options)
		.then(res => console.log(res.data))
		.catch(err => console.error(err))
}
