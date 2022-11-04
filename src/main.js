import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSession from 'vue-session'

var sessionOptions = {
  persist: true
}

createApp(App).use(store).use(router).use(VueSession, sessionOptions).mount('#app')
