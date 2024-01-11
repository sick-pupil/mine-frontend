import '@style/main.scss'

import { createApp, ref } from 'vue'
import App from '@src/App.vue'
import { createPinia } from 'pinia'
import router from '@router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
