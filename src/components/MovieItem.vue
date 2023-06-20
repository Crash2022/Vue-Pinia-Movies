<template>
    <div class="movie_item">
        <div v-if="movie.poster_path" class="movie_poster">
            <img :src="movie.poster_path" :alt="movie.original_title">
        </div>
        <div v-else class="movie_poster">
            <img src="@/shared/assets/no-image.jpg" alt="movie_poster">
        </div>

        <div class="movie_info">
            <div class="info_content">
                <div class="movie_title">{{movie.original_title}}</div>
                <div class="movie_overview">{{movie.overview}}</div>
            </div>
            <div class="movie_buttons">
                <div class="movie_watched">
                    <custom-button @click=""
                                   :class="`${movie.isWatched ? 'button_watched' : 'button_unwatched'}`"
                    >
                        <span v-if="!movie.isWatched">Непросмотрено</span>
                        <span v-else>Просмотрено</span>
                    </custom-button>
                </div>
                <div class="movie_delete">
                    <custom-button @click="">
                        Удалить
                    </custom-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CustomButton from '@/shared/ui/CustomUI/CustomButton.vue';

const props = defineProps({
    movie: {
        type: Object,
        required: true,
        default: () => {}
    }
})
</script>

<style lang="scss" scoped>
.movie_item {
    display: flex;
    gap: 40px;
    padding: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    box-shadow: 1px 1px 6px gray;

    .movie_poster {
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

        .info_content {
            .movie_title {
                font-weight: bold;
                font-size: 20px;
                margin-bottom: 10px;
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