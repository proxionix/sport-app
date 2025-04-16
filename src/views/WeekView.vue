<template>
  <div class="week-view">
    <div class="week-header">
      <h2>Semaine {{ weekNumber }} - {{ currentWeek.title }}</h2>
      <BaseProgress 
        :value="completionRate" 
        :max="100"
        label="Progression"
      />
    </div>

    <div class="days-grid">
      <router-link
        v-for="day in currentWeek.days"
        :key="day.dayName"
        :to="`/week/${weekNumber}/${day.dayName}`"
        class="day-card"
      >
        <h3>{{ day.title }}</h3>
        <div class="day-meta">
          <span>{{ day.exercises.length }} exercices</span>
          <FontAwesomeIcon 
            v-if="day.completed" 
            :icon="['fas', 'circle-check']" 
            class="completed-icon"
          />
        </div>
      </router-link>
    </div>

    <div class="week-stats">
      <div class="stat-card">
        <h4>Durée totale</h4>
        <p class="stat-value">
          {{ totalDuration }}<span class="unit">min</span>
        </p>
      </div>
      <div class="stat-card">
        <h4>Exercices complétés</h4>
        <p class="stat-value">
          {{ completedExercises }}<span class="unit">/{{ totalExercises }}</span>
        </p>
      </div>
      <div class="stat-card">
        <h4>Calories brûlées</h4>
        <p class="stat-value">
          {{ estimatedCalories }}<span class="unit">kcal</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseProgress from '@/components/ui/BaseProgress.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'WeekView',
  components: { BaseProgress, FontAwesomeIcon },
  computed: {
    ...mapGetters(['getWeek']),
    weekNumber() {
      return parseInt(this.$route.params.week) || 1
    },
    currentWeek() {
      return this.getWeek(this.weekNumber) || {}
    },
    completionRate() {
      return this.currentWeek.days?.reduce((acc, day) => {
        return acc + (day.completed ? 100 / this.currentWeek.days.length : 0)
      }, 0) || 0
    },
    totalDuration() {
      return this.currentWeek.days?.reduce((acc, day) => {
        return acc + day.exercises.reduce((sum, ex) => sum + ex.duration, 0)
      }, 0) || 0
    },
    completedExercises() {
      return this.currentWeek.days?.reduce((acc, day) => {
        return acc + day.exercises.filter(ex => ex.completed).length
      }, 0) || 0
    },
    totalExercises() {
      return this.currentWeek.days?.reduce((acc, day) => {
        return acc + day.exercises.length
      }, 0) || 0
    },
    estimatedCalories() {
      return Math.round(this.totalDuration * 7.5) // Estimation 7.5kcal/min
    }
  }
}
</script>

<style lang="scss" scoped>
.week-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  .week-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    padding: 0 1rem;
  }

  .days-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .day-card {
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease;
    box-shadow: $card-shadow;

    &:hover {
      transform: translateY(-3px);
    }

    h3 {
      margin: 0 0 1rem 0;
      color: $primary-color;
    }

    .day-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $text-muted;

      .completed-icon {
        color: $success-color;
      }
    }
  }

  .week-stats {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 0 1rem;

    .stat-card {
      background: #fff;
      border-radius: 12px;
      padding: 1.5rem;
      text-align: center;
      box-shadow: $card-shadow;

      h4 {
        margin: 0 0 1rem 0;
        color: $text-muted;
        font-weight: 500;
      }

      .stat-value {
        font-size: 2.5rem;
        margin: 0;
        color: $primary-color;
        font-weight: 700;

        .unit {
          font-size: 1rem;
          color: $text-muted;
          margin-left: 0.5rem;
        }
      }
    }
  }
}
</style>
