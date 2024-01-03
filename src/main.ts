import '@style/main.scss'

import { createApp } from 'vue'
import App from '@src/App.vue'
import { createPinia } from 'pinia'
import router from '@router'
import {create, 
  FormInst,
  FormItemInst,
  FormItemRule,
  FormRules
} from 'naive-ui'

const app = createApp(App)

const naive = create({
  components: [
    //表单
    FormInst,
    FormItemInst,
    FormRules,
    FormItemRule,
  ]
})

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
