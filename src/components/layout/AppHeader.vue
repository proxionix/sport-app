<template>
  <header class="app-header">
    <div class="branding">
      <FontAwesomeIcon :icon="['fas', 'dumbbell']" class="icon" />
      <h1>Sport Tracker Pro</h1>
    </div>
    
    <nav class="main-nav">
      <router-link 
        v-for="link in navLinks" 
        :key="link.path" 
        :to="link.path"
        class="nav-link"
      >
        {{ link.label }}
      </router-link>
    </nav>

    <div class="user-actions">
      <BaseButton @click="$store.commit('TOGGLE_MODAL')">
        <FontAwesomeIcon :icon="['fas', 'gear']" />
      </BaseButton>
    </div>
  </header>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'AppHeader',
  components: { FontAwesomeIcon, BaseButton },
  data() {
    return {
      navLinks: [
        { path: '/', label: 'Accueil' },
        { path: '/program', label: 'Programme' },
        { path: '/progress', label: 'Progrès' },
        { path: '/profile', label: 'Profil' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  background: $primary-gradient;
  color: #fff;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: $header-shadow;

  .branding {
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon {
      font-size: 2rem;
    }

    h1 {
      margin: 0;
      font-weight: 700;
      font-size: 1.8rem;
    }
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    margin: 0 1.5rem;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #fff;
      transition: width 0.3s ease;
    }

    &:hover::after,
    &.router-link-exact-active::after {
      width: 100%;
    }
  }

  .user-actions {
    display: flex;
    gap: 1rem;
  }
}
</style>
