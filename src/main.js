import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import store from './store'
import vuetify from './plugins/vuetify'
import VueCookies from 'vue-cookies';
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App)
            .use(store)
            .use(vuetify)
            .use(router)
            .use(VueCookies)
            .mount('#app')

app.config.productionTip = false;