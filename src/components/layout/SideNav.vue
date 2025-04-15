<template>
  <aside class="side-nav" :class="{ 'collapsed': isCollapsed }">
    <div class="nav-toggle" @click="toggleSidebar">
      <FontAwesomeIcon :icon="['fas', isCollapsed ? 'chevron-right' : 'chevron-left']" />
    </div>
    
    <nav class="nav-content">
      <ul class="nav-menu">
        <li>
          <router-link to="/" exact-active-class="active">
            <FontAwesomeIcon :icon="['fas', 'home']" />
            <span class="nav-text">Accueil</span>
          </router-link>
        </li>
        
        <li>
          <router-link to="/weeks" active-class="active">
            <FontAwesomeIcon :icon="['fas', 'calendar-week']" />
            <span class="nav-text">Semaines</span>
          </router-link>
        </li>
        
        <li>
          <router-link :to="`/day/${currentWeekIndex}/${currentDayIndex}`" active-class="active">
            <FontAwesomeIcon :icon="['fas', 'calendar-day']" />
            <span class="nav-text">Aujourd'hui</span>
          </router-link>
        </li>
        
        <li>
          <router-link to="/profile" active-class="active">
            <FontAwesomeIcon :icon="['fas', 'chart-line']" />
            <span class="nav-text">Suivi & Progrès</span>
          </router-link>
        </li>
      </ul>
      
      <div class="nav-section">
        <h3 class="section-title" v-if="!isCollapsed">Programme par semaine</h3>
        <ul class="week-list">
          <li v-for="(week, index) in weeks" :key="`week-${index}`">
            <router-link :to="`/week/${index}`" active-class="active">
              <span class="week-number">S{{ index + 1 }}</span>
              <template v-if="!isCollapsed">
                <span class="week-dates">{{ formatDateRange(week.dateRange) }}</span>
                <span class="week-progress" :style="{ width: `${getWeekProgress(index)}%` }"></span>
              </template>
            </router-link>
          </li>
        </ul>
      </div>
      
      <div class="nav-section" v-if="recentExercises.length && !isCollapsed">
        <h3 class="section-title">Exercices récents</h3>
        <ul class="recent-list">
          <li v-for="slug in recentExercises" :key="slug">
            <router-link :to="`/exercise/${slug}`" active-class="active">
              <FontAwesomeIcon :icon="['fas', 'dumbbell']" />
              <span class="nav-text">{{ getExerciseTitle(slug) }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default {
  name: 'SideNav',
  
  setup() {
    const store = useStore();
    
    const isCollapsed = computed(() => store.getters['user/isSidebarCollapsed']);
    
    const weeks = computed(() => store.getters['program/getAllWeeks']);
    
    const currentWeekIndex = computed(() => store.state.program.currentWeekIndex);
    const currentDayIndex = computed(() => store.state.program.currentDayIndex);
    
    const recentExercises = computed(() => store.getters['user/getRecentlyViewedExercises']);
    
    const getWeekProgress = (weekIndex) => {
      return store.getters['program/getWeekProgress'](weekIndex);
    };
    
    const getExerciseTitle = (slug) => {
      const exerciseDetail = store.getters['program/getExerciseDetail'](slug);
      if (exerciseDetail) {
        // Limiter la longueur du titre pour l'affichage
        let title = exerciseDetail.title;
        if (title.length > 25) {
          title = title.substring(0, 22) + '...';
        }
        return title;
      }
      return slug;
    };
    
    const formatDateRange = (dateRange) => {
      if (!dateRange || !dateRange.start || !dateRange.end) return '';
      
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      
      // Formatage court adapté à la sidebar
      return `${format(startDate, 'dd/MM', { locale: fr })} - ${format(endDate, 'dd/MM', { locale: fr })}`;
    };
    
    const toggleSidebar = () => {
      store.dispatch('user/toggleSidebar');
      store.dispatch('user/saveUserSettings');
    };
    
    return {
      isCollapsed,
      weeks,
      currentWeekIndex,
      currentDayIndex,
      recentExercises,
      getWeekProgress,
      getExerciseTitle,
      formatDateRange,
      toggleSidebar
    };
  }
};
</script>

<style scoped lang="scss">
.side-nav {
  position: fixed;
  top: var(--header-height);
  left: 0;
  height: calc(100vh - var(--header-height));
  width: var(--sidebar-width);
  background-color: var(--card-bg);
  border-right: 1px solid var(--border-color);
  transition: width 0.3s ease, transform 0.3s ease;
  overflow-y: auto;
  z-index: var(--z-sidebar);
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  
  &.collapsed {
    width: 60px;
    
    .nav-text, .section-title, .week-dates {
      display: none;
    }
    
    .week-number {
      margin-right: 0;
    }
  }
  
  .nav-toggle {
    position: absolute;
    right: 0;
    top: 10px;
    width: 20px;
    height: 40px;
    background-color: var(--primary-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px 0 0 4px;
    z-index: 10;
  }
  
  .nav-content {
    padding: var(--space-md) 0;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .nav-menu {
    list-style: none;
    padding: 0;
    margin: 0 0 var(--space-lg) 0;
    
    li {
      margin-bottom: 2px;
      
      a {
        display: flex;
        align-items: center;
        padding: var(--space-sm) var(--space-md);
        color: var(--text-color);
        text-decoration: none;
        transition: background-color 0.2s ease;
        
        &:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        &.active {
          background-color: var(--primary-color);
          color: white;
        }
        
        .nav-text {
          margin-left: var(--space-md);
        }
      }
    }
  }
  
  .nav-section {
    margin-bottom: var(--space-lg);
    
    .section-title {
      font-size: 0.8rem;
      text-transform: uppercase;
      color: var(--muted-color);
      margin: 0 var(--space-md) var(--space-sm);
      padding-bottom: var(--space-xs);
      border-bottom: 1px solid var(--border-color);
    }
    
    .week-list, .recent-list {
      list-style: none;
      padding: 0;
      margin:
