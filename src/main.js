import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/main.css'
import '@dbetka/vue-material-icons/dist/vue-material-icons.css'
import { materialIcons } from '@dbetka/vue-material-icons'

createApp(App)
  .use(store)
  .use(router)
  .use(materialIcons)
  .mount('#app')
