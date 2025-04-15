<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <AppHeader @toggle-dark-mode="toggleDarkMode" />
    <SideNav />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import { ref, onMounted, provide } from 'vue';
import { useStore } from 'vuex';
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import SideNav from '@/components/layout/SideNav.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    SideNav
  },
  setup() {
    const store = useStore();
    const isDarkMode = ref(false);

    // Injection du thème pour les composants enfants
    provide('isDarkMode', isDarkMode);
    
    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      localStorage.setItem('darkMode', isDarkMode.value);
      document.documentElement.classList.toggle('dark-theme', isDarkMode.value);
    };
    
    onMounted(() => {
      // Initialisation du thème depuis le stockage local
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode !== null) {
        isDarkMode.value = savedDarkMode === 'true';
        document.documentElement.classList.toggle('dark-theme', isDarkMode.value);
      }
      
      // Initialisation du programme
      store.dispatch('program/initializeCurrentWeekAndDay');
      
      // Chargement des données utilisateur si disponibles
      const savedProgress = localStorage.getItem('userProgress');
      if (savedProgress) {
        store.dispatch('program/loadSavedProgress', JSON.parse(savedProgress));
      }
    });
    
    return {
      isDarkMode,
      toggleDarkMode
    };
  }
};
</script>

<style lang="scss">
@import '@/assets/css/normalize.css';
@import '@/assets/css/main.css';

#app {
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: var(--text-color);
  background-color: var(--bg-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-left: 250px;
  transition: margin-left 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 15px;
  }
}

// Transitions de page
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Transitions de liste
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

// Ajustements pour le mode sombre
.dark-mode {
  --bg-color: #121212;
  --text-color: #e0e0e0;
  --card-bg: #1e1e1e;
  --border-color: #333;
  --primary-color: #90caf9;
  --secondary-color: #ce93d8;
  --success-color: #81c784;
  --danger-color: #e57373;
  --warning-color: #ffb74d;
}
</style>
