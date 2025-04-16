import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import WeekView from '@/views/WeekView.vue'
import DayView from '@/views/DayView.vue'
import ExerciseDetailView from '@/views/ExerciseDetailView.vue'
import ProfileView from '@/views/ProfileView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/week/:week', name: 'Week', component: WeekView, props: true },
  { path: '/week/:week/:day', name: 'Day', component: DayView, props: true },
  { path: '/exercise/:slug', name: 'ExerciseDetail', component: ExerciseDetailView, props: true },
  { path: '/profile', name: 'Profile', component: ProfileView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
