<template>
    <div class="search_wrapper">
        <form @submit.prevent="" class="search_form">
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