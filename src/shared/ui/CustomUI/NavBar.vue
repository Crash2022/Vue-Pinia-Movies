<template>
    <div class="navbar_wrapper">
        <div @click="$router.push('/')" class="main_link">
            Главная
        </div>
        <nav class="navbar_links">
            <div class="movies_button">
                <custom-button @click="$router.push('/movies')">Фильмы</custom-button>
            </div>
<!--            <div>-->
<!--                <router-link to="/about">Обо мне</router-link>-->
<!--            </div>-->
        </nav>
    </div>
</template>

<script>
import CustomButton from '@/shared/ui/CustomUI/CustomButton.vue';

export default {
    name: 'navbar',
    components: {CustomButton}
};
</script>

<style lang="scss" scoped>
.navbar_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background-color: orange;
    box-shadow: 2px 2px 4px gray;
    padding: 0 20px;

    .main_link {
        &:hover {
            cursor: pointer;
            color: white;
        }
    }
    .navbar_links {
        display: flex;
        align-items: center;
        gap: 20px;

        .movies_button {
            button {
                background-color: aliceblue;
                color: black;

                &:hover {
                    background-color: cornflowerblue;
                    color: white;
                }
            }
        }
    }
}
</style>