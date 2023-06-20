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
        <div v-if="searchStore.isLoading" class="loader">
            <roller-loader/>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useSearchStore} from '@/pinia/searchStore'
import CustomButton from '@/shared/ui/CustomUI/CustomButton.vue'
import RollerLoader from '@/shared/ui/CustomUI/RollerLoader.vue';

const searchStore=useSearchStore()
const searchQuery = ref('')
</script>

<style lang="scss" scoped>
.search_wrapper {
    height: calc(100vh - 210px);

    .search_form {
        display: flex;
        align-items: center;
        gap: 20px;

        input {
            width: 300px;
        }
        .search_button {
            height: 50px;
        }
    }
    .loader {
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }
}
</style>