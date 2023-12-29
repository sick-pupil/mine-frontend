import '@style/main.scss'

import { createApp } from 'vue'
import App from '@src/App.vue'
import { createPinia } from 'pinia'
import router from '@router'
import {create, 
  NButton, 
  NLayout, 
  NSpace, 
  NSwitch, 
  NLayoutHeader, 
  NLayoutContent, 
  NLayoutFooter, 
  NLayoutSider, 
  NMenu
} from 'naive-ui'

const app = createApp(App)

const naive = create({
  components: [
    NButton,
    NSpace,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NLayoutSider,
    NSwitch,
    NMenu
  ]
})

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
