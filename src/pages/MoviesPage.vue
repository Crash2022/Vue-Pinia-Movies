<template>
    <div class="content">
        <header>
            <h2>Любимые фильмы</h2>
        </header>

        <div class="tabs">
            <custom-button @click="moviesStore.setActiveTab('search')"
                           :class="['tabs_btn', {btn_active: moviesStore.activeTab === 'search'}]"
            >
                Поиск
            </custom-button>
            <custom-button @click="toggleTab('movies')"
                           :class="['tabs_btn', {btn_active: moviesStore.activeTab === 'movies'}]"
            >
                Избранное
            </custom-button>
        </div>

        <div class="moviesList_wrapper" v-if="moviesStore.activeTab === 'movies'">
            <div class="moviesList">
                <div class="moviesList_title">
                    Просмотренные фильмы ({{moviesStore.watchedMovies.length}})
                </div>
                <movie-item v-for="mov in moviesStore.watchedMovies"
                            :key="mov.id"
                            :movie="mov"
                />
            </div>

            <div class="moviesList">
                <div class="moviesList_title">
                    Все фильмы ({{moviesStore.movies.length}})
                </div>
                <movie-item v-for="mov in moviesStore.movies"
                            :key="mov.id"
                            :movie="mov"
                />
            </div>
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
import CustomButton from "@/shared/ui/CustomUI/CustomButton.vue"

const moviesStore = useMoviesStore()

// другой вариант вызова экшена в шаблоне
const toggleTab = (activeTab) => {
    moviesStore.setActiveTab(activeTab)
}
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
        width: 200px;

        &:hover {
            background-color: darkorange;
        }
    }

    .tabs_btn {
        // default styles here
        background-color: cornflowerblue;
    }
    .btn_active {
        background-color: darkorange;
    }
}
.moviesList_wrapper {
    .moviesList {
        margin-bottom: 30px;

        .moviesList_title {
            text-align: center;
            margin-bottom: 20px;
            text-decoration: underline;
        }
        > div {
            margin-bottom: 10px;
        }
    }
}
</style>