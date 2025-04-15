<template>
  <div class="weekly-view">
    <div class="week-header">
      <h2>{{ weekTitle }}</h2>
      <div class="date-range">{{ formattedDateRange }}</div>
      <div class="week-progress">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${weekProgress}%` }"></div>
        </div>
        <div class="progress-text">{{ weekProgress }}% complété</div>
      </div>
    </div>
    
    <div class="week-objectives" v-if="weekData && weekData.objectives && weekData.objectives.length">
      <h3>Objectifs de la semaine</h3>
      <ul>
        <li v-for="(objective, index) in weekData.objectives" :key="`objective-${index}`">
          {{ objective }}
        </li>
      </ul>
    </div>
    
    <div class="days-grid">
      <BaseCard 
        v-for="(day, index) in weekData.days"
        :key="`day-${index}`"
        :title="day.dayName + ' - ' + day.title"
        clickable
        :class="{ 'completed-day': isDayCompleted(index) }"
        @click="navigateToDay(index)"
      >
        <div class="day-content">
          <div class="exercises-count">
            <span class="count">{{ day.exercises.length }}</span> exercices
          </div>
          
          <div class="exercises-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${getDayProgress(index)}%` }"></div>
            </div>
            <div class="progress-text">{{ getDayProgress(index) }}% complété</div>
          </div>
          
          <ul class="exercise-list">
            <li 
              v-for="(exercise, exIndex) in day.exercises.slice(0, 3)" 
              :key="`exercise-${exIndex}`"
              :class="{ 'completed': isExerciseCompleted(index, exIndex) }"
            >
              <FontAwesomeIcon 
                :icon="['fas', isExerciseCompleted(index, exIndex) ? 'check-circle' : 'circle']" 
                :class="{ 'completed-icon': isExerciseCompleted(index, exIndex) }"
              />
              <span>{{ exercise.title }}</span>
            </li>
            <li v-if="day.exercises.length > 3" class="more-exercises">
              +{{ day.exercises.length - 3 }} autres exercices
            </li>
          </ul>
          
          <BaseButton 
            class="day-action-btn"
            :label="isDayCompleted(index) ? 'Voir les détails' : 'Commencer'"
            :variant="isDayCompleted(index) ? 'outline' : 'primary'"
            @click.stop="navigateToDay(index)"
          />
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'WeeklyView',
  
  components: {
    BaseCard,
    BaseButton
  },
  
  props: {
    weekData: {
      type: Object,
      required: true
    },
    weekIndex: {
      type: Number,
      required: true
    }
  },
  
  setup(props) {
    const router = useRouter();
    
    // Formatted week title
    const weekTitle = computed(() => {
      return `Semaine ${props.weekIndex + 1}`;
    });
    
    // Formatted date range
    const formattedDateRange = computed(() => {
      if (!props.weekData || !props.weekData.dateRange) return '';
      
      const { start, end } = props.weekData.dateRange;
      const startDate = new Date(start);
      const endDate = new Date(end);
      
      return `Du ${format(startDate, 'd MMMM', { locale: fr })} au ${format(endDate, 'd MMMM yyyy', { locale: fr })}`;
    });
    
    // Navigate to day view
    const navigateToDay = (dayIndex) => {
      router.push(`/day/${props.weekIndex}/${dayIndex}`);
    };
    
    // Week progress (from Vuex)
    const weekProgress = computed(() => {
      let totalExercises = 0;
      let completedExercises = 0;
      
      props.weekData.days.forEach((day, dayIndex) => {
        day.exercises.forEach((_, exIndex) => {
          totalExercises++;
          if (isExerciseCompleted(dayIndex, exIndex)) {
            completedExercises++;
          }
        });
      });
      
      return totalExercises > 0 ? Math.round((completedExercises / totalExercises) * 100) : 0;
    });
    
    // Day progress
    const getDayProgress = (dayIndex) => {
      const day = props.weekData.days[dayIndex];
      if (!day || !day.exercises.length) return 0;
      
      let completedExercises = 0;
      
      day.exercises.forEach((_, exIndex) => {
        if (isExerciseCompleted(dayIndex, exIndex)) {
          completedExercises++;
        }
      });
      
      return day.exercises.length > 0 
        ? Math.round((completedExercises / day.exercises.length) * 100) 
        : 0;
    };
    
    // Check if exercise is completed (using local data)
    const isExerciseCompleted = (dayIndex, exIndex) => {
      return props.weekData.days[dayIndex].exercises[exIndex].completed;
    };
    
    // Check if day is fully completed
    const isDayCompleted = (dayIndex) => {
      const day = props.weekData.days[dayIndex];
      if (!day || !day.exercises.length) return false;
      
      return day.exercises.every(ex => ex.completed);
    };
    
    return {
      weekTitle,
      formattedDateRange,
      weekProgress,
      navigateToDay,
      getDayProgress,
      isExerciseCompleted,
      isDayCompleted
    };
  }
};
</script>

<style scoped lang="scss">
.weekly-view {
  margin-bottom: var(--space-xl);
}

.week-header {
  margin-bottom: var(--space-lg);
  
  h2 {
    margin-bottom: var(--space-xs);
    color: var(--primary-color);
    font-size: 1.75rem;
  }
  
  .date-range {
    color: var(--muted-color);
    font-size: 1rem;
    margin-bottom: var(--space-sm);
  }
  
  .week-progress {
    margin-top: var(--space-sm);
    
    .progress-bar {
      height: 8px;
      background-color: var(--border-color);
      border-radius: 4px;
      margin-bottom: 4px;
      overflow: hidden;
      
      .progress-fill {
        height: 100%;
        background-color: var(--primary-color);
        border-radius: 4px;
        transition: width 0.3s ease;
      }
    }
    
    .progress-text {
      font-size: 0.875rem;
      color: var(--muted-color);
    }
  }
}

.week-objectives {
  margin-bottom: var(--space-lg);
  
  h3 {
    font-size: 1.25rem;
    margin-bottom: var(--space-sm);
    color: var(--text-color);
  }
  
  ul {
    list-style-type: disc;
    padding-left: var(--space-lg);
    
    li {
      margin-bottom: var(--space-xs);
    }
  }
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-md);
  
  .base-card {
    height: 100%;
    
    &.completed-day {
      border-left: 4px solid var(--success-color);
    }
    
    .day-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      
      .exercises-count {
        margin-bottom: var(--space-sm);
        
        .count {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-color);
        }
      }
      
      .exercises-progress {
        margin-bottom: var(--space-md);
        
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
          font-size: 0.75rem;
          color: var(--muted-color);
        }
      }
      
      .exercise-list {
        flex: 1;
        margin-bottom: var(--space-md);
        
        li {
          display: flex;
          align-items: center;
          padding: var(--space-xs) 0;
          
          svg {
            margin-right: var(--space-xs);
            color: var(--muted-color);
            
            &.completed-icon {
              color: var(--success-color);
            }
          }
          
          &.completed {
            color: var(--muted-color);
            text-decoration: line-through;
          }
          
          &.more-exercises {
            color: var(--muted-color);
            font-style: italic;
            padding-left: var(--space-md);
          }
        }
      }
      
      .day-action-btn {
        align-self: flex-start;
      }
    }
  }
}

@media (max-width: 768px) {
  .days-grid {
    grid-template-columns: 1fr;
  }
}
</style>
