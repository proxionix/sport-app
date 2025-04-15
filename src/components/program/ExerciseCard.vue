<template>
  <div class="exercise-card" :class="{ 'completed': exercise.completed }">
    <div class="card-content">
      <div class="exercise-info">
        <BaseCheckbox 
          :modelValue="exercise.completed"
          @update:modelValue="toggleCompletion"
        />
        
        <div class="exercise-details">
          <h3 class="exercise-title" :class="{ 'completed-title': exercise.completed }">
            {{ exercise.title }}
          </h3>
        </div>
      </div>
      
      <div class="card-actions">
        <BaseButton 
          variant="outline"
          size="sm"
          icon="info-circle"
          @click="viewDetails"
          label="Détails"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default defineComponent({
  name: 'ExerciseCard',
  
  components: {
    BaseCheckbox,
    BaseButton
  },
  
  props: {
    exercise: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  
  emits: ['toggle-completion', 'view-details'],
  
  setup(props, { emit }) {
    const toggleCompletion = (completed) => {
      emit('toggle-completion', { 
        index: props.index,
        completed
      });
    };
    
    const viewDetails = () => {
      emit('view-details', props.exercise.detailSlug);
    };
    
    return {
      toggleCompletion,
      viewDetails
    };
  }
});
</script>

<style scoped lang="scss">
.exercise-card {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  border-left: 3px solid var(--primary-color);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  padding: var(--space-md);
  margin-bottom: var(--space-sm);
  
  &.completed {
    border-left-color: var(--success-color);
    background-color: var(--highlight-color);
  }
  
  &:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-sm);
    }
    
    .exercise-info {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      flex: 1;
      
      .exercise-details {
        .exercise-title {
          margin: 0;
          font-size: 1rem;
          font-weight: 500;
          
          &.completed-title {
            color: var(--muted-color);
            text-decoration: line-through;
          }
        }
      }
    }
    
    .card-actions {
      display: flex;
      gap: var(--space-sm);
      
      @media (max-width: 576px) {
        width: 100%;
        justify-content: flex-end;
      }
    }
  }
}
</style>
