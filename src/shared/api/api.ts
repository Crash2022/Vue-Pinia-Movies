import {instance} from "@/shared/api/instance"

export const moviesAPI = {
    getMovies: (title: string) => {
        return instance
            .get(`&query=${title}`)
            .then(response => response.data.results)
    },
}