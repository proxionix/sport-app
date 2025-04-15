import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Importation des icons FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faHome, faCalendarWeek, faCalendarDay, faDumbbell, faBoxing,
  faChevronLeft, faChevronRight, faCheck, faTimes,
  faChartLine, faUserCircle, faInfoCircle, faAngleDown, 
  faAngleUp, faArrowLeft, faArrowRight, faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Ajout des icônes à la bibliothèque
library.add(
  faHome, faCalendarWeek, faCalendarDay, faDumbbell, faBoxing,
  faChevronLeft, faChevronRight, faCheck, faTimes,
  faChartLine, faUserCircle, faInfoCircle, faAngleDown, 
  faAngleUp, faArrowLeft, faArrowRight, faCheckCircle
);

// Création et configuration de l'application
const app = createApp(App);

// Enregistrement des composants globaux
app.component('FontAwesomeIcon', FontAwesomeIcon);

// Utilisation des plugins
app.use(router);
app.use(store);

// Directives personnalisées
app.directive('click-outside', {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function(event) {
      // Si l'élément cliqué n'est pas l'élément avec la directive ou un de ses enfants
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
});

// Montage de l'application
app.mount('#app');

// Gestion du service worker pour PWA (si nécessaire)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(error => {
      console.log('SW registration failed: ', error);
    });
  });
}
