import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from '@/store'

// Layouts
import AppLayout from '@/layouts/AppLayout.vue'

// Views
import DashboardView from '@/views/DashboardView.vue'
import ProgramView from '@/views/ProgramView.vue'
import WeekView from '@/views/WeekView.vue'
import DayView from '@/views/DayView.vue'
import ExerciseView from '@/views/ExerciseView.vue'
import ProgressView from '@/views/ProgressView.vue'
import SettingsView from '@/views/SettingsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: DashboardView,
        meta: { title: 'Tableau de bord' }
      },
      {
        path: '/programme',
        name: 'Program',
        component: ProgramView,
        meta: { title: 'Mon Programme' }
      },
      {
        path: '/semaine/:week',
        name: 'Week',
        component: WeekView,
        props: true,
        meta: { title: 'Semaine' }
      },
      {
        path: '/semaine/:week/jour/:day',
        name: 'Day',
        component: DayView,
        props: true,
        meta: { title: 'Journée' }
      },
      {
        path: '/exercice/:slug',
        name: 'Exercise',
        component: ExerciseView,
        props: true,
        meta: { title: 'Détails Exercice' }
      },
      {
        path: '/progression',
        name: 'Progress',
        component: ProgressView,
        meta: { title: 'Ma Progression' }
      },
      {
        path: '/parametres',
        name: 'Settings',
        component: SettingsView,
        meta: { title: 'Paramètres' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: { title: 'Page non trouvée' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  const store = useStore()
  
  // Set document title
  document.title = to.meta.title ? `${to.meta.title} - Sport Tracker` : 'Sport Tracker'
  
  // Show loading state
  if (!store.state.appLoaded && to.name !== 'NotFound') {
    store.commit('SET_LOADING', true)
  }
  
  next()
})

export default router
