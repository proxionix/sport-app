import { createStore } from 'vuex'
import program from '@/data/program'
import userProgress from '@/data/userProgress'

const initialState = {
  user: {
    id: 'usr_001',
    name: 'Jean Dupont',
    email: 'jean@example.com',
    weight: 83,
    height: 180,
    birthDate: '1990-01-01',
    preferences: {
      theme: 'light',
      notifications: true
    }
  },
  program,
  progress: userProgress,
  currentWeek: 1,
  currentDay: 1,
  ui: {
    isLoading: false,
    modals: {
      settings: false,
      exerciseDetails: null
    }
  }
}

export default createStore({
  state: { ...initialState },
  mutations: {
    SET_LOADING(state, payload) {
      state.ui.isLoading = payload
    },
    UPDATE_USER_DATA(state, payload) {
      state.user = { ...state.user, ...payload }
    },
    UPDATE_PROGRESS(state, { week, day, exerciseId, data }) {
      const weekIndex = state.progress.findIndex(w => w.week === week)
      const dayIndex = state.progress[weekIndex].days.findIndex(d => d.day === day)
      const exerciseIndex = state.progress[weekIndex].days[dayIndex].exercises.findIndex(e => e.id === exerciseId)
      
      if (exerciseIndex > -1) {
        state.progress[weekIndex].days[dayIndex].exercises[exerciseIndex] = {
          ...state.progress[weekIndex].days[dayIndex].exercises[exerciseIndex],
          ...data
        }
      }
    },
    TOGGLE_MODAL(state, { modal, value }) {
      state.ui.modals[modal] = value !== undefined ? value : !state.ui.modals[modal]
    }
  },
  actions: {
    async fetchInitialData({ commit }) {
      commit('SET_LOADING', true)
      // Simulate API call
      setTimeout(() => {
        commit('SET_LOADING', false)
      }, 1000)
    },
    updateExerciseProgress({ commit }, payload) {
      commit('UPDATE_PROGRESS', payload)
    }
  },
  getters: {
    getCurrentWeek: (state) => state.program.weeks.find(w => w.weekNumber === state.currentWeek),
    getCompletedExercises: (state) => {
      return state.progress
        .flatMap(w => w.days)
        .flatMap(d => d.exercises)
        .filter(e => e.completed).length
    },
    getTotalExercises: (state) => {
      return state.program.weeks
        .flatMap(w => w.days)
        .flatMap(d => d.exercises).length
    }
  }
})
