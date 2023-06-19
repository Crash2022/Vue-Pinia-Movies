<template>
    <div class="content">
        <header>Favourite Movies</header>
        <div class="movies">
            {{moviesStore.movies}}
        </div>
    </div>
</template>

<script setup>
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
.movies {
    padding: 20px;
}
</style>