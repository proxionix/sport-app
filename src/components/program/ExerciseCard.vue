<template>
  <BaseCard class="exercise-card">
    <template #header>
      <h3 class="exercise-title">{{ exercise.title }}</h3>
      <div class="exercise-meta">
        <span class="duration">
          <FontAwesomeIcon :icon="['fas', 'clock']" />
          {{ exercise.duration }} min
        </span>
        <span class="difficulty">
          <FontAwesomeIcon :icon="['fas', 'fire']" />
          {{ exercise.difficulty }}/5
        </span>
      </div>
    </template>

    <template #default>
      <div class="exercise-content">
        <div class="description">
          <p>{{ exercise.description }}</p>
          <ul v-if="exercise.equipment.length" class="equipment-list">
            <li v-for="item in exercise.equipment" :key="item">
              <FontAwesomeIcon :icon="['fas', 'check']" />
              {{ item }}
            </li>
          </ul>
        </div>
        
        <div class="media">
          <img 
            v-if="exercise.image" 
            :src="require(`@/assets/img/${exercise.image}`)" 
            :alt="exercise.title"
            class="exercise-img"
          >
          <video 
            v-if="exercise.video" 
            controls
            :poster="require(`@/assets/vid/thumbnails/${exercise.video}-thumb.jpg`)"
          >
            <source 
              :src="require(`@/assets/vid/${exercise.video}.mp4`)" 
              type="video/mp4"
            >
          </video>
        </div>
      </div>
    </template>

    <template #footer>
      <div class="exercise-actions">
        <BaseButton 
          variant="outline" 
          @click="$emit('start-exercise')"
        >
          Commencer
        </BaseButton>
        <BaseButton 
          variant="text" 
          @click="$emit('show-details')"
        >
          Détails
        </BaseButton>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'ExerciseCard',
  components: { BaseCard, FontAwesomeIcon },
  props: {
    exercise: {
      type: Object,
      required: true,
      validator: (value) => {
        return [
          'title', 
          'description', 
          'duration', 
          'difficulty'
        ].every(key => key in value)
      }
    }
  },
  emits: ['start-exercise', 'show-details']
}
</script>

<style lang="scss" scoped>
.exercise-card {
  margin-bottom: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }

  .exercise-title {
    color: $primary-color;
    margin: 0 0 0.5rem 0;
  }

  .exercise-meta {
    display: flex;
    gap: 1.5rem;
    color: $text-muted;

    svg {
      margin-right: 0.5rem;
    }
  }

  .exercise-content {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 2rem;

    .description {
      line-height: 1.6;
    }

    .equipment-list {
      padding-left: 1.5rem;
      color: $text-muted;

      li {
        margin: 0.5rem 0;
      }
    }

    .media {
      .exercise-img {
        width: 100%;
        border-radius: 8px;
      }

      video {
        width: 100%;
        border-radius: 8px;
      }
    }
  }

  .exercise-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    padding-top: 1rem;
    border-top: 1px solid $border-color;
  }
}
</style>
