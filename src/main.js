
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import piniaPersistedState from 'pinia-plugin-persistedstate'; // 导入持久化插件（确保这个行是有效的）

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersistedState);
app.use(pinia)
app.use(router)
app.use(ElementPlus)
 
app.mount('#app')