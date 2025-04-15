<template>
  <div class="not-found-view">
    <div class="not-found-content">
      <div class="error-code">404</div>
      <h1>Page Non Trouvée</h1>
      <p>Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
      <BaseButton 
        variant="primary" 
        label="Retour à l'accueil" 
        @click="$router.push('/')"
        icon="home"
      />
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue';

export default {
  name: 'NotFoundView',
  
  components: {
    BaseButton
  }
};
</script>

<style scoped lang="scss">
.not-found-view {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: var(--space-xl) var(--space-md);
  
  .not-found-content {
    max-width: 500px;
    
    .error-code {
      font-size: 6rem;
      font-weight: 700;
      color: var(--primary-color);
      line-height: 1;
      margin-bottom: var(--space-md);
      
      @media (max-width: 576px) {
        font-size: 4rem;
      }
    }
    
    h1 {
      margin-bottom: var(--space-md);
      color: var(--text-color);
    }
    
    p {
      margin-bottom: var(--space-lg);
      color: var(--muted-color);
    }
  }
}
</style>
