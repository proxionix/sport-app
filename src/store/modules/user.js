export default {
  namespaced: true,
  
  state: () => ({
    userPreferences: {
      darkMode: false,
      notifications: true,
      showCompletedExercises: true,
      autoAdvanceToNextDay: true,
      language: 'fr',
      units: {
        weight: 'kg',
        length: 'cm'
      }
    },
    
    // Paramètres d'interface
    uiSettings: {
      sidebarCollapsed: false,
      lastVisitedPage: null,
      exerciseDetailHistory: [], // Historique des derniers exercices consultés
      weekViewMode: 'grid', // 'grid' ou 'list'
      selectedTheme: 'default' // 'default', 'dark', 'high-contrast', etc.
    }
  }),
  
  getters: {
    getUserPreferences: state => state.userPreferences,
    
    getUiSettings: state => state.uiSettings,
    
    isDarkMode: state => state.userPreferences.darkMode,
    
    getWeightUnit: state => state.userPreferences.units.weight,
    
    getLengthUnit: state => state.userPreferences.units.length,
    
    getLastVisitedPage: state => state.uiSettings.lastVisitedPage,
    
    getRecentlyViewedExercises: state => state.uiSettings.exerciseDetailHistory.slice(0, 5),
    
    isSidebarCollapsed: state => state.uiSettings.sidebarCollapsed,
    
    getSelectedTheme: state => state.uiSettings.selectedTheme
  },
  
  mutations: {
    SET_PREFERENCE(state, { key, value }) {
      state.userPreferences[key] = value;
    },
    
    SET_UNIT(state, { type, value }) {
      state.userPreferences.units[type] = value;
    },
    
    SET_UI_SETTING(state, { key, value }) {
      state.uiSettings[key] = value;
    },
    
    TOGGLE_DARK_MODE(state) {
      state.userPreferences.darkMode = !state.userPreferences.darkMode;
    },
    
    TOGGLE_SIDEBAR(state) {
      state.uiSettings.sidebarCollapsed = !state.uiSettings.sidebarCollapsed;
    },
    
    UPDATE_LAST_VISITED_PAGE(state, route) {
      state.uiSettings.lastVisitedPage = route;
    },
    
    ADD_TO_EXERCISE_HISTORY(state, exerciseSlug) {
      // Éviter les doublons
      const index = state.uiSettings.exerciseDetailHistory.findIndex(item => item === exerciseSlug);
      if (index !== -1) {
        state.uiSettings.exerciseDetailHistory.splice(index, 1);
      }
      
      // Ajouter en tête de liste
      state.uiSettings.exerciseDetailHistory.unshift(exerciseSlug);
      
      // Limiter la taille de l'historique
      if (state.uiSettings.exerciseDetailHistory.length > 10) {
        state.uiSettings.exerciseDetailHistory.pop();
      }
    },
    
    LOAD_USER_SETTINGS(state, settings) {
      if (settings.userPreferences) {
        state.userPreferences = { ...state.userPreferences, ...settings.userPreferences };
      }
      
      if (settings.uiSettings) {
        state.uiSettings = { ...state.uiSettings, ...settings.uiSettings };
      }
    }
  },
  
  actions: {
    setPreference({ commit }, { key, value }) {
      commit('SET_PREFERENCE', { key, value });
    },
    
    setUnit({ commit }, { type, value }) {
      commit('SET_UNIT', { type, value });
    },
    
    setUiSetting({ commit }, { key, value }) {
      commit('SET_UI_SETTING', { key, value });
    },
    
    toggleDarkMode({ commit }) {
      commit('TOGGLE_DARK_MODE');
    },
    
    toggleSidebar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
    
    trackPageVisit({ commit }, route) {
      commit('UPDATE_LAST_VISITED_PAGE', route);
    },
    
    trackExerciseView({ commit }, exerciseSlug) {
      commit('ADD_TO_EXERCISE_HISTORY', exerciseSlug);
    },
    
    loadUserSettings({ commit }) {
      const savedSettings = localStorage.getItem('userSettings');
      if (savedSettings) {
        commit('LOAD_USER_SETTINGS', JSON.parse(savedSettings));
      }
    },
    
    saveUserSettings({ state }) {
      localStorage.setItem('userSettings', JSON.stringify({
        userPreferences: state.userPreferences,
        uiSettings: state.uiSettings
      }));
    }
  }
};
