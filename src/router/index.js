import { createRouter, createWebHistory } from 'vue-router';

// Importation des vues
import HomeView from '@/views/HomeView.vue';
import WeekView from '@/views/WeekView.vue';
import DayView from '@/views/DayView.vue';
import ExerciseDetailView from '@/views/ExerciseDetailView.vue';
import ProfileView from '@/views/ProfileView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Accueil - Programme d\'Entraînement',
      requiresAuth: false
    }
  },
  {
    path: '/weeks',
    name: 'Weeks',
    component: WeekView,
    meta: {
      title: 'Semaines - Programme d\'Entraînement',
      requiresAuth: false
    }
  },
  {
    path: '/week/:weekIndex',
    name: 'WeekDetail',
    component: WeekView,
    props: route => ({ 
      weekIndex: parseInt(route.params.weekIndex) 
    }),
    meta: {
      title: 'Détail Semaine - Programme d\'Entraînement',
      requiresAuth: false
    }
  },
  {
    path: '/day/:weekIndex/:dayIndex',
    name: 'DayDetail',
    component: DayView,
    props: route => ({ 
      weekIndex: parseInt(route.params.weekIndex),
      dayIndex: parseInt(route.params.dayIndex)
    }),
    meta: {
      title: 'Journée - Programme d\'Entraînement',
      requiresAuth: false
    }
  },
  {
    path: '/exercise/:slug',
    name: 'ExerciseDetail',
    component: ExerciseDetailView,
    props: true,
    meta: {
      title: 'Détail Exercice - Programme d\'Entraînement',
      requiresAuth: false
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    meta: {
      title: 'Profil - Programme d\'Entraînement',
      requiresAuth: false
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: 'Page Non Trouvée',
      requiresAuth: false
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// Navigation guard pour le titre de la page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Programme d\'Entraînement';
  next();
});

export default router;
