import {defineStore} from 'pinia'
import {SearchedMovieType} from "@/pinia/searchStore"
import {ref, watch, computed} from 'vue'

// export const useMoviesStore = defineStore('moviesStore', {
//     state: (): MoviesStateType => ({
//         movies: [],
//         activeTab: 'search'
//     }),
//     getters: {
//         watchedMovies(state) {
//             return state.movies.filter((m: MovieType) => m.isWatched)
//         },
//         // иная запись обращения к стейту
//         // watchedMovies(movies) {
//         //     return this.movies.filter((m: MovieType) => m.isWatched)
//         // }
//
//         // пример (чтобы достать прямое значение, нет необходимости делать геттер)
//         // totalMoviesCount(state) {
//         //     return state.movies.length
//         // }
//     },
//     actions: {
//         setActiveTab(tab: ActiveTabType) {
//             this.activeTab = tab
//         },
//         toggleIsWatchedMovie(movieId: number) {
//             const movieIndex = this.movies.findIndex(m => m.id === movieId)
//             this.movies[movieIndex].isWatched = !this.movies[movieIndex].isWatched
//         },
//         deleteMovie(movieId: number) {
//             this.movies = this.movies.filter(m => m.id !== movieId)
//         }
//     }
// })

// вариант стора в стиле Composition API
export const useMoviesStore = defineStore('moviesStore', () => {
    const movies = ref([])
    const activeTab = ref<ActiveTabType>('search')

    const moviesInLocalStorage = localStorage.getItem('movies')

    if (moviesInLocalStorage) {
        movies.value = JSON.parse(moviesInLocalStorage)._value
        // console.log(JSON.parse(moviesInLocalStorage))
    }

    watch(() => movies, (state) => {
        localStorage.setItem('movies', JSON.stringify(state))
    }, {deep: true})

    const watchedMovies = computed(() => {
        return movies.value.filter((m: MovieType) => m.isWatched)
    })
    const totalMoviesCount = computed(() => {
        return movies.value.length
    })

    const setActiveTab = (tab: ActiveTabType) => {
        // @ts-ignore
        activeTab.value = tab
    }
    const toggleIsWatchedMovie = (movieId: number) => {
        const movieIndex = movies.value.findIndex((m: MovieType) => m.id === movieId)
        // @ts-ignore
        movies.value[movieIndex].isWatched = !movies.value[movieIndex].isWatched
    }
    const deleteMovie = (movieId: number) => {
        movies.value = movies.value.filter((m: MovieType) => m.id !== movieId)
    }

    return {
        movies, activeTab,
        watchedMovies, totalMoviesCount,
        setActiveTab, toggleIsWatchedMovie, deleteMovie
    }
})

export type MoviesStateType = {
    movies: MovieType[]
    activeTab: ActiveTabType
}

export type MovieType = SearchedMovieType & {
    isWatched: boolean
}

export type ActiveTabType = 'movies' | 'search'