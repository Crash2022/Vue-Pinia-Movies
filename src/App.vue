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

/*---------------scrollbar---------------*/

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: cornflowerblue;
}

::-webkit-scrollbar-thumb:hover {
    background-color: grey;
    opacity: 0.5;
}

.app::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

/* Track */
.app::-webkit-scrollbar-track {
    background: #ffffff;
}

/* Handle */
.app::-webkit-scrollbar-thumb {
    background: cornflowerblue;
}

/* Handle on hover */
.app::-webkit-scrollbar-thumb:hover {
    border: 2px solid cornflowerblue;
}
</style>