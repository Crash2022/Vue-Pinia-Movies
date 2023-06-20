import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import MoviesPage from "@/pages/MoviesPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/movies',
        component: MoviesPage
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../pages/AboutView.vue')
    // }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
