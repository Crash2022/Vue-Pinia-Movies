<template>
    <navbar/>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Google Sans, sans-serif;
}
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 50px);
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    //border: 1px solid black;
    //overflow-x: hidden;
}
</style>