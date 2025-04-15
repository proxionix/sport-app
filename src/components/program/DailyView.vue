<template>
  <div class="daily-view">
    <div class="day-header">
      <h2>{{ dayTitle }}</h2>
      <div class="date-display">{{ formattedDate }}</div>
      <div class="day-progress">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${dayProgress}%` }"></div>
        </div>
        <div class="progress-text">{{ dayProgress }}% complété</div>
      </div>
    </div>
    
    <div class="day-actions">
      <BaseButton 
        v-if="dayProgress < 100"
        variant="success" 
        label="Marquer tout comme terminé" 
        @click="markAllCompleted"
        icon="check"
      />
      <BaseButton 
        v-else
        variant="outline" 
        label="Réinitialiser la journée" 
        @click="confirmReset"
        icon="undo"
      />
      
      <BaseButton 
        variant="outline"
        icon="plus"
        label="Ajouter une note"
        @click="showNotesModal = true"
      />
    </div>
    
    <div class="exercises-list">
      <h3>Programme du jour</h3>
      <BaseCard 
        v-for="(exercise, index) in dayData.exercises" 
        :key="`exercise-${index}`"
        class="exercise-card"
        :class="{ 'completed-exercise': exercise.completed }"
      >
        <div class="exercise-content">
          <div class="exercise-header">
            <BaseCheckbox 
              :modelValue="exercise.completed"
              @update:modelValue="toggleExercise(index, $event)"
            />
            <h4 :class="{ 'completed-title': exercise.completed }">
              {{ exercise.title }}
            </h4>
          </div>
          
          <div class="exercise-actions">
            <BaseButton 
              variant="outline"
              size="sm"
              icon="info-circle"
              label="Voir les détails"
              @click="viewExerciseDetails(exercise.detailSlug)"
            />
          </div>
        </div>
      </BaseCard>
    </div>
    
    <!-- Notes modal -->
    <BaseModal 
      v-if="showNotesModal"
      title="Notes pour cette journée"
      @close="showNotesModal = false"
      showDefaultFooter
      confirmLabel="Enregistrer"
      @confirm="saveNotes"
    >
      <div class="notes-form">
        <label for="day-notes">Ajoutez vos notes, observations ou performances:</label>
        <textarea 
          id="day-notes"
          v-model="dayNotes"
          rows="6"
          placeholder="Exemple: Sensation de progrès sur le développé incliné, fatigue inhabituelle, etc."
        ></textarea>
      </div>
    </BaseModal>
    
    <!-- Reset confirmation modal -->
    <BaseModal 
      v-if="showResetModal"
      title="Réinitialiser la journée?"
      @close="showResetModal = false"
      showDefaultFooter
      confirmLabel="Réinitialiser"
      @confirm="resetDay"
    >
      <p>Êtes-vous sûr de vouloir marquer tous les exercices de cette journée comme non terminés?</p>
      <p>Cette action ne peut pas être annulée.</p>
    </BaseModal>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue';
import BaseModal from '@/components/ui/BaseModal.vue';

export default {
  name: 'DailyView',
  
  components: {
    BaseCard,
    BaseButton,
    BaseCheckbox,
    BaseModal
  },
  
  props: {
    dayData: {
      type: Object,
      required: true
    },
    dayIndex: {
      type: Number,
      required: true
    },
    weekIndex: {
      type: Number,
      required: true
    },
    date: {
      type: String,
      required: false,
      default: null
    }
  },
  
  emits: ['update-exercise', 'update-all-exercises'],
  
  setup(props, { emit }) {
    const router = useRouter();
    const showNotesModal = ref(false);
    const showResetModal = ref(false);
    const dayNotes = ref('');
    
    // Formatted day title
    const dayTitle = computed(() => {
      return `${props.dayData.dayName} - ${props.dayData.title}`;
    });
    
    // Formatted date
    const formattedDate = computed(() => {
      if (!props.date) return '';
      
      const date = new Date(props.date);
      return format(date, 'EEEE d MMMM yyyy', { locale: fr });
    });
    
    // Day progress
    const dayProgress = computed(() => {
      if (!props.dayData.exercises.length) return 0;
      
      const completedExercises = props.dayData.exercises.filter(ex => ex.completed).length;
      return Math.round((completedExercises / props.dayData.exercises.length) * 100);
    });
    
    // Toggle exercise completion
    const toggleExercise = (index, completed) => {
      emit('update-exercise', { index, completed });
    };
    
    // Mark all exercises as completed
    const markAllCompleted = () => {
      emit('update-all-exercises', true);
    };
    
    // Show reset confirmation
    const confirmReset = () => {
      showResetModal.value = true;
    };
    
    // Reset all exercises
    const resetDay = () => {
      emit('update-all-exercises', false);
      showResetModal.value = false;
    };
    
    // View exercise details
    const viewExerciseDetails = (slug) => {
      router.push(`/exercise/${slug}`);
    };
    
    // Save notes
    const saveNotes = () => {
      // TODO: Implement notes saving functionality
      // store.dispatch('progress/updateDayNotes', {
      //   weekIndex: props.weekIndex,
      //   dayIndex: props.dayIndex,
      //   text: dayNotes.value
      // });
      showNotesModal.value = false;
    };
    
    return {
      dayTitle,
      formattedDate,
      dayProgress,
      showNotesModal,
      showResetModal,
      dayNotes,
      toggleExercise,
      markAllCompleted,
      confirmReset,
      resetDay,
      viewExerciseDetails,
      saveNotes
    };
  }
};
</script>

<style scoped lang="scss">
.daily-view {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.day-header {
  margin-bottom: var(--space-lg);
  
  h2 {
    margin-bottom: var(--space-xs);
    color: var(--primary-color);
    font-size: 1.75rem;
  }
  
  .date-display {
    color: var(--muted-color);
    font-size: 1rem;
    margin-bottom: var(--space-sm);
  }
  
  .day-progress {
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

.day-actions {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--space-sm);
    
    .base-button {
      width: 100%;
    }
  }
}

.exercises-list {
  h3 {
    font-size: 1.25rem;
    margin-bottom: var(--space-md);
    color: var(--text-color);
  }
  
  .exercise-card {
    margin-bottom: var(--space-md);
    transition: transform 0.2s ease;
    
    &.completed-exercise {
      border-left: 4px solid var(--success-color);
      background-color: var(--highlight-color);
    }
    
    .exercise-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--space-md);
      
      @media (max-width: 576px) {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .exercise-header {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        
        h4 {
          margin: 0;
          font-size: 1.1rem;
          
          &.completed-title {
            color: var(--muted-color);
            text-decoration: line-through;
          }
        }
      }
    }
  }
}

.notes-form {
  label {
    display: block;
    margin-bottom: var(--space-sm);
    font-weight: 500;
  }
  
  textarea {
    width: 100%;
    padding: var(--space-sm);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-family: inherit;
    font-size: 1rem;
    background-color: var(--card-bg);
    color: var(--text-color);
    resize: vertical;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
    }
  }
}
</style>
