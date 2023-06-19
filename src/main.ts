import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {createPinia} from 'pinia'
import components from '@/shared/ui/'

const app = createApp(App)

// глобальный импорт компонент
components.forEach((comp: any) => {
    app.component(comp.name, comp)
})

app.use(createPinia())
   .use(store)
   .use(router)
   .mount('#app')
