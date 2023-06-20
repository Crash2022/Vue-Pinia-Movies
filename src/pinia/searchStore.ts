import {defineStore} from 'pinia'
import axios from "axios";
import {baseURL} from "@/shared/api/instance";

export const useSearchStore = defineStore('searchStore', {
    state: () => ({
        searchedMovies: []
    }),
    getters: {

    },
    actions: {
        async getMovies(title: string) {
            try {
                const response = await axios.get(`https:api.themoviedb.org/3/search/movie?api_key=75a89e49905f7c8cb65d8ee3600495a0&query=${title}`)
                // console.log(response)
                this.searchedMovies = response.data.results
            } catch (e) {
                console.log(e)
            }
        }
    }
})

// response item { } = response.data.results

// adult:false
// backdrop_path:"/frDS8A5vIP927KYAxTVVKRIbqZw.jpg"
//
// genre_ids:Array(3)
// 0:14
// 1:28
// 2:80
// length:3[[Prototype]]:Array(0)
//
// id:268
// original_language:"en"
// original_title:"Batman"
// overview:"Batman must face his most ruthless nemesis when a deformed madman calling himself \"The Joker\" seizes control of Gotham's criminal underworld."
// popularity:66.652
// poster_path:"/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg"
// release_date:"1989-06-23"
// title:"Batman"
// video:false
// vote_average:7.213
// vote_count:6954