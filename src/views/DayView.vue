<template>
  <div class="day-view-container">
    <div class="navigation-controls">
      <BaseButton 
        icon="arrow-left" 
        variant="outline"
        @click="navigateToPreviousDay" 
        :disabled="!hasPreviousDay"
      />
      <h1>{{ dayTitle }}</h1>
      <BaseButton 
        icon="arrow-right" 
        variant="outline"
        @click="navigateToNextDay" 
        :disabled="!hasNextDay"
      />
    </div>
    
    <div v-if="currentDay" class="day-container">
      <DailyView 
        :day-data="currentDay" 
        :day-index="currentDayIndex" 
        :week-index="currentWeekIndex"
        :date="formattedDate"
        @update-exercise="updateExercise"
        @update-all-exercises="updateAllExercises"
      />
    </div>
    
    <div v-else class="no-day-data">
      <p>Journée non disponible. Veuillez sélectionner une journée valide.</p>
      <BaseButton 
        label="Retour à la semaine" 
        @click="$router.push(`/week/${currentWeekIndex}`)"
        variant="primary"
      />
    </div>
  </div>
</template>

<script>
import { computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { format, addDays } from 'date-fns';
import DailyView from '@/components/program/DailyView.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'DayViewPage',
  
  components: {
    DailyView,
    BaseButton
  },
  
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    
    // Get week and day indices from route params
    const currentWeekIndex = computed(() => {
      const paramIndex = route.params.weekIndex;
      if (paramIndex !== undefined) {
        return parseInt(paramIndex);
      }
      return store.state.program.currentWeekIndex;
    });
    
    const currentDayIndex = computed(() => {
      const paramIndex = route.params.dayIndex;
      if (paramIndex !== undefined) {
        return parseInt(paramIndex);
      }
      return store.state.program.currentDayIndex;
    });
    
    // Set the current week and day in store when component mounts or when indices change
    watch([currentWeekIndex, currentDayIndex], ([weekIndex, dayIndex]) => {
      store.dispatch('program/selectWeek', weekIndex);
      store.dispatch('program/selectDay', dayIndex);
    }, { immediate: true });
    
    onMounted(() => {
      // Initialize if necessary
      if (store.state.program.weeks.length === 0) {
        store.dispatch('program/initializeCurrentWeekAndDay');
      }
      
      // Set the current week and day in store
      store.dispatch('program/selectWeek', currentWeekIndex.value);
      store.dispatch('program/selectDay', currentDayIndex.value);
    });
    
    // Get current day data
    const currentDay = computed(() => {
      return store.getters['program/getDayByIndices'](currentWeekIndex.value, currentDayIndex.value);
    });
    
    // Day title
    const dayTitle = computed(() => {
      if (!currentDay.value) return 'Jour';
      return `${currentDay.value.dayName} - ${currentDay.value.title}`;
    });
    
    // Formatted date (based on week start date + day index)
    const formattedDate = computed(() => {
      const week = store.getters['program/getWeekByIndex'](currentWeekIndex.value);
      if (!week || !week.dateRange || !week.dateRange.start) return '';
      
      const startDate = new Date(week.dateRange.start);
      const dayDate = addDays(startDate, currentDayIndex.value);
      
      return format(dayDate, 'yyyy-MM-dd');
    });
    
    // Navigation control
    const hasNextDay = computed(() => {
      const week = store.getters['program/getWeekByIndex'](currentWeekIndex.value);
      if (!week) return false;
      
      if (currentDayIndex.value < week.days.length - 1) {
        return true;
      }
      
      return currentWeekIndex.value < store.state.program.program.weeks.length - 1;
    });
    
    const hasPreviousDay = computed(() => {
      if (currentDayIndex.value > 0) {
        return true;
      }
      
      return currentWeekIndex.value > 0;
    });
    
    const navigateToNextDay = () => {
      const week = store.getters['program/getWeekByIndex'](currentWeekIndex.value);
      
      if (currentDayIndex.value < week.days.length - 1) {
        router.push(`/day/${currentWeekIndex.value}/${currentDayIndex.value + 1}`);
      } else if (currentWeekIndex.value < store.state.program.program.weeks.length - 1) {
        router.push(`/day/${currentWeekIndex.value + 1}/0`);
      }
    };
    
    const navigateToPreviousDay = () => {
      if (currentDayIndex.value > 0) {
        router.push(`/day/${currentWeekIndex.value}/${currentDayIndex.value - 1}`);
      } else if (currentWeekIndex.value > 0) {
        const previousWeek = store.getters['program/getWeekByIndex'](currentWeekIndex.value - 1);
        router.push(`/day/${currentWeekIndex.value - 1}/${previousWeek.days.length - 1}`);
      }
    };
    
    // Exercise completion management
    const updateExercise = ({ index, completed }) => {
      store.dispatch('program/toggleExerciseCompletion', {
        weekIndex: currentWeekIndex.value,
        dayIndex: currentDayIndex.value,
        exerciseIndex: index
      });
    };
    
    const updateAllExercises = (completed) => {
      const day = currentDay.value;
      if (!day || !day.exercises) return;
      
      day.exercises.forEach((_, index) => {
        store.dispatch(completed ? 'program/markExerciseAsCompleted' : 'program/markExerciseAsIncomplete', {
          weekIndex: currentWeekIndex.value,
          dayIndex: currentDayIndex.value,
          exerciseIndex: index
        });
      });
    };
    
    return {
      currentWeekIndex,
      currentDayIndex,
      currentDay,
      dayTitle,
      formattedDate,
      hasNextDay,
      hasPreviousDay,
      navigateToNextDay,
      navigateToPreviousDay,
      updateExercise,
      updateAllExercises
    };
  }
};
</script>

<style scoped lang="scss">
.day-view-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.navigation-controls {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
  
  h1 {
    margin: 0;
    color: var(--primary-color);
    font-size: 1.75rem;
    flex: 1;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  @media (max-width: 576px) {
    h1 {
      font-size: 1.2rem;
    }
  }
}

.day-container {
  animation: fadeIn 0.3s ease;
}

.no-day-data {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-xl) 0;
  
  p {
    margin-bottom: var(--space-md);
    color: var(--muted-color);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
