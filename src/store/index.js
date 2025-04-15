import { createStore } from 'vuex';
import programModule from './modules/program';
import progressModule from './modules/progress';
import userModule from './modules/user';

// Création du store avec les modules
const store = createStore({
  modules: {
    program: programModule,
    progress: progressModule,
    user: userModule
  },
  
  // État global partagé entre les modules
  state: {
    appReady: false,
    version: '1.0.0',
    lastUpdated: new Date().toISOString()
  },
  
  getters: {
    getAppReady: state => state.appReady,
    getVersion: state => state.version,
    getLastUpdated: state => new Date(state.lastUpdated).toLocaleDateString()
  },
  
  mutations: {
    SET_APP_READY(state, value) {
      state.appReady = value;
    },
    UPDATE_TIMESTAMP(state) {
      state.lastUpdated = new Date().toISOString();
    }
  },
  
  actions: {
    initializeApp({ commit, dispatch }) {
      // Initialiser les données de l'application
      dispatch('program/initializeCurrentWeekAndDay');
      
      // Charger les données utilisateur si disponibles
      const savedProgress = localStorage.getItem('userProgress');
      if (savedProgress) {
        dispatch('program/loadSavedProgress', JSON.parse(savedProgress));
      }
      
      commit('SET_APP_READY', true);
    },
    
    saveAllData({ state, commit }) {
      // Sauvegarder les données dans le localStorage
      localStorage.setItem('userProgress', JSON.stringify({
        completedExercises: state.program.completedExercises,
        stats: state.progress.stats,
        notes: state.progress.notes
      }));
      
      commit('UPDATE_TIMESTAMP');
    }
  }
});

// Middleware pour sauvegarder automatiquement les changements importants
store.subscribeAction((action) => {
  if (
    action.type.includes('toggle') || 
    action.type.includes('update') || 
    action.type.includes('add') || 
    action.type.includes('remove')
  ) {
    // Délai pour éviter trop d'écritures consécutives
    setTimeout(() => {
      store.dispatch('saveAllData');
    }, 300);
  }
});

export default store;
