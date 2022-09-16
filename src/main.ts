import { createApp } from 'vue'
// Import store
import {setupStore} from '/@/store'


import App from './App.vue'
import './assets/tailwind.css'
import {Quasar} from 'quasar'
if(import.meta.env.DEV){
    // Import icon template
    import ('@quasar/extras/material-icons/material-icons.css')
    // Import Quasar css
    import ('quasar/src/css/index.sass')
}

async function bootstrap() {
    const app= createApp(App)
    app.use(Quasar,{
        plugins:{}
    })
    setupStore(app);

    app.mount('#app')

}

bootstrap();