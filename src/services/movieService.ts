import axios from 'axios'
import type { MoviesHttpResponse } from '../types/movie'

const tmdbKey = import.meta.env.VITE_TMDB_TOKEN

export const fetchMovies = async (
	query: string,
): Promise<MoviesHttpResponse> => {
	console.log('Токен:', tmdbKey)
	const response = await axios.get<MoviesHttpResponse>(
		`https://api.themoviedb.org/3/search/movie`,
		{
			params: { query: query },
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${tmdbKey}`,
			},
		},
	)
	return response.data
}
