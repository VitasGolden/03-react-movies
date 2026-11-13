import { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import css from './App.module.css'
import { toast, Toaster } from 'react-hot-toast'
import type { Movie } from '../../types/movie'
import { fetchMovies } from '../../services/moviesService'

export default function App() {
	const [movies, setMovies] = useState<Movie[]>([])

	const handleSearch = async (query: string) => {
		setMovies([])

		try {
			const data = await fetchMovies(query)

			if (data.results.length === 0) {
				toast.error('No movies found for your request.')
				return
			}
			setMovies(data.results)
		} catch {
			toast.error('Something went wrong. Please try again.')
		}
	}

	return (
		<div className={css.app}>
			<Toaster position='top-center' reverseOrder={false} />
			<SearchBar onSubmit={handleSearch} />
			<p>Знайдено фільмів: {movies.length}</p>
		</div>
	)
}
