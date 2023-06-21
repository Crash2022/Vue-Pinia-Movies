<template>
    <div class="movie_item">
        <div v-if="movie.poster_path"
             class="movie_poster"
        >
<!--            <img :src="movie.poster_path" :alt="movie.original_title">-->
            <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.original_title">
        </div>
        <div v-else
             class="movie_poster"
        >
            <img src="@/shared/assets/no-image.jpg" alt="movie_poster">
        </div>

        <div class="movie_info">
            <div class="info_content">
                <div class="movie_title">
                    {{movie.original_title}}<span v-if="movie.release_date.length">, {{movie.release_date.slice(0, 4)}}</span>
                </div>
                <div class="movie_overview" v-if="movie.overview.length">
                    {{movie.overview}}
                </div>
                <div v-else style="font-style: italic">
                    К сожалению, описания к данному фильму нет.
                </div>
            </div>

            <div v-if="!isSearch"
                 class="movie_buttons"
            >
                <div class="movie_watched">
                    <custom-button @click="moviesStore.toggleIsWatchedMovie(movie.id)"
                                   :class="`${movie.isWatched ? 'button_watched' : 'button_unwatched'}`"
                    >
                        <span v-if="!movie.isWatched">Непросмотрено</span>
                        <span v-else>Просмотрено</span>
                    </custom-button>
                </div>
                <div class="movie_delete">
                    <custom-button @click="moviesStore.deleteMovie(movie.id)">
                        Удалить
                    </custom-button>
                </div>
            </div>
            <div v-else
                 class="movie_buttons"
            >
                <div class="movie_watched">
                    <custom-button @click="searchStore.addToFavorites(movie)"
                                   :class="`${moviesStore.movies.some(m => m.id === movie.id) ? 'added_button' : 'add_button'}`"
                    >
<!--                        Добавить-->
                        <span v-if="moviesStore.movies.some(m => m.id === movie.id)"
                              class="added_button"
                        >
                            Добавлено
                        </span>
                        <span v-else>Добавить</span>
                    </custom-button>
                </div>
<!--                <div v-if="searchStore.isEqual">{{movie.addedError}}</div>-->
            </div>
        </div>
    </div>
</template>

<script setup>
import CustomButton from '@/shared/ui/CustomUI/CustomButton.vue'
import {useMoviesStore} from '@/pinia/moviesStore'
import {useSearchStore} from '@/pinia/searchStore'

const moviesStore = useMoviesStore()
const searchStore = useSearchStore()

const props = defineProps({
    movie: {
        type: Object,
        required: true,
        default: () => {}
    },
    isSearch: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
.movie_item {
    display: flex;
    gap: 40px;
    padding: 20px;
    width: 600px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    box-shadow: 1px 1px 6px gray;
    background-color: white;

    .movie_poster {
        min-width: 200px;

        img {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    .movie_info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 400px;

        .info_content {
            margin-bottom: 10px;

            .movie_title {
                font-weight: bold;
                font-size: 20px;
                margin-bottom: 10px;
            }
            .movie_overview {
                height: 90px; // 5 строк

                // обрезка строки
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 5; // количество строк
                -webkit-box-orient: vertical;
            }
        }
        .movie_buttons {
            display: flex;
            gap: 10px;
            justify-content: center;

            .movie_watched {
                    .button_watched {
                        background-color: green;

                        &:hover {
                            opacity: 0.7;
                        }
                    }
                    .button_unwatched {
                        background-color: darkslategrey;

                        &:hover {
                            opacity: 0.7;
                        }
                    }
                    .add_button {
                        // styles here
                        background-color: cornflowerblue;

                        &:hover {
                            background-color: darkorange;
                        }
                    }
                .added_button {
                    background-color: darkorange;
                }
            }

            .movie_delete {
                button {
                    opacity: 0.7;
                    background-color: red;

                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }
    }
}
</style>