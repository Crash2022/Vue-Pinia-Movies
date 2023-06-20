<template>
    <navbar/>
    <div class="app">
<!--        <home-page/>-->
<!--        <movies-page/>-->
        <router-view></router-view>
    </div>
<!--    <nav>-->
<!--        <router-link to="/">Home</router-link>-->
<!--        |-->
<!--        <router-link to="/about">About</router-link>-->
<!--    </nav>-->
<!--    <router-view/>-->
</template>

<script setup lang="ts">
// import MoviesPage from '@/pages/MoviesPage.vue'
</script>

<style lang="scss">
//#app {
//    font-family: Avenir, Helvetica, Arial, sans-serif;
//    -webkit-font-smoothing: antialiased;
//    -moz-osx-font-smoothing: grayscale;
//    text-align: center;
//    color: #2c3e50;
//}
//
//nav {
//    padding: 30px;
//
//    a {
//        font-weight: bold;
//        color: #2c3e50;
//
//        &.router-link-exact-active {
//            color: #42b983;
//        }
//    }
//}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 50px);
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    border: 1px solid black;
    //overflow-x: hidden;
}
</style>