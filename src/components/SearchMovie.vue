<template>
    <form @submit.prevent="" class="search_form">
        <custom-input
                      type="text"
                      placeholder="Поиск фильма"
                      v-focus
        />
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.search_form {
    input {
        width: 300px;
        //max-width: 100%;
    }
}
</style>