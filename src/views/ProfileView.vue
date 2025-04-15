<template>
  <div class="profile-view">
    <h1>Suivi et Progression</h1>
    
    <div class="profile-grid">
      <!-- Target Date Card -->
      <BaseCard class="target-date-card">
        <div class="countdown">
          <div class="days-remaining">{{ daysRemaining }}</div>
          <div class="days-label">jours restants</div>
        </div>
        <div class="target-date">
          <span>Objectif: Physique esthétique et fonctionnel pour le</span>
          <strong>13 juillet 2025</strong>
        </div>
        <div class="program-progress">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: `${timeProgress}%` }"></div>
          </div>
          <div class="progress-text">{{ timeProgress }}% du programme complété</div>
        </div>
      </BaseCard>

      <!-- Stats Input Card -->
      <BaseCard title="Mesures Actuelles" class="stats-card">
        <div class="stats-form">
          <div class="form-row">
            <label>
              Poids (kg)
              <input 
                type="number" 
                v-model.number="currentStats.weight"
                min="40"
                max="150"
                @change="updateStat('Weight')"
              />
            </label>
            <div class="target-indicator">
              Cible: {{ targetStats.weight[0] }}-{{ targetStats.weight[1] }} kg
            </div>
          </div>
          
          <div class="form-row">
            <label>
              Tour de poitrine (cm)
              <input 
                type="number" 
                v-model.number="currentStats.chestSize"
                min="70"
                max="150"
                @change="updateStat('ChestSize')"
              />
            </label>
            <div class="target-indicator">
              Cible: {{ targetStats.chestSize[0] }}-{{ targetStats.chestSize[1] }} cm
            </div>
          </div>
          
          <div class="form-row">
            <label>
              Tour de bras (cm)
              <input 
                type="number" 
                v-model.number="currentStats.armSize"
                min="25"
                max="60"
                @change="updateStat('ArmSize')"
              />
            </label>
            <div class="target-indicator">
              Cible: {{ targetStats.armSize[0] }}-{{ targetStats.armSize[1] }} cm
            </div>
          </div>
          
          <div class="form-row">
            <label>
              Tour de taille (cm)
              <input 
                type="number" 
                v-model.number="currentStats.waistSize"
                min="60"
                max="120"
                @change="updateStat('WaistSize')"
              />
            </label>
            <div class="target-indicator">
              Cible: {{ targetStats.waistSize[0] }}-{{ targetStats.waistSize[1] }} cm
            </div>
          </div>
          
          <div class="form-row">
            <label>
              Tractions max (reps)
              <input 
                type="number" 
                v-model.number="currentStats.pullUpsMax"
                min="0"
                max="30"
                @change="updateStat('PullUpsMax')"
              />
            </label>
            <div class="target-indicator">
              Cible: {{ targetStats.pullUpsMax[0] }}-{{ targetStats.pullUpsMax[1] }} reps
            </div>
          </div>
          
          <div class="form-row">
            <label>
              Développé couché max (kg)
              <input 
                type="number" 
                v-model.number="currentStats.benchPressMax"
                min="20"
                max="150"
                @change="updateStat('BenchPressMax')"
              />
            </label>
            <div class="target-indicator">
              Cible: {{ targetStats.benchPressMax[0] }}-{{ targetStats.benchPressMax[1] }} kg
            </div>
          </div>
          
          <div class="form-row">
            <label>
              Endurance (rounds)
              <input 
                type="number" 
                v-model.number="currentStats.enduranceRounds"
                min="1"
                max="20"
                @change="updateStat('EnduranceRounds')"
              />
            </label>
            <div class="target-indicator">
              Cible: {{ targetStats.enduranceRounds[0] }}-{{ targetStats.enduranceRounds[1] }} rounds
            </div>
          </div>
        </div>
        <template #footer>
          <BaseButton 
            variant="primary" 
            label="Enregistrer les changements"
            @click="saveAllStats"
          />
        </template>
      </BaseCard>

      <!-- Progress Visualization Card -->
      <BaseCard title="Progression vers les objectifs" class="progress-visualization-card">
        <div class="progress-grid">
          <div 
            v-for="(progress, key) in progressStats" 
            :key="key" 
            class="progress-item"
          >
            <div class="progress-header">
              <div class="progress-label">{{ statLabels[key] }}</div>
              <div class="progress-value">{{ progress }}%</div>
            </div>
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ 
                  width: `${progress}%`,
                  backgroundColor: getProgressColor(progress)
                }"
              ></div>
            </div>
          </div>
        </div>
      </BaseCard>

      <!-- Weekly Progress Chart -->
      <BaseCard title="Évolution des mesures" class="chart-card">
        <ProgressChart 
          chartType="line"
          :chart-data="chartData"
          :options="chartOptions"
          default-option="weight"
        />
      </BaseCard>

      <!-- Program Completion Card -->
      <BaseCard title="Avancement du Programme" class="completion-card">
        <div class="weekly-progress-overview">
          <div 
            v-for="(week, index) in weeks" 
            :key="`week-${index}`" 
            class="week-progress-item"
            @click="navigateToWeek(index)"
          >
            <div class="week-progress-label">
              Semaine {{ index + 1 }}
            </div>
            <div class="week-progress-bar">
              <div 
                class="week-progress-fill" 
                :style="{ width: `${getWeekProgress(index)}%` }"
              ></div>
            </div>
            <div class="week-progress-value">{{ getWeekProgress(index) }}%</div>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import BaseCard from '@/components/ui/BaseCard.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import ProgressChart from '@/components/program/ProgressChart.vue';

