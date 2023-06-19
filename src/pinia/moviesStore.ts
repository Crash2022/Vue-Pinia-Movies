import {defineStore} from 'pinia'

export const useMoviesStore = defineStore('moviesStore', {
    state: () => ({
        movies: [
            {
                id: 1,
                original_title: 'Home Alone',
                overview: 'About boy stay at home alone at Christmas',
                poster_path: 'https://avatars.dzeninfra.ru/get-zen_doc/3362051/pub_5fce0abdf825a128413431d0_5fce84ec0a45a91cf4886d2c/scale_1200',
                release_date: '1991-01-01',
                isWatched: false
            },
            {
                id: 2,
                original_title: 'Home Alone 2',
                overview: 'About boy stay at home alone in New York',
                poster_path: 'https://media.suara.com/suara-partners/purwasuka/thumbs/336x189/2022/12/25/1-3ef3bc7f-1bf4-4b4e-b506-ceba72d1dbe9.jpeg',
                release_date: '1992-01-01',
                isWatched: true
            }
        ]
    })
})
