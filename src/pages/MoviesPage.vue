<template>
    <div class="content">
        <header>Favourite Movies</header>
        <div class="movies_list">
            <movie-item v-for="mov in moviesStore.movies"
                        :key="mov.id"
                        :movie="mov"
            />
        </div>
    </div>
</template>

<script setup>
import MovieItem from '@/components/MovieItem.vue'
import {useMoviesStore} from '@/pinia/moviesStore'

const moviesStore = useMoviesStore()

</script>

<style lang="scss" scoped>
.content {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
header {
    margin-bottom: 20px;
}
.movies_list {
    > div {
        margin-bottom: 10px;
    }
}
</style>