export default {
  name: 'ProfileView',
  
  components: {
    BaseCard,
    BaseButton,
    ProgressChart
  },
  
  setup() {
    const store = useStore();
    const router = useRouter();
    
    // Get stats from store
    const stats = computed(() => store.getters['progress/getCurrentStats']);
    const targetStats = computed(() => store.state.progress.targetStats);
    
    // Current stats (reactive for input binding)
    const currentStats = reactive({
      weight: stats.value.currentWeight,
      chestSize: stats.value.currentChestSize,
      armSize: stats.value.currentArmSize,
      waistSize: stats.value.currentWaistSize,
      pullUpsMax: stats.value.currentPullUpsMax,
      benchPressMax: stats.value.currentBenchPressMax,
      enduranceRounds: stats.value.currentEnduranceRounds
    });
    
    // Progress stats
    const progressStats = computed(() => store.getters['progress/getAllProgressStats']);
    
    // Days remaining and time progress
    const daysRemaining = computed(() => store.getters['progress/getDaysRemaining']);
    const timeProgress = computed(() => store.getters['progress/getTimeProgress']);
    
    // Weeks data
    const weeks = computed(() => store.getters['program/getAllWeeks']);
    
    // Get week progress
    const getWeekProgress = (weekIndex) => {
      return store.getters['program/getWeekProgress'](weekIndex);
    };
    
    // Navigate to week
    const navigateToWeek = (weekIndex) => {
      router.push(`/week/${weekIndex}`);
    };
    
    // Stat labels for display
    const statLabels = {
      weight: 'Poids',
      chestSize: 'Tour de poitrine',
      armSize: 'Tour de bras',
      waistSize: 'Tour de taille',
      pullUpsMax: 'Tractions max',
      benchPressMax: 'Développé couché',
      enduranceRounds: 'Endurance'
    };
    
    // Get color based on progress
    const getProgressColor = (progress) => {
      if (progress < 30) return 'var(--danger-color)';
      if (progress < 60) return 'var(--warning-color)';
      if (progress < 90) return 'var(--primary-color)';
      return 'var(--success-color)';
    };
    
    // Update a specific stat
    const updateStat = (statName) => {
      const key = statName.charAt(0).toLowerCase() + statName.slice(1);
      store.dispatch('progress/updateStat', {
        statName,
        value: currentStats[key]
      });
    };
    
    // Save all stats
    const saveAllStats = () => {
      updateStat('Weight');
      updateStat('ChestSize');
      updateStat('ArmSize');
      updateStat('WaistSize');
      updateStat('PullUpsMax');
      updateStat('BenchPressMax');
      updateStat('EnduranceRounds');
      
      // Trigger global save
      store.dispatch('saveAllData');
      
      // Feedback could be added here (toast/notification)
      alert('Statistiques sauvegardées avec succès!');
    };
    
    // Chart data preparation
    const chartData = computed(() => {
      // Chart data for weight history
      const weightData = {
        labels: stats.value.weightHistory.map(entry => {
          const date = new Date(entry.date);
          return `${date.getDate()}/${date.getMonth() + 1}`;
        }),
        datasets: [{
          label: 'Poids (kg)',
          data: stats.value.weightHistory.map(entry => entry.value),
          borderColor: 'var(--primary-color)',
          backgroundColor: 'rgba(74, 144, 226, 0.1)',
          tension: 0.4
        }]
      };
      
      // Chart data for chest size history
      const chestSizeData = {
        labels: stats.value.chestSizeHistory.map(entry => {
          const date = new Date(entry.date);
          return `${date.getDate()}/${date.getMonth() + 1}`;
        }),
        datasets: [{
          label: 'Tour de poitrine (cm)',
          data: stats.value.chestSizeHistory.map(entry => entry.value),
          borderColor: 'var(--secondary-color)',
          backgroundColor: 'rgba(142, 68, 173, 0.1)',
          tension: 0.4
        }]
      };
      
      // Similar for other metrics...
      
      return {
        weight: weightData,
        chestSize: chestSizeData,
        // Add other metrics as needed
      };
    });
    
    // Chart options
    const chartOptions = [
      { label: 'Poids', value: 'weight' },
      { label: 'Tour de poitrine', value: 'chestSize' },
      // Add other options as needed
    ];
    
    onMounted(() => {
      // Ensure data is loaded
      if (!stats.value) {
        store.dispatch('progress/loadSavedProgress');
      }
    });
    
    return {
      currentStats,
      targetStats,
      progressStats,
      daysRemaining,
      timeProgress,
      weeks,
      statLabels,
      getProgressColor,
      getWeekProgress,
      navigateToWeek,
      updateStat,
      saveAllStats,
      chartData,
      chartOptions
    };
  }
};
</script>

