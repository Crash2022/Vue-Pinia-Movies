<template>
    <div class="content">
        <header>
            <h2>Любимые фильмы</h2>
        </header>

        <div class="tabs">
            <custom-button @click="">
                Поиск
            </custom-button>
            <custom-button @click="">
                Каталог
            </custom-button>
        </div>

        <div class="movies_list" v-if="moviesStore.activeTab === 'movies'">
            <movie-item v-for="mov in moviesStore.movies"
                        :key="mov.id"
                        :movie="mov"
            />
        </div>
        <div v-else>
            <search-movie/>
        </div>
    </div>
</template>

<script setup>
import MovieItem from '@/components/MovieItem.vue'
import SearchMovie from '@/components/SearchMovie.vue'
import {useMoviesStore} from '@/pinia/moviesStore'
import CustomButton from "@/shared/ui/CustomUI/CustomButton.vue";

const moviesStore = useMoviesStore()
</script>

<style lang="scss" scoped>
.content {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
header {
    margin-bottom: 30px;
}
.tabs {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;

    button {
        &:hover {
            background-color: cornflowerblue;
        }
    }
}
.movies_list {
    > div {
        margin-bottom: 10px;
    }
}
</style>