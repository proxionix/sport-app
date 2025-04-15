<template>
  <div class="home-view">
    <section class="hero-section">
      <div class="hero-content">
        <h1>Programme Intégré Boxe & Musculation</h1>
        <p class="subtitle">Suivi personnalisé sur 12 semaines</p>
        
        <div class="countdown">
          <FontAwesomeIcon :icon="['fas', 'hourglass-half']" />
          <span>{{ daysRemaining }} jours avant le 13 juillet 2025</span>
        </div>
        
        <div class="progress-overview">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${overallProgress}%` }"></div>
          </div>
          <div class="progress-text">
            {{ overallProgress }}% du programme complété
          </div>
        </div>
      </div>
    </section>

    <section class="current-day">
      <div class="section-header">
        <h2>Programme d'aujourd'hui</h2>
        <div class="date-display">{{ formattedCurrentDate }}</div>
      </div>
      
      <BaseCard v-if="currentDay" class="today-card">
        <div class="today-header">
          <h3>{{ currentDay.dayName }} - {{ currentDay.title }}</h3>
          <div class="day-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${todayProgress}%` }"></div>
            </div>
            <div class="progress-text">{{ todayProgress }}% complété</div>
          </div>
        </div>
        
        <ul class="exercises-list">
          <li v-for="(exercise, index) in currentDay.exercises" :key="exercise.title">
            <ExerciseCard 
              :exercise="exercise" 
              :index="index"
              @toggle-completion="toggleExerciseCompletion(index, $event)"
              @view-details="viewExerciseDetails"
            />
          </li>
        </ul>
      </BaseCard>
      
      <div v-else class="no-program">
        <p>Aucun programme disponible pour aujourd'hui.</p>
        <BaseButton 
          label="Voir le planning complet" 
          @click="$router.push('/weeks')"
          variant="primary"
        />
      </div>
    </section>

    <section class="dashboard-grid">
      <BaseCard title="Progression générale" class="stats-card">
        <div class="stats-grid">
          <div 
            v-for="(stat, key) in progressStats" 
            :key="key" 
            class="stat-item"
          >
            <div class="stat-label">{{ statLabels[key] }}</div>
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${stat}%` }"></div>
            </div>
            <div class="stat-value">{{ stat }}%</div>
          </div>
        </div>
        <template #footer>
          <BaseButton 
            variant="outline" 
            size="sm" 
            label="Détails complets" 
            @click="$router.push('/profile')"
          />
        </template>
      </BaseCard>

      <BaseCard title="Semaine actuelle" class="week-card">
        <div v-if="currentWeek" class="current-week-overview">
          <div class="week-header">
            <h3>Semaine {{ currentWeekIndex + 1 }}</h3>
            <div class="date-range">{{ formattedWeekDateRange }}</div>
          </div>
          
          <div class="week-objectives" v-if="currentWeek.objectives">
            <h4>Objectifs de la semaine</h4>
            <ul>
              <li v-for="(objective, i) in currentWeek.objectives.slice(0, 2)" :key="i">
                {{ objective }}
              </li>
              <li v-if="currentWeek.objectives.length > 2" class="more-objectives">
                + {{ currentWeek.objectives.length - 2 }} autres objectifs
              </li>
            </ul>
          </div>
          
          <div class="week-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${weekProgress}%` }"></div>
            </div>
            <div class="progress-text">{{ weekProgress }}% complété</div>
          </div>
        </div>
        
        <template #footer>
          <BaseButton 
            variant="outline" 
            size="sm" 
            label="Voir la semaine" 
            @click="$router.push(`/week/${currentWeekIndex}`)"
          />
        </template>
      </BaseCard>
    </section>

    <section class="quick-actions">
      <h2>Actions rapides</h2>
      <div class="actions-grid">
        <BaseButton 
          variant="primary" 
          icon="dumbbell" 
          label="Programme du jour" 
          @click="$router.push(`/day/${currentWeekIndex}/${currentDayIndex}`)"
        />
        <BaseButton 
          variant="secondary" 
          icon="calendar-week" 
          label="Planning semaine" 
          @click="$router.push(`/week/${currentWeekIndex}`)"
        />
        <BaseButton 
          variant="success" 
          icon="chart-line" 
          label="Suivi des progrès" 
          @click="$router.push('/profile')"
        />
        <BaseButton 
          variant="outline" 
          icon="list" 
          label="Toutes les semaines" 
          @click="$router.push('/weeks')"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import ExerciseCard from '@/components/program/ExerciseCard.vue';

