<template>
  <div class="exercise-detail-container">
    <div class="back-link">
      <BaseButton 
        variant="text" 
        icon="arrow-left"
        label="Retour"
        @click="goBack"
      />
    </div>
    
    <div v-if="exerciseDetail" class="exercise-detail">
      <BaseCard :elevation="2">
        <h1 class="exercise-title">{{ exerciseDetail.title }}</h1>
        
        <div v-if="exerciseDetail.objective" class="exercise-section">
          <h2>Objectif</h2>
          <p>{{ exerciseDetail.objective }}</p>
        </div>
        
        <div v-if="exerciseDetail.equipment" class="exercise-section">
          <h2>Équipement</h2>
          <ul class="equipment-list">
            <li v-for="(item, index) in exerciseDetail.equipment" :key="`equipment-${index}`">
              {{ item }}
            </li>
          </ul>
        </div>
        
        <div v-if="exerciseDetail.duration" class="exercise-section">
          <h2>Durée</h2>
          <p>{{ exerciseDetail.duration }}</p>
        </div>
        
        <div v-if="exerciseDetail.sequence" class="exercise-section">
          <h2>Séquence</h2>
          <div 
            v-for="(phase, index) in exerciseDetail.sequence" 
            :key="`sequence-${index}`"
            class="sequence-phase"
          >
            <h3>{{ phase.name }} <span v-if="phase.duration">({{ phase.duration }})</span></h3>
            <ul>
              <li v-for="(step, stepIndex) in phase.steps" :key="`step-${stepIndex}`">
                {{ step }}
              </li>
            </ul>
          </div>
        </div>
        
        <div v-if="exerciseDetail.execution" class="exercise-section">
          <h2>Exécution Technique</h2>
          <div 
            v-for="(phase, index) in exerciseDetail.execution" 
            :key="`execution-${index}`"
            class="execution-phase"
          >
            <h3>{{ phase.name }}</h3>
            <ul>
              <li v-for="(step, stepIndex) in phase.steps" :key="`execstep-${stepIndex}`">
                {{ step }}
              </li>
            </ul>
          </div>
        </div>
        
        <div v-if="exerciseDetail.structure" class="exercise-section">
          <h2>Structure</h2>
          <ul class="structure-list">
            <li v-for="(value, key) in exerciseDetail.structure" :key="`structure-${key}`">
              <strong>{{ formatStructureKey(key) }}:</strong> {{ value }}
            </li>
          </ul>
        </div>
        
        <div v-if="exerciseDetail.keyPoints" class="exercise-section">
          <h2>Points Clés</h2>
          <ul class="key-points-list">
            <li v-for="(point, index) in exerciseDetail.keyPoints" :key="`key-point-${index}`">
              {{ point }}
            </li>
          </ul>
        </div>
        
        <div v-if="exerciseDetail.progression" class="exercise-section">
          <h2>Progression</h2>
          <ul class="progression-list">
            <li v-for="(step, index) in Array.isArray(exerciseDetail.progression) ? exerciseDetail.progression : [exerciseDetail.progression]" :key="`progression-${index}`">
              {{ step }}
            </li>
          </ul>
        </div>
        
        <div v-if="exerciseDetail.adaptation" class="exercise-section">
          <h2>Adaptation Morphologique</h2>
          <ul class="adaptation-list">
            <li v-for="(adaptation, index) in exerciseDetail.adaptation" :key="`adaptation-${index}`">
              {{ adaptation }}
            </li>
          </ul>
        </div>
      </BaseCard>
    </div>
    
    <div v-else class="exercise-not-found">
      <p>Exercice non trouvé. Veuillez sélectionner un exercice valide.</p>
      <BaseButton 
        label="Retour à l'accueil" 
        @click="$router.push('/')"
        variant="primary"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'ExerciseDetailView',
  
  components: {
    BaseCard,
    BaseButton
  },
  
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    
    // Get exercise slug from route params
    const exerciseSlug = computed(() => route.params.slug);
    
    // Get exercise details from store
    const exerciseDetail = computed(() => {
      return store.getters['program/getExerciseDetail'](exerciseSlug.value);
    });
    
    // Track exercise view
    onMounted(() => {
      if (exerciseSlug.value) {
        store.dispatch('user/trackExerciseView', exerciseSlug.value);
      }
    });
    
    // Format structure keys
    const formatStructureKey = (key) => {
      if (!key) return '';
      
      // Convert camelCase to Title Case with spaces
      return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
    };
    
    // Navigate back
    const goBack = () => {
      router.back();
    };
    
    return {
      exerciseSlug,
      exerciseDetail,
      formatStructureKey,
      goBack
    };
  }
};
</script>

<style scoped lang="scss">
.exercise-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.back-link {
  margin-bottom: var(--space-md);
}

.exercise-detail {
  animation: fadeIn 0.3s ease;
  
  .exercise-title {
    color: var(--primary-color);
    font-size: 1.75rem;
    margin-bottom: var(--space-lg);
    padding-bottom: var(--space-sm);
    border-bottom: 1px solid var(--border-color);
  }
  
  .exercise-section {
    margin-bottom: var(--space-lg);
    
    h2 {
      color: var(--text-color);
      font-size: 1.25rem;
      margin-bottom: var(--space-sm);
      position: relative;
      padding-left: var(--space-sm);
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.2em;
        bottom: 0.2em;
        width: 3px;
        background-color: var(--primary-color);
        border-radius: 3px;
      }
    }
    
    h3 {
      color: var(--secondary-color);
      font-size: 1.1rem;
      margin-bottom: var(--space-xs);
      margin-top: var(--space-md);
      
      span {
        font-size: 0.9rem;
        color: var(--muted-color);
        font-weight: normal;
      }
    }
    
    p {
      line-height: 1.6;
    }
    
    ul {
      padding-left: var(--space-lg);
      margin-bottom: var(--space-sm);
      
      li {
        margin-bottom: var(--space-xs);
        position: relative;
        
        &::before {
          content: '•';
          position: absolute;
          left: calc(-1 * var(--space-md));
          color: var(--primary-color);
        }
      }
    }
    
    .equipment-list, .structure-list, .key-points-list, .progression-list, .adaptation-list {
      list-style: none;
      padding-left: 0;
      
      li {
        padding-left: var(--space-md);
        position: relative;
        
        &::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary-color);
        }
      }
    }
    
    .sequence-phase, .execution-phase {
      margin-bottom: var(--space-md);
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.exercise-not-found {
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
