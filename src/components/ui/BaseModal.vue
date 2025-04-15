<template>
  <transition name="modal">
    <div class="modal-overlay" v-if="show" @click="handleOverlayClick">
      <div class="modal-container" :class="{ 'modal-sm': size === 'sm', 'modal-lg': size === 'lg' }" @click.stop>
        <div class="modal-header">
          <h2 class="modal-title">{{ title }}</h2>
          <button class="modal-close" @click="close">
            <FontAwesomeIcon :icon="['fas', 'times']" />
          </button>
        </div>
        
        <div class="modal-body">
          <slot></slot>
        </div>
        
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
        
        <div v-else-if="showDefaultFooter" class="modal-footer">
          <BaseButton 
            variant="outline" 
            label="Annuler" 
            @click="close" 
          />
          <BaseButton 
            variant="primary" 
            :label="confirmLabel" 
            @click="confirm" 
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import BaseButton from './BaseButton.vue';

export default {
  name: 'BaseModal',
  
  components: {
    BaseButton
  },
  
  props: {
    title: {
      type: String,
      default: 'Modal'
    },
    show: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    closeOnOverlayClick: {
      type: Boolean,
      default: true
    },
    showDefaultFooter: {
      type: Boolean,
      default: false
    },
    confirmLabel: {
      type: String,
      default: 'Confirmer'
    }
  },
  
  emits: ['close', 'confirm'],
  
  setup(props, { emit }) {
    // Handle Escape key to close modal
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && props.show) {
        close();
      }
    };
    
    // Disable body scroll when modal is open
    const disableBodyScroll = () => {
      document.body.style.overflow = 'hidden';
    };
    
    const enableBodyScroll = () => {
      document.body.style.overflow = '';
    };
    
    // Close modal
    const close = () => {
      emit('close');
    };
    
    // Confirm action
    const confirm = () => {
      emit('confirm');
      close();
    };
    
    // Handle overlay click
    const handleOverlayClick = () => {
      if (props.closeOnOverlayClick) {
        close();
      }
    };
    
    // Lifecycle hooks
    onMounted(() => {
      window.addEventListener('keydown', handleKeyDown);
      if (props.show) {
        disableBodyScroll();
      }
    });
    
    onBeforeUnmount(() => {
      window.removeEventListener('keydown', handleKeyDown);
      enableBodyScroll();
    });
    
    // Watch for changes to show prop
    watch(() => props.show, (newVal) => {
      if (newVal) {
        disableBodyScroll();
      } else {
        enableBodyScroll();
      }
    });
    
    return {
      close,
      confirm,
      handleOverlayClick
    };
  }
};
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  padding: var(--space-md);
}

.modal-container {
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 550px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  
  &.modal-sm {
    max-width: 400px;
  }
  
  &.modal-lg {
    max-width: 800px;
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) var(--space-lg);
  border-bottom: 1px solid var(--border-color);
  
  .modal-title {
    margin: 0;
    font-size: var(--font-size-lg);
    font-weight: 600;
  }
  
  .modal-close {
    background: none;
    border: none;
    font-size: 1.2rem;
    color: var(--muted-color);
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s;
    
    &:hover {
      background-color: var(--light-bg);
      color: var(--text-color);
    }
  }
}

.modal-body {
  padding: var(--space-lg);
  flex: 1;
  overflow-y: auto;
}

.modal-footer {
  padding: var(--space-md) var(--space-lg);
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
}

// Transitions
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
  
  .modal-container {
    transition: transform 0.3s;
  }
}

.modal-enter-from {
  opacity: 0;
  
  .modal-container {
    transform: translateY(30px);
  }
}

.modal-leave-to {
  opacity: 0;
  
  .modal-container {
    transform: translateY(30px);
  }
}

@media (max-width: 768px) {
  .modal-container {
    max-height: calc(100vh - 40px);
    
    &.modal-lg, &.modal-sm {
      max-width: 100%;
    }
  }
  
  .modal-header, .modal-body, .modal-footer {
    padding: var(--space-md);
  }
}
</style>
