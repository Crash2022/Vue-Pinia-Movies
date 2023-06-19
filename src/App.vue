<template>
    <div class="app">
        App
    </div>
<!--    <nav>-->
<!--        <router-link to="/">Home</router-link>-->
<!--        |-->
<!--        <router-link to="/about">About</router-link>-->
<!--    </nav>-->
<!--    <router-view/>-->
</template>

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
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid black;
    overflow-x: hidden;
}
</style>
