<template>
  <footer class="app-footer">
    <div class="footer-content">
      <div class="footer-section">
        <p class="copyright">© {{ currentYear }} FitnessTracker</p>
      </div>
      
      <div class="footer-section links">
        <a href="#" @click.prevent="saveData">Sauvegarder les données</a>
        <a href="#" @click.prevent="showAboutModal = true">À propos</a>
        <a href="#" @click.prevent="showHelpModal = true">Aide</a>
      </div>
      
      <div class="footer-section">
        <p class="version">v{{ appVersion }}</p>
      </div>
    </div>
    
    <!-- Modal À propos -->
    <BaseModal 
      v-if="showAboutModal" 
      title="À propos de FitnessTracker" 
      @close="showAboutModal = false"
    >
      <div class="about-content">
        <h3>Programme Intégré Boxe & Musculation</h3>
        <p>Application de suivi développée spécifiquement pour votre programme d'entraînement sur 12 semaines visant à obtenir un physique esthétique et des compétences en boxe anglaise avant votre transition vers le kick-boxing.</p>
        <p>Cette application est conçue pour être hébergée sur votre serveur Proxmox dans un conteneur LXC.</p>
        <p class="version-info">Version {{ appVersion }}</p>
      </div>
    </BaseModal>
    
    <!-- Modal Aide -->
    <BaseModal 
      v-if="showHelpModal" 
      title="Aide" 
      @close="showHelpModal = false"
    >
      <div class="help-content">
        <h3>Comment utiliser l'application</h3>
        <ul>
          <li><strong>Page d'accueil</strong> : Aperçu global de votre progression et des exercices du jour.</li>
          <li><strong>Vue Semaine</strong> : Consultez le programme complet d'une semaine spécifique.</li>
          <li><strong>Vue Jour</strong> : Détails des exercices pour une journée spécifique, avec possibilité de les cocher comme terminés.</li>
          <li><strong>Détail Exercice</strong> : Instructions complètes pour chaque exercice.</li>
          <li><strong>Profil</strong> : Suivez vos progrès et mettez à jour vos statistiques personnelles.</li>
        </ul>
        <h3>Conseils</h3>
        <ul>
          <li>Cochez les exercices au fur et à mesure pour suivre votre progression.</li>
          <li>Consultez les détails d'un exercice avant de le commencer.</li>
          <li>Mettez à jour vos mesures chaque semaine dans la section Profil.</li>
        </ul>
      </div>
    </BaseModal>
  </footer>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import BaseModal from '@/components/ui/BaseModal.vue';

export default {
  name: 'AppFooter',
  
  components: {
    BaseModal
  },
  
  setup() {
    const store = useStore();
    const showAboutModal = ref(false);
    const showHelpModal = ref(false);
    
    const currentYear = computed(() => new Date().getFullYear());
    const appVersion = computed(() => store.state.version);
    
    const saveData = () => {
      store.dispatch('saveAllData');
      // Afficher une notification de succès
      alert('Données sauvegardées avec succès !');
    };
    
    return {
      currentYear,
      appVersion,
      showAboutModal,
      showHelpModal,
      saveData
    };
  }
};
</script>

<style scoped lang="scss">
.app-footer {
  background-color: var(--card-bg);
  border-top: 1px solid var(--border-color);
  padding: var(--space-md) var(--space-lg);
  font-size: 0.875rem;
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    
    .footer-section {
      display: flex;
      align-items: center;
      
      &.links {
        display: flex;
        gap: var(--space-lg);
        
        a {
          color: var(--text-color);
          text-decoration: none;
          
          &:hover {
            color: var(--primary-color);
            text-decoration: underline;
          }
        }
      }
      
      .copyright, .version {
        margin: 0;
        color: var(--muted-color);
      }
    }
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      gap: var(--space-sm);
      text-align: center;
      
      .footer-section {
        justify-content: center;
        
        &.links {
          gap: var(--space-md);
        }
      }
    }
  }
}

.about-content, .help-content {
  color: var(--text-color);
  
  h3 {
    margin-top: 0;
    margin-bottom: var(--space-md);
    color: var(--primary-color);
  }
  
  p {
    margin-bottom: var(--space-md);
    line-height: 1.6;
  }
  
  ul {
    list-style: disc;
    margin-left: var(--space-lg);
    margin-bottom: var(--space-lg);
    
    li {
      margin-bottom: var(--space-sm);
    }
  }
  
  .version-info {
    font-style: italic;
    color: var(--muted-color);
    margin-top: var(--space-lg);
  }
}
</style>
