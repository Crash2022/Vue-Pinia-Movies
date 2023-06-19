<template>
    <div class="movie_item">
        <div class="movie_poster">
            <img src="https://avatars.dzeninfra.ru/get-zen_doc/3362051/pub_5fce0abdf825a128413431d0_5fce84ec0a45a91cf4886d2c/scale_1200" alt="movie-poster">
        </div>
        <div class="movie_info">
            <div class="info_content">
                <div class="movie_title">{{movie.original_title}}</div>
                <div class="movie_overview">{{movie.overview}}</div>
            </div>
            <div class="toggle_movie">Toggle</div>
        </div>
    </div>
</template>

<script setup>
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
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;

    .movie_poster {
        img {
            width: 200px;
        }
    }
    .movie_info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .info_content {
            .movie_title {
                margin-bottom: 10px;
            }
        }
        .toggle_movie {

        }
    }
}
</style>