<template>
  <div id="app">
    <AppHeader />
    <SideNav />
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
    <BaseModal v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import SideNav from '@/components/layout/SideNav.vue'
import BaseModal from '@/components/ui/BaseModal.vue'

export default {
  name: 'App',
  components: { AppHeader, AppFooter, SideNav, BaseModal },
  computed: {
    ...mapState(['showModal'])
  }
}
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.main-content {
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
