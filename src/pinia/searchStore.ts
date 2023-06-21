import {defineStore} from 'pinia'
import {moviesAPI} from "@/shared/api/api";

export const useSearchStore = defineStore('searchStore', {
    state: (): SearchStateType => ({
        isLoading: false,
        searchedMovies: []
    }),
    getters: {

    },
    actions: {
        async getMovies(title: string) {
            this.isLoading = true
            try {
                // вариант запроса без инстанс
                // const response = await axios.get(`${baseURL}&query=${title}`)
                // this.searchedMovies = response.data.results
                // console.log(response.data.results)

                const response = await moviesAPI.getMovies(title)
                this.searchedMovies = response
                console.log(response)
            } catch (e) {
                console.log(e)
            } finally {
                this.isLoading = false
            }
        }
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