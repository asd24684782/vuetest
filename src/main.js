import { createApp } from 'vue'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(VueAxios, axios)
  .use(store)
  .mount('#app')
