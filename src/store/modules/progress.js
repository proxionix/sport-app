export default {
  namespaced: true,
  
  state: () => ({
    stats: {
      // Valeurs initiales du programme
      initialWeight: 83,
      initialChestSize: 105,
      initialArmSize: 36,
      initialWaistSize: 88,
      initialPullUpsMax: 5,
      initialBenchPressMax: 60,
      initialEnduranceRounds: 4,
      
      // Valeurs actuelles (mises à jour par l'utilisateur)
      currentWeight: 83,
      currentChestSize: 105,
      currentArmSize: 36,
      currentWaistSize: 88,
      currentPullUpsMax: 5,
      currentBenchPressMax: 60,
      currentEnduranceRounds: 4,
      
      // Historique des mesures (pour les graphiques)
      weightHistory: [{ date: new Date().toISOString(), value: 83 }],
      chestSizeHistory: [{ date: new Date().toISOString(), value: 105 }],
      armSizeHistory: [{ date: new Date().toISOString(), value: 36 }],
      waistSizeHistory: [{ date: new Date().toISOString(), value: 88 }],
      pullUpsMaxHistory: [{ date: new Date().toISOString(), value: 5 }],
      benchPressMaxHistory: [{ date: new Date().toISOString(), value: 60 }],
      enduranceRoundsHistory: [{ date: new Date().toISOString(), value: 4 }]
    },
    
    // Notes personnelles par semaine et par jour
    notes: {
      // Format: "weekIndex-dayIndex": "note text"
    },
    
    // Date cible du programme
    targetDate: '2025-07-13',
    
    // Objectifs cibles
    targetStats: {
      weight: [78, 80],
      chestSize: [108, 110],
      armSize: [39, 40],
      waistSize: [80, 82],
      pullUpsMax: [12, 15],
      benchPressMax: [85, 90],
      enduranceRounds: [8, 10]
    }
  }),
  
  getters: {
    // Récupération des stats actuelles
    getCurrentStats: state => state.stats,
    
    // Calcul de la progression par rapport aux objectifs
    getWeightProgress: state => {
      const current = state.stats.currentWeight;
      const initial = state.stats.initialWeight;
      const [targetMin, targetMax] = state.targetStats.weight;
      
      // Si l'objectif est de perdre du poids
      if (initial > targetMax) {
        const totalToLose = initial - targetMax;
        const lost = initial - current;
        return Math.min(100, Math.max(0, Math.round((lost / totalToLose) * 100)));
      } 
      // Si l'objectif est de prendre du poids
      else if (initial < targetMin) {
        const totalToGain = targetMin - initial;
        const gained = current - initial;
        return Math.min(100, Math.max(0, Math.round((gained / totalToGain) * 100)));
      }
      // Si le poids est déjà dans la plage cible
      return 100;
    },
    
    // Fonction générique pour calculer la progression d'une métrique
    getStatProgress: (state) => (statName) => {
      const current = state.stats[`current${statName}`];
      const initial = state.stats[`initial${statName}`];
      const [targetMin, targetMax] = state.targetStats[statName.charAt(0).toLowerCase() + statName.slice(1)];
      
      // Si l'objectif est de réduire (comme la taille de la taille)
      if (statName === 'WaistSize') {
        const totalToLose = initial - targetMin;
        const lost = initial - current;
        return Math.min(100, Math.max(0, Math.round((lost / totalToLose) * 100)));
      }
      // Pour les autres métriques où l'objectif est d'augmenter
      else {
        const totalToGain = targetMin - initial;
        const gained = current - initial;
        return Math.min(100, Math.max(0, Math.round((gained / totalToGain) * 100)));
      }
    },
    
    // Récupérer toutes les progressions
    getAllProgressStats: (state, getters) => {
      return {
        weight: getters.getWeightProgress,
        chestSize: getters.getStatProgress('ChestSize'),
        armSize: getters.getStatProgress('ArmSize'),
        waistSize: getters.getStatProgress('WaistSize'),
        pullUpsMax: getters.getStatProgress('PullUpsMax'),
        benchPressMax: getters.getStatProgress('BenchPressMax'),
        enduranceRounds: getters.getStatProgress('EnduranceRounds')
      };
    },
    
    // Obtenir l'historique d'une métrique pour les graphiques
    getStatHistory: (state) => (statName) => {
      return state.stats[`${statName}History`] || [];
    },
    
    // Obtenir les notes d'un jour spécifique
    getDayNotes: (state) => (weekIndex, dayIndex) => {
      const key = `${weekIndex}-${dayIndex}`;
      return state.notes[key] || '';
    },
    
    // Nombre de jours restants jusqu'à la date cible
    getDaysRemaining: (state) => {
      const today = new Date();
      const targetDate = new Date(state.targetDate);
      const diffTime = targetDate - today;
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },
    
    // Pourcentage de temps écoulé dans le programme
    getTimeProgress: (state, getters) => {
      // Total de 12 semaines = 84 jours
      const totalDays = 84;
      const daysRemaining = getters.getDaysRemaining;
      const daysElapsed = totalDays - daysRemaining;
      
      return Math.min(100, Math.max(0, Math.round((daysElapsed / totalDays) * 100)));
    }
  },
  
  mutations: {
    UPDATE_CURRENT_STAT(state, { statName, value }) {
      state.stats[`current${statName}`] = value;
    },
    
    ADD_STAT_HISTORY(state, { statName, value }) {
      state.stats[`${statName}History`].push({
        date: new Date().toISOString(),
        value
      });
    },
    
    SET_DAY_NOTES(state, { weekIndex, dayIndex, text }) {
      const key = `${weekIndex}-${dayIndex}`;
      state.notes[key] = text;
    },
    
    LOAD_SAVED_PROGRESS(state, savedData) {
      if (savedData && savedData.stats) {
        state.stats = savedData.stats;
      }
      
      if (savedData && savedData.notes) {
        state.notes = savedData.notes;
      }
    }
  },
  
  actions: {
    updateStat({ commit, state }, { statName, value }) {
      // Vérifier que la statistique existe
      if (typeof state.stats[`current${statName}`] !== 'undefined') {
        commit('UPDATE_CURRENT_STAT', { statName, value });
        commit('ADD_STAT_HISTORY', { statName: `${statName.charAt(0).toLowerCase() + statName.slice(1)}History`, value });
      }
    },
    
    updateDayNotes({ commit }, { weekIndex, dayIndex, text }) {
      commit('SET_DAY_NOTES', { weekIndex, dayIndex, text });
    },
    
    loadSavedProgress({ commit }, savedData) {
      commit('LOAD_SAVED_PROGRESS', savedData);
    }
  }
};
