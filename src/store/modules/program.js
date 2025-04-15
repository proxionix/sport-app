import { fullProgram } from '@/data/program';

export default {
  namespaced: true,
  
  state: () => ({
    program: JSON.parse(JSON.stringify(fullProgram)), // Copie profonde pour éviter les mutations accidentelles
    currentWeekIndex: 0,
    currentDayIndex: 0,
    currentDate: new Date().toISOString().split('T')[0],
    completedExercises: {} // Format: { "weekIndex-dayIndex-exerciseIndex": true }
  }),
  
  getters: {
    getAllWeeks: state => state.program.weeks,
    
    getCurrentWeek: state => state.program.weeks[state.currentWeekIndex] || null,
    
    getCurrentDay: state => {
      const currentWeek = state.program.weeks[state.currentWeekIndex];
      return currentWeek ? currentWeek.days[state.currentDayIndex] || null : null;
    },
    
    getExerciseDetail: state => (slug) => {
      return state.program.exerciseDetails[slug] || null;
    },
    
    getWeekByIndex: state => (weekIndex) => {
      return state.program.weeks[weekIndex] || null;
    },
    
    getDayByIndices: state => (weekIndex, dayIndex) => {
      const week = state.program.weeks[weekIndex];
      return week ? week.days[dayIndex] || null : null;
    },
    
    getWeekProgress: state => (weekIndex) => {
      const week = state.program.weeks[weekIndex];
      if (!week) return 0;
      
      let totalExercises = 0;
      let completedExercises = 0;
      
      week.days.forEach((day, dayIndex) => {
        day.exercises.forEach((exercise, exerciseIndex) => {
          totalExercises++;
          const key = `${weekIndex}-${dayIndex}-${exerciseIndex}`;
          if (state.completedExercises[key]) {
            completedExercises++;
          }
        });
      });
      
      return totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
    },
    
    getDayProgress: state => (weekIndex, dayIndex) => {
      const day = state.program.weeks[weekIndex]?.days[dayIndex];
      if (!day || !day.exercises) return 0;
      
      let completedExercises = 0;
      
      day.exercises.forEach((_, exerciseIndex) => {
        const key = `${weekIndex}-${dayIndex}-${exerciseIndex}`;
        if (state.completedExercises[key]) {
          completedExercises++;
        }
      });
      
      return day.exercises.length > 0 
        ? Math.round((completedExercises / day.exercises.length) * 100) 
        : 0;
    },
    
    getOverallProgress: state => {
      let totalExercises = 0;
      let completedExercises = 0;
      
      state.program.weeks.forEach((week, weekIndex) => {
        week.days.forEach((day, dayIndex) => {
          day.exercises.forEach((_, exerciseIndex) => {
            totalExercises++;
            const key = `${weekIndex}-${dayIndex}-${exerciseIndex}`;
            if (state.completedExercises[key]) {
              completedExercises++;
            }
          });
        });
      });
      
      return totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
    },
    
    getCurrentWeekByDate: state => {
      const today = new Date(state.currentDate);
      
      return state.program.weeks.findIndex(week => {
        const startDate = new Date(week.dateRange.start);
        const endDate = new Date(week.dateRange.end);
        return today >= startDate && today <= endDate;
      });
    },
    
    getCurrentDayByDate: state => {
      const today = new Date(state.currentDate);
      const dayOfWeek = today.getDay();
      
      // Convertir de 0-6 (dimanche-samedi) à 0-6 (lundi-dimanche)
      return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    },
    
    isExerciseCompleted: state => (weekIndex, dayIndex, exerciseIndex) => {
      const key = `${weekIndex}-${dayIndex}-${exerciseIndex}`;
      return !!state.completedExercises[key];
    }
  },
  
  mutations: {
    SET_CURRENT_WEEK(state, weekIndex) {
      if (weekIndex >= 0 && weekIndex < state.program.weeks.length) {
        state.currentWeekIndex = weekIndex;
      }
    },
    
    SET_CURRENT_DAY(state, dayIndex) {
      const currentWeek = state.program.weeks[state.currentWeekIndex];
      if (currentWeek && dayIndex >= 0 && dayIndex < currentWeek.days.length) {
        state.currentDayIndex = dayIndex;
      }
    },
    
    SET_CURRENT_DATE(state, date) {
      state.currentDate = date;
    },
    
    TOGGLE_EXERCISE_COMPLETION(state, { weekIndex, dayIndex, exerciseIndex }) {
      const key = `${weekIndex}-${dayIndex}-${exerciseIndex}`;
      state.completedExercises[key] = !state.completedExercises[key];
      
      if (!state.completedExercises[key]) {
        delete state.completedExercises[key];
      }
    },
    
    SET_EXERCISE_COMPLETION(state, { weekIndex, dayIndex, exerciseIndex, completed }) {
      const key = `${weekIndex}-${dayIndex}-${exerciseIndex}`;
      
      if (completed) {
        state.completedExercises[key] = true;
      } else if (state.completedExercises[key]) {
        delete state.completedExercises[key];
      }
    },
    
    RESET_DAY_COMPLETION(state, { weekIndex, dayIndex }) {
      Object.keys(state.completedExercises).forEach(key => {
        if (key.startsWith(`${weekIndex}-${dayIndex}-`)) {
          delete state.completedExercises[key];
        }
      });
    },
    
    RESET_WEEK_COMPLETION(state, weekIndex) {
      Object.keys(state.completedExercises).forEach(key => {
        if (key.startsWith(`${weekIndex}-`)) {
          delete state.completedExercises[key];
        }
      });
    },
    
    RESET_ALL_COMPLETION(state) {
      state.completedExercises = {};
    },
    
    LOAD_SAVED_PROGRESS(state, savedData) {
      if (savedData && savedData.completedExercises) {
        state.completedExercises = savedData.completedExercises;
      }
    }
  },
  
  actions: {
    initializeCurrentWeekAndDay({ commit, getters }) {
      const currentWeekIndex = getters.getCurrentWeekByDate;
      const currentDayIndex = getters.getCurrentDayByDate;
      
      if (currentWeekIndex >= 0) {
        commit('SET_CURRENT_WEEK', currentWeekIndex);
      }
      
      if (currentDayIndex >= 0) {
        commit('SET_CURRENT_DAY', currentDayIndex);
      }
    },
    
    selectWeek({ commit }, weekIndex) {
      commit('SET_CURRENT_WEEK', weekIndex);
    },
    
    selectDay({ commit }, dayIndex) {
      commit('SET_CURRENT_DAY', dayIndex);
    },
    
    setCurrentDate({ commit }, date) {
      commit('SET_CURRENT_DATE', date);
    },
    
    toggleExerciseCompletion({ commit }, { weekIndex, dayIndex, exerciseIndex }) {
      commit('TOGGLE_EXERCISE_COMPLETION', { weekIndex, dayIndex, exerciseIndex });
    },
    
    markExerciseAsCompleted({ commit }, { weekIndex, dayIndex, exerciseIndex }) {
      commit('SET_EXERCISE_COMPLETION', { 
        weekIndex, 
        dayIndex, 
        exerciseIndex, 
        completed: true 
      });
    },
    
    markExerciseAsIncomplete({ commit }, { weekIndex, dayIndex, exerciseIndex }) {
      commit('SET_EXERCISE_COMPLETION', { 
        weekIndex, 
        dayIndex, 
        exerciseIndex, 
        completed: false 
      });
    },
    
    resetDayCompletion({ commit }, { weekIndex, dayIndex }) {
      commit('RESET_DAY_COMPLETION', { weekIndex, dayIndex });
    },
    
    resetWeekCompletion({ commit }, weekIndex) {
      commit('RESET_WEEK_COMPLETION', weekIndex);
    },
    
    resetAllCompletion({ commit }) {
      commit('RESET_ALL_COMPLETION');
    },
    
    loadSavedProgress({ commit }, savedData) {
      commit('LOAD_SAVED_PROGRESS', savedData);
    }
  }
};
