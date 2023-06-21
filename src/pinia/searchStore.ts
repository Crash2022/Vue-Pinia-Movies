import {defineStore} from 'pinia'
import {ref, toRaw} from 'vue'
import {moviesAPI} from "@/shared/api/api"
import {MovieType, useMoviesStore} from "@/pinia/moviesStore"

// export const useSearchStore = defineStore('searchStore', {
//     state: (): SearchStateType => ({
//         isLoading: false,
//         searchedMovies: []
//     }),
//     getters: {
//
//     },
//     actions: {
//         async getMovies(title: string) {
//             this.isLoading = true
//             try {
//                 // вариант запроса без инстанс
//                 // const response = await axios.get(`${baseURL}&query=${title}`)
//                 // this.searchedMovies = response.data.results
//                 // console.log(response.data.results)
//
//                 const response = await moviesAPI.getMovies(title)
//                 this.searchedMovies = response
//                 // console.log(response)
//             } catch (e) {
//                 console.log(e)
//             } finally {
//                 this.isLoading = false
//             }
//         },
//         addToFavorites(movie: any) {
//             console.log(movie)
//             const moviesStore = useMoviesStore()
//             if (moviesStore.movies.some((m: MovieType) => m.id === toRaw(movie).id)) return
//             moviesStore.movies.push({...movie, isWatched: false})
//             // moviesStore.activeTab = 'movies'
//         }
//     }
// })

// вариант стора в стиле Composition API
export const useSearchStore = defineStore('searchStore', () => {
    const isLoading = ref(false)
    const searchedMovies = ref([])
    const getMovies = async (title: string) => {
        isLoading.value = true
        try {
            const response = await moviesAPI.getMovies(title)
            searchedMovies.value = response
            // console.log(response)
        } catch (e) {
            console.log(e)
        } finally {
            isLoading.value = false
        }
    }
    const addToFavorites = (movie: any) => {
        const moviesStore = useMoviesStore()

        // const rawMovie = toRaw(movie)
        // console.log(rawMovie)

        if (moviesStore.movies.some((m: MovieType) => m.id === toRaw(movie).id)) return
        // @ts-ignore
        moviesStore.movies.push({...movie, isWatched: false})
        // moviesStore.activeTab = 'movies'
    }

    return {
        isLoading, searchedMovies, getMovies, addToFavorites
    }
})

export type SearchStateType = {
    isLoading: boolean
    searchedMovies: SearchedMovieType[]
}

export type SearchedMovieType = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video:boolean
    vote_average: number
    vote_count: number
}