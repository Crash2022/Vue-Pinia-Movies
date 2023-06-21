import axios from "axios"

export const instance = axios.create({
    baseURL: 'https:api.themoviedb.org/3/search/movie?api_key=75a89e49905f7c8cb65d8ee3600495a0',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWE4OWU0OTkwNWY3YzhjYjY1ZDhlZTM2MDA0OTVhMCIsInN1YiI6IjY0OTE4OGE1MjYzNDYyMDBlYjc3ZGJiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XUu80fgbt7QWJpHCJP1jfOERxD1uQnOWnygTThJddg8`
    }
})

export const baseURL = 'https:api.themoviedb.org/3/search/movie?api_key=75a89e49905f7c8cb65d8ee3600495a0'