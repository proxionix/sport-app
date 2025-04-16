import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Global components
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import BaseProgress from '@/components/ui/BaseProgress.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faDumbbell, 
  faClock, 
  faFire, 
  faCheck, 
  faCircleCheck, 
  faGear,
  faChartLine,
  faHome,
  faCalendarAlt,
  faRunning,
  faUserCog
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Styles
import '@/assets/css/main.scss'

// Configure Font Awesome
library.add(
  faDumbbell, 
  faClock, 
  faFire, 
  faCheck, 
  faCircleCheck, 
  faGear,
  faChartLine,
  faHome,
  faCalendarAlt,
  faRunning,
  faUserCog
)

const app = createApp(App)

// Plugins
app.use(router)
app.use(store)

// Global components
app.component('BaseButton', BaseButton)
app.component('BaseCard', BaseCard)
app.component('BaseModal', BaseModal)
app.component('BaseProgress', BaseProgress)
app.component('FontAwesomeIcon', FontAwesomeIcon)

// Global properties
app.config.globalProperties.$filters = {
  formatDate(value) {
    return new Date(value).toLocaleDateString('fr-FR')
  },
  capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}

app.mount('#app')
