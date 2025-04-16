import { createStore } from 'vuex'
import program from '@/data/program.js'

export default createStore({
  state: {
    showModal: false,
    user: {
      name: 'Jean Dupont',
      weight: 83,
      chest: 105,
      arm: 36,
      waist: 88
    },
    progress: [],
    program
  },
  mutations: {
    TOGGLE_MODAL(state) {
      state.showModal = !state.showModal
    },
    UPDATE_USER(state, payload) {
      state.user = { ...state.user, ...payload }
    },
    ADD_PROGRESS(state, entry) {
      state.progress.push(entry)
    }
  },
  actions: {
    toggleModal({ commit }) {
      commit('TOGGLE_MODAL')
    },
    updateUser({ commit }, payload) {
      commit('UPDATE_USER', payload)
    },
    addProgress({ commit }, entry) {
      commit('ADD_PROGRESS', entry)
    }
  },
  getters: {
    getWeek: state => weekNumber => state.program.weeks.find(w => w.weekNumber == weekNumber),
    getUser: state => state.user,
    getProgress: state => state.progress
  }
})
