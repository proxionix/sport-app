<template>
  <div class="week-view-container">
    <div class="navigation-controls">
      <BaseButton 
        icon="arrow-left" 
        variant="outline"
        @click="navigateToPreviousWeek" 
        :disabled="!hasPreviousWeek"
      />
      <h1>{{ weekTitle }}</h1>
      <BaseButton 
        icon="arrow-right" 
        variant="outline"
        @click="navigateToNextWeek" 
        :disabled="!hasNextWeek"
      />
    </div>
    
    <div v-if="currentWeek" class="week-container">
      <WeeklyView :week-data="currentWeek" :week-index="currentWeekIndex" />
    </div>
    
    <div v-else class="no-week-data">
      <p>Semaine non disponible. Veuillez sélectionner une semaine valide.</p>
      <BaseButton 
        label="Retour à l'accueil" 
        @click="$router.push('/')"
        variant="primary"
      />
    </div>
  </div>
</template>

<script>
import { computed, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import WeeklyView from '@/components/program/WeeklyView.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'WeekView',
  
  components: {
    WeeklyView,
    BaseButton
  },
  
  props: {
    weekIndex: {
      type: Number,
      default: null
    }
  },
  
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    
    // Compute current week index either from props or from route params
    const currentWeekIndex = computed(() => {
      if (props.weekIndex !== null) {
        return props.weekIndex;
      }
      
      const paramIndex = route.params.weekIndex;
      if (paramIndex !== undefined) {
        return parseInt(paramIndex);
      }
      
      // Default to store current week
      return store.state.program.currentWeekIndex;
    });
    
    // Set the current week in store when component mounts or when week index changes
    watch(() => currentWeekIndex.value, (newIndex) => {
      store.dispatch('program/selectWeek', newIndex);
    }, { immediate: true });
    
    onMounted(() => {
      // Initialize if necessary
      if (store.state.program.weeks.length === 0) {
        store.dispatch('program/initializeCurrentWeekAndDay');
      }
      
      // Set the current week in store
      store.dispatch('program/selectWeek', currentWeekIndex.value);
    });
    
    // Get current week data
    const currentWeek = computed(() => {
      return store.getters['program/getWeekByIndex'](currentWeekIndex.value);
    });
    
    // Week title
    const weekTitle = computed(() => {
      return `Semaine ${currentWeekIndex.value + 1}`;
    });
    
    // Navigation control
    const hasNextWeek = computed(() => {
      return currentWeekIndex.value < store.state.program.program.weeks.length - 1;
    });
    
    const hasPreviousWeek = computed(() => {
      return currentWeekIndex.value > 0;
    });
    
    const navigateToNextWeek = () => {
      if (hasNextWeek.value) {
        router.push(`/week/${currentWeekIndex.value + 1}`);
      }
    };
    
    const navigateToPreviousWeek = () => {
      if (hasPreviousWeek.value) {
        router.push(`/week/${currentWeekIndex.value - 1}`);
      }
    };
    
    return {
      currentWeekIndex,
      currentWeek,
      weekTitle,
      hasNextWeek,
      hasPreviousWeek,
      navigateToNextWeek,
      navigateToPreviousWeek
    };
  }
};
</script>

<style scoped lang="scss">
.week-view-container {
  max-width: 1200px;
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
    font-size: 2rem;
    flex: 1;
    text-align: center;
  }
  
  @media (max-width: 576px) {
    h1 {
      font-size: 1.5rem;
    }
  }
}

.week-container {
  animation: fadeIn 0.3s ease;
}

.no-week-data {
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
