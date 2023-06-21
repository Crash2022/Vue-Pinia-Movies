import axios from "axios"

export const instance = axios.create({
    baseURL: 'https:api.themoviedb.org/3/search/movie?api_key=75a89e49905f7c8cb65d8ee3600495a0'
})

// export const baseURL = 'https:api.themoviedb.org/3/search/movie?api_key=75a89e49905f7c8cb65d8ee3600495a0'