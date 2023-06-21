import {defineStore} from 'pinia'

export const useMoviesStore = defineStore('moviesStore', {
    state: (): MoviesStateType => ({
        movies: [],
        activeTab: 'search'
    }),
    getters: {
        watchedMovies(state) {
            return state.movies.filter((m: MovieType) => m.isWatched)
        },
        // иная запись обращения к стейту
        // watchedMovies(movies) {
        //     return this.movies.filter((m: MovieType) => m.isWatched)
        // }

        // пример (чтобы достать прямое значение, нет необходимости делать геттер)
        // totalMoviesCount(state) {
        //     return state.movies.length
        // }
    },
    actions: {
        setActiveTab(activeTab: ActiveTabType) {
            this.activeTab = activeTab
        },
        toggleIsWatchedMovie(movieId: number) {
            const movieIndex = this.movies.findIndex(m => m.id === movieId)
            this.movies[movieIndex].isWatched = !this.movies[movieIndex].isWatched
        },
        deleteMovie(movieId: number) {
            this.movies = this.movies.filter(m => m.id !== movieId)
        }
    }
})

export type MoviesStateType = {
    movies: MovieType[]
    activeTab: ActiveTabType
}

export type MovieType = {
    id: number
    original_title: string
    overview: string
    poster_path: string
    release_date: string
    isWatched: boolean
}

export type ActiveTabType = 'movies' | 'search'