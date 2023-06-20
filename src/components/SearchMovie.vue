<template>
    <div class="search_wrapper">
        <form @submit.prevent="searchStore.getMovies(searchQuery)" class="search_form">
            <custom-input v-model="searchQuery"
                          type="text"
                          placeholder="Поиск фильма"
                          v-focus
            />
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useSearchStore} from '@/pinia/searchStore'

const searchStore=useSearchStore()
const searchQuery = ref('')
</script>

<style lang="scss" scoped>
.search_wrapper {
    height: calc(100vh - 210px);

    .search_form {
        input {
            width: 300px;
            //max-width: 100%;
        }
    }
}
</style>