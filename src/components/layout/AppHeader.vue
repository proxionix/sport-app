<template>
  <header class="app-header">
    <div class="header-left">
      <button class="menu-toggle" @click="toggleSidebar" aria-label="Toggle menu">
        <FontAwesomeIcon :icon="['fas', 'bars']" />
      </button>
      <router-link to="/" class="logo">
        <h1>Fitness<span>Tracker</span></h1>
      </router-link>
    </div>
    
    <div class="header-center">
      <div class="program-title">Programme Intégré Boxe & Musculation</div>
      <div class="countdown" v-if="daysRemaining > 0">
        <FontAwesomeIcon :icon="['fas', 'clock']" />
        <span>{{ daysRemaining }} jours avant le 13 juillet</span>
      </div>
    </div>
    
    <div class="header-right">
      <div class="progress-indicator">
        <div class="progress-label">Programme global: {{ overallProgress }}%</div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${overallProgress}%` }"></div>
        </div>
      </div>
      
      <div class="header-actions">
        <button class="theme-toggle" @click="toggleDarkMode" aria-label="Toggle dark mode">
          <FontAwesomeIcon :icon="['fas', isDarkMode ? 'sun' : 'moon']" />
        </button>
        
        <router-link to="/profile" class="profile-link">
          <FontAwesomeIcon :icon="['fas', 'user-circle']" size="lg" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'AppHeader',
  
  emits: ['toggle-dark-mode'],
  
  setup(props, { emit }) {
    const store = useStore();
    
    const isDarkMode = computed(() => store.getters['user/isDarkMode']);
    
    const overallProgress = computed(() => store.getters['program/getOverallProgress']);
    
    const daysRemaining = computed(() => store.getters['progress/getDaysRemaining']);
    
    const toggleDarkMode = () => {
      store.dispatch('user/toggleDarkMode');
      store.dispatch('user/saveUserSettings');
      emit('toggle-dark-mode');
    };
    
    const toggleSidebar = () => {
      store.dispatch('user/toggleSidebar');
      store.dispatch('user/saveUserSettings');
    };
    
    return {
      isDarkMode,
      overallProgress,
      daysRemaining,
      toggleDarkMode,
      toggleSidebar
    };
  }
};
</script>

<style scoped lang="scss">
.app-header {
  height: var(--header-height);
  background-color: var(--card-bg);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-lg);
  position: sticky;
  top: 0;
  z-index: var(--z-header);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  .header-left, .header-right {
    display: flex;
    align-items: center;
  }
  
  .header-left {
    width: 25%;
    
    .menu-toggle {
      display: none;
      margin-right: var(--space-md);
      font-size: 1.2rem;
      color: var(--text-color);
      
      @media (max-width: 768px) {
        display: block;
      }
    }
    
    .logo {
      text-decoration: none;
      
      h1 {
        margin: 0;
        font-size: 1.5rem;
        color: var(--primary-color);
        
        span {
          font-weight: 300;
          color: var(--text-color);
        }
      }
    }
  }
  
  .header-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    
    .program-title {
      font-weight: 600;
      font-size: 1.1rem;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    .countdown {
      font-size: 0.85rem;
      color: var(--secondary-color);
      display: flex;
      align-items: center;
      gap: var(--space-xs);
      margin-top: 2px;
    }
    
    @media (max-width: 768px) {
      display: none;
    }
  }
  
  .header-right {
    width: 25%;
    justify-content: flex-end;
    gap: var(--space-md);
    
    .progress-indicator {
      display: flex;
      flex-direction: column;
      width: 150px;
      
      .progress-label {
        font-size: 0.75rem;
        margin-bottom: 2px;
        white-space: nowrap;
      }
      
      .progress-bar {
        height: 6px;
        background-color: var(--border-color);
        border-radius: 3px;
        overflow: hidden;
        
        .progress-fill {
          height: 100%;
          background-color: var(--primary-color);
          border-radius: 3px;
          transition: width 0.3s ease;
        }
      }
      
      @media (max-width: 768px) {
        display: none;
      }
    }
    
    .header-actions {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      
      .theme-toggle, .profile-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        color: var(--text-color);
        transition: background-color 0.2s ease;
        
        &:hover {
          background-color: var(--border-color);
        }
      }
    }
  }
}
</style>
