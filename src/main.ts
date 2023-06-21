// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {createPinia} from 'pinia'
import components from '@/shared/ui/'
import directives from '@/shared/directives/index'
// import VFocus from '@/shared/directives/VFocus'

const app = createApp(App)

// глобальный импорт компонент
components.forEach((comp: any) => {
    app.component(comp.name, comp)
})

directives.forEach((dir: any) => {
    app.directive(dir.name, dir)
})
// app.directive('focus', VFocus)

app.use(createPinia())
   .use(store)
   .use(router)
   .mount('#app')