export default {
  name: 'HomeView',
  
  components: {
    BaseCard,
    BaseButton,
    ExerciseCard
  },
  
  setup() {
    const store = useStore();
    const router = useRouter();
    
    // Initialisation
    onMounted(() => {
      store.dispatch('program/initializeCurrentWeekAndDay');
    });
    
    // Données actuelles
    const currentWeekIndex = computed(() => store.state.program.currentWeekIndex);
    const currentDayIndex = computed(() => store.state.program.currentDayIndex);
    const currentWeek = computed(() => store.getters['program/getCurrentWeek']);
    const currentDay = computed(() => store.getters['program/getCurrentDay']);
    
    // Date formatée
    const formattedCurrentDate = computed(() => {
      return format(new Date(), 'EEEE d MMMM yyyy', { locale: fr });
    });
    
    // Date range de la semaine formatée
    const formattedWeekDateRange = computed(() => {
      if (!currentWeek.value || !currentWeek.value.dateRange) return '';
      
      const { start, end } = currentWeek.value.dateRange;
      const startDate = new Date(start);
      const endDate = new Date(end);
      
      return `Du ${format(startDate, 'd MMMM', { locale: fr })} au ${format(endDate, 'd MMMM yyyy', { locale: fr })}`;
    });
    
    // Progression
    const overallProgress = computed(() => store.getters['program/getOverallProgress']);
    
    const weekProgress = computed(() => {
      return store.getters['program/getWeekProgress'](currentWeekIndex.value);
    });
    
    const todayProgress = computed(() => {
      if (!currentDay.value || !currentDay.value.exercises) return 0;
      
      const totalExercises = currentDay.value.exercises.length;
      const completedExercises = currentDay.value.exercises.filter(ex => ex.completed).length;
      
      return totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
    });
    
    // Jours restants
    const daysRemaining = computed(() => store.getters['progress/getDaysRemaining']);
    
    // Stats de progression
    const progressStats = computed(() => store.getters['progress/getAllProgressStats']);
    
    // Libellés des stats
    const statLabels = {
      weight: 'Poids',
      chestSize: 'Tour de poitrine',
      armSize: 'Tour de bras',
      waistSize: 'Tour de taille',
      pullUpsMax: 'Tractions max',
      benchPressMax: 'Développé couché',
      enduranceRounds: 'Endurance'
    };
    
    // Actions
    const toggleExerciseCompletion = (exerciseIndex, event) => {
      store.dispatch('program/toggleExerciseCompletion', {
        weekIndex: currentWeekIndex.value,
        dayIndex: currentDayIndex.value,
        exerciseIndex
      });
    };
    
    const viewExerciseDetails = (slug) => {
      router.push(`/exercise/${slug}`);
      // Ajouter à l'historique des exercices consultés
      store.dispatch('user/trackExerciseView', slug);
    };
    
    return {
      currentWeekIndex,
      currentDayIndex,
      currentWeek,
      currentDay,
      formattedCurrentDate,
      formattedWeekDateRange,
      overallProgress,
      weekProgress,
      todayProgress,
      daysRemaining,
      progressStats,
      statLabels,
      toggleExerciseCompletion,
      viewExerciseDetails
    };
  }
};
</script>

