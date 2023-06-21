<template>
    <div class="search_wrapper">
        <form @submit.prevent="searchStore.getMovies(searchQuery)" class="search_form">
            <div>
                <custom-input v-model="searchQuery"
                              type="text"
                              placeholder="Поиск фильма"
                              v-focus
                />
            </div>
            <div>
                <custom-button @click="searchStore.getMovies(searchQuery)"
                               class="search_button"
                >
                    найти
                </custom-button>
            </div>
        </form>

        <div v-if="searchStore.isLoading"
             class="loader"
        >
            <roller-loader/>
        </div>
        <div v-else class="searchedMovies">
            <div class="search_length">
                Найдено: {{searchStore.searchedMovies.length}} фильмов
            </div>
            <movie-item v-for="mov in searchStore.searchedMovies"
                        :key="mov.id"
                        :movie="mov"
                        :is-search="true"
            />
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useSearchStore} from '@/pinia/searchStore'
import CustomButton from '@/shared/ui/CustomUI/CustomButton.vue'
import RollerLoader from '@/shared/ui/CustomUI/RollerLoader.vue'
import MovieItem from '@/components/MovieItem.vue'

const searchStore = useSearchStore()
const searchQuery = ref('')
</script>

<style lang="scss" scoped>
.search_wrapper {
    min-height: calc(100vh - 240px);
    height: 100%;
    margin-bottom: 30px;

    .search_form {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin-bottom: 20px;

        input {
            width: 300px;
        }
        .search_button {
            height: 50px;
            background-color: green;
        }
    }
    .loader {
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }
    .searchedMovies {
        .search_length {
            text-align: center;
        }
        > div {
            margin-bottom: 10px;
        }
    }
}
</style>