<template>
    <navbar/>
    <div class="app">
        <div class="container">
            <router-view></router-view>
        </div>
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
    width: 100%;
    margin: 0 auto;
    background-color: #f6f6f6;
    //overflow-x: hidden;

    .container {
        //border: 1px solid black;
        width: 100%;
        max-width: 900px;
    }
}
</style>