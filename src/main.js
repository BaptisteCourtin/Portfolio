import './styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // icon

// language
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import global_fr from './translation/fr/global_fr.json'
import global_en from './translation/en/global_en.json'

// ---

i18next.init({
  lng: 'fr', // langue de base
  resources: {
    fr: { translation: global_fr },
    en: { translation: global_en }
  }
})

// ---

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(I18NextVue, { i18next })

app.use(router)

app.mount('#app')
