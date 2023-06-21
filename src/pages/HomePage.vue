<template>
    <div class="home_page">
        <div class="title">
            <h1>Добро пожаловать в приложение</h1>
            <h1>"Любимые фильмы"</h1>
        </div>
        <div class="main_image">
            <img :src="MainImage" alt="main-image">
        </div>
    </div>
</template>

<script>
import MainImage from '@/shared/assets/main-image-01.jpg'
export default {
    // импорт изображения как объект
    data: function () {
        return {
            MainImage
        }
    }
}
</script>

<style lang="scss" scoped>
.home_page {
    padding: 20px;
    height: calc(100vh - 50px);

    .title {
        margin: 30px 0;
        text-align: center;

        h1 {
            line-height: 50px;
        }
    }
    .main_image {
        //width: 100%;
        text-align: center;

        img {
            // вариант с оригинальным размером изображения
            //height: auto;
            //max-width: 100%;

            height: auto;
            max-width: 600px;
            width: 100%;
        }
    }
}
</style>