<style scoped lang="scss">
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.hero-section {
  margin-bottom: var(--space-xl);
  
  .hero-content {
    text-align: center;
    padding: var(--space-lg) 0;
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: var(--space-xs);
      color: var(--primary-color);
      
      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }
    
    .subtitle {
      font-size: 1.2rem;
      margin-bottom: var(--space-lg);
      color: var(--muted-color);
    }
    
    .countdown {
      display: inline-flex;
      align-items: center;
      padding: var(--space-sm) var(--space-md);
      background-color: var(--highlight-color);
      border-radius: 50px;
      margin-bottom: var(--space-lg);
      
      svg {
        margin-right: var(--space-sm);
        color: var(--secondary-color);
      }
      
      span {
        font-weight: 500;
        color: var(--secondary-color);
      }
    }
    
    .progress-overview {
      max-width: 500px;
      margin: 0 auto;
      
      .progress-bar {
        height: 10px;
        background-color: var(--border-color);
        border-radius: 5px;
        margin-bottom: var(--space-xs);
        overflow: hidden;
        
        .progress-fill {
          height: 100%;
          background-color: var(--primary-color);
          border-radius: 5px;
          transition: width 0.3s ease;
        }
      }
      
      .progress-text {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-md);
  
  h2 {
    margin: 0;
    color: var(--text-color);
    font-size: 1.5rem;
  }
  
  .date-display {
    color: var(--muted-color);
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-xs);
  }
}

.current-day {
  margin-bottom: var(--space-xl);
  
  .today-card {
    .today-header {
      margin-bottom: var(--space-md);
      
      h3 {
        margin-bottom: var(--space-xs);
        color: var(--text-color);
      }
      
      .day-progress {
        .progress-bar {
          height: 6px;
          background-color: var(--border-color);
          border-radius: 3px;
          margin-bottom: 4px;
          overflow: hidden;
          
          .progress-fill {
            height: 100%;
            background-color: var(--primary-color);
            border-radius: 3px;
            transition: width 0.3s ease;
          }
        }
        
        .progress-text {
          font-size: 0.875rem;
          color: var(--muted-color);
        }
      }
    }
    
    .exercises-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
  
  .no-program {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-xl) 0;
    text-align: center;
    
    p {
      color: var(--muted-color);
      margin-bottom: var(--space-md);
    }
  }
}

.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  .stats-card {
    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-md);
      margin-bottom: var(--space-md);
      
      .stat-item {
        .stat-label {
          font-size: 0.875rem;
          margin-bottom: 4px;
        }
        
        .progress-bar {
          height: 6px;
          background-color: var(--border-color);
          border-radius: 3px;
          margin-bottom: 4px;
          overflow: hidden;
          
          .progress-fill {
            height: 100%;
            background-color: var(--primary-color);
            border-radius: 3px;
            transition: width 0.3s ease;
          }
        }
        
        .stat-value {
          font-size: 0.875rem;
          text-align: right;
          font-weight: 500;
        }
      }
    }
  }
  
  .week-card {
    .current-week-overview {
      .week-header {
        margin-bottom: var(--space-sm);
        
        h3 {
          margin: 0 0 var(--space-xs) 0;
          color: var(--text-color);
        }
        
        .date-range {
          font-size: 0.875rem;
          color: var(--muted-color);
        }
      }
      
      .week-objectives {
        margin-bottom: var(--space-md);
        
        h4 {
          font-size: 1rem;
          margin-bottom: var(--space-xs);
          color: var(--text-color);
        }
        
        ul {
          list-style-type: disc;
          padding-left: var(--space-lg);
          margin: 0;
          
          li {
            margin-bottom: 4px;
            font-size: 0.9rem;
            
            &.more-objectives {
              color: var(--muted-color);
              font-style: italic;
              list-style-type: none;
              margin-top: 4px;
            }
          }
        }
      }
      
      .week-progress {
        .progress-bar {
          height: 6px;
          background-color: var(--border-color);
          border-radius: 3px;
          margin-bottom: 4px;
          overflow: hidden;
          
          .progress-fill {
            height: 100%;
            background-color: var(--primary-color);
            border-radius: 3px;
            transition: width 0.3s ease;
          }
        }
        
        .progress-text {
          font-size: 0.875rem;
          color: var(--muted-color);
        }
      }
    }
  }
}

.quick-actions {
  margin-bottom: var(--space-xl);
  
  h2 {
    margin-bottom: var(--space-md);
    color: var(--text-color);
    font-size: 1.5rem;
  }
  
  .actions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-md);
    
    .base-button {
      display: flex;
      flex-direction: column;
      height: 100px;
      padding: var(--space-md);
      
      svg {
        font-size: 1.5rem;
        margin-bottom: var(--space-sm);
      }
    }
  }
}
</style>