<style scoped lang="scss">
.profile-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  
  h1 {
    margin-bottom: var(--space-lg);
    color: var(--primary-color);
    font-size: 2rem;
  }
  
  .profile-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--space-lg);
    
    .target-date-card {
      grid-column: span 4;
      
      .countdown {
        display: flex;
        align-items: baseline;
        margin-bottom: var(--space-md);
        
        .days-remaining {
          font-size: 3rem;
          font-weight: 700;
          color: var(--primary-color);
          line-height: 1;
        }
        
        .days-label {
          margin-left: var(--space-sm);
          font-size: 1.2rem;
          color: var(--muted-color);
        }
      }
      
      .target-date {
        margin-bottom: var(--space-md);
        
        span {
          display: block;
          margin-bottom: var(--space-xs);
          color: var(--text-color);
        }
        
        strong {
          font-size: 1.2rem;
          color: var(--secondary-color);
        }
      }
      
      .program-progress {
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
    
    .stats-card {
      grid-column: span 8;
      
      .stats-form {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-md);
        
        @media (max-width: 768px) {
          grid-template-columns: 1fr;
        }
        
        .form-row {
          display: flex;
          flex-direction: column;
          
          label {
            display: flex;
            flex-direction: column;
            margin-bottom: var(--space-xs);
            font-weight: 500;
          }
          
          input {
            padding: var(--space-sm);
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            font-size: 1rem;
            
            &:focus {
              outline: none;
              border-color: var(--primary-color);
              box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
            }
          }
          
          .target-indicator {
            font-size: 0.875rem;
            color: var(--muted-color);
          }
        }
      }
    }
    
    .progress-visualization-card {
      grid-column: span 6;
      
      .progress-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-md);
        
        .progress-item {
          .progress-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 4px;
            
            .progress-label {
              font-weight: 500;
            }
            
            .progress-value {
              font-weight: 500;
            }
          }
          
          .progress-bar {
            height: 8px;
            background-color: var(--border-color);
            border-radius: 4px;
            overflow: hidden;
            
            .progress-fill {
              height: 100%;
              border-radius: 4px;
              transition: width 0.3s ease;
            }
          }
        }
      }
    }
    
    .chart-card {
      grid-column: span 6;
    }
    
    .completion-card {
      grid-column: span 12;
      
      .weekly-progress-overview {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: var(--space-md);
        
        .week-progress-item {
          cursor: pointer;
          padding: var(--space-sm);
          border-radius: var(--border-radius);
          transition: background-color 0.2s ease;
          
          &:hover {
            background-color: var(--light-bg);
          }
          
          .week-progress-label {
            margin-bottom: 4px;
            font-weight: 500;
          }
          
          .week-progress-bar {
            height: 6px;
            background-color: var(--border-color);
            border-radius: 3px;
            margin-bottom: 4px;
            overflow: hidden;
            
            .week-progress-fill {
              height: 100%;
              background-color: var(--primary-color);
              border-radius: 3px;
              transition: width 0.3s ease;
            }
          }
          
          .week-progress-value {
            font-size: 0.875rem;
            text-align: right;
          }
        }
      }
    }
    
    @media (max-width: 992px) {
      .target-date-card {
        grid-column: span 12;
      }
      
      .stats-card {
        grid-column: span 12;
      }
      
      .progress-visualization-card {
        grid-column: span 12;
      }
      
      .chart-card {
        grid-column: span 12;
      }
    }
  }
}
</style